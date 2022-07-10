<template>
  <div>
  <Button class="w-full" color="yellow" icon="md-add-round" @click.prevent="openDialog()">
    <span class="whitespace-nowrap">New proof</span>
  </Button>
  <SlideOver v-model="slideOpen" panel-title="New proof attempt">
    <div class="space-y-4">
      <div v-if="!preview">
        <div class="prose">
          <p>
            For more details about the format, please refer to
            <router-link to="/docs" target="_blank" class="hover:text-purple-700 after:content-['↗']">the docs</router-link>.
            We provide here a template to make writting the proof in your favorite
            editor easier.
          </p>

          <div class="relative min-h-[3rem] mt-2">
            <div class="absolute right-4 -top-4 flex justify-end space-x-4">
              <Button :icon="templateVisible ? 'md-visibilityoff' : 'md-visibility'"
                @click.prevent="templateVisible = !templateVisible">{{
                templateVisible ? 'Hide' : 'Show'
              }}</Button>
              <Button icon="md-copyall" @click="copy(template)">Copy</Button>
            </div>
            <pre class="mt-0" v-show="templateVisible">{{ template }}</pre>
          </div>

          <label for="proofAttempt" class="">
            Proof attempt
          </label>
          <div class="mt-1">
            <textarea v-model="proofInput" id="proofAttempt" name="proofAttempt" rows="20"
              autocorrect="false" spellcheck="false"
              class="whitespace-pre font-mono shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-sm"
              placeholder="theorem ..." />
          </div>
          <!-- <p class="mt-2 text-sm text-gray-500">
            The main question... </p> -->
        </div>

      </div>
      <div v-else>
        <p class="text-sm text-gray-600 pb-4 border-b ">
          Once published, your proof will look like the following:
        </p>

        <ProofAttemptPageVue instance-hash="preview" hash="X" :instance-value="instancePreview"
          class="-mx-8 -my-4 "/>

        <div class="prose pt-4 w-full border-t">
          <template v-if="instancePreview.proofs['X'].challenges.length == 0">
            You are submiting a machine level proof, as there are no challengeable part.
          </template><template v-else>
            You are submiting a proof of height {{ instancePreview.proofs['X'].height }}
            with {{ instancePreview.proofs['X'].challenges.length }} challengable claims.
          </template>
          This will cost a total of <Price :amount="costs.total" />:
          <ul>
            <li v-if="costs.upstake > 0"><Price :amount="costs.upstake" /> for the upstake (reimbursed if the proof is true)</li>
            <li v-if="costs.downstake > 0"><Price :amount="costs.downstake" /> for the downstake (reimbursed if the proof is true)</li>
            <li v-if="costs.verification > 0"><Price :amount="costs.verification" /> for machine verification</li>
          </ul>

        </div>

      </div>

      <div v-if="!proofSent" class="flex space-x-4 justify-end">
        <Button v-if="!preview" @click="togglePreview()" color="indigo" >Preview</Button>
        <Button v-else @click="togglePreview()" color="indigo" >Edit</Button>
        <Button v-if="preview" @click="publish()" color="indigo" filled>Publish</Button>
      </div>
      <div v-else class="flex justify-end">
          <LoadingIndicator>
            Submiting proof...
          </LoadingIndicator>
      </div>
    </div>


  </SlideOver>
  </div>
</template>

<script setup lang="ts">
import _ from 'lodash';
import { computed, nextTick, provide, reactive, ref } from 'vue';
import { Challenge, Sprig, copy, ProofAttempt, Status, linkTo } from '../../sprig';
import { Button, SlideOver, LoadingIndicator } from '../small';
import { store } from '../../store';
import LANGS from '../languages';
import ProofAttemptPageVue from '../pages/ProofAttemptPage.vue';
import dayjs from 'dayjs';
import { useRouter } from 'vue-router';

const slideOpen = ref(false);
const templateVisible = ref(false);
const preview = ref(false);
const proofSent = ref(false);
const instancePreview = ref(null);
const costs = reactive({
  upstake: 0,
  downstake: 0,
  verification: 0,
  total: 0,
})
const proofInput = ref("");

const props = defineProps<{
  challenge: Challenge,
  instance: Sprig,
}>();
const router = useRouter();

function openDialog() {
  slideOpen.value = true;
}

async function publish() {
  proofSent.value = true;
  store.newProofAttempt(
    props.instance.hash, props.challenge.hash,
    lang.challengeCount(proofInput.value) === 0,
    proofInput.value
  ).then((proofAttempt) => {
    console.log("published", proofAttempt);
    nextTick(() => router.push(linkTo(proofAttempt)));
  }).catch((err) => {
    proofSent.value = false;
  });
}

function togglePreview() {
  preview.value = !preview.value;
  const hash = "preview"

  if (preview.value) {
    const sprig = new Sprig({
      language: props.instance.language,
      params: props.instance.params,
      hash: hash,
      proofs: _.mapValues({...props.instance.proofs}, (proof) => {
        const newAttempt = new ProofAttempt({...proof});
        newAttempt.instanceHash = hash;
        return newAttempt;
      }),
      challenges: _.mapValues({...props.instance.challenges}, (challenge) => {
        const newChallenge = new Challenge({...challenge});
        newChallenge.instanceHash = hash;
        return newChallenge;
      }),
      rootQuestion: props.instance.rootQuestion,
    })

    const challengeCount = lang.challengeCount(proofInput.value);
    const challenges = _.range(challengeCount).map((i) => {
      return `X${i}`;
    });
    const height = challengeCount > 0 ? props.challenge.height - 1 : 0;

    sprig.proofs["X"] = new ProofAttempt({
      hash: "X",
      instanceHash: hash,
      parent: props.challenge.hash,
      author: store.user,
      proof: proofInput.value,
      height,
      status: Status.UNCHALLENGED,
      createdAt: dayjs(),
      challenges,
    });

    challenges.forEach(h => {
      sprig.challenges[h] = new Challenge({
        hash: h,
        instanceHash: hash,
        parent: "X",
        author: null,
        createdAt: dayjs(),
        challengedAt: null,
        openUntil: dayjs().add(sprig.params.timeForQuestions.asSeconds(), 's'),
        attempts: [],
        status: Status.UNCHALLENGED,
        height,
      });
    });

    instancePreview.value = sprig;
    costs.downstake = sprig.params.downstakes[height];
    costs.upstake = sprig.params.upstakes[height];
    costs.verification = height == 0 ? sprig.params.verificationCost : 0;
    costs.total = costs.downstake + costs.upstake + costs.verification;
  }
}

const attempt = props.instance.proofs[props.challenge.parent];
const lang = LANGS[props.instance.language];
const template = lang.attemptTemplate(props.challenge.hash, props.instance);
const challengeCount = () => lang.challengeCount(proofInput.value);

// So that the preview is readOnly.
provide('readOnly', true);
</script>