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
            <a class="hover:text-purple-700">the documentation</a> (TBD).
            We provide here a template to make writting the proof easier.
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
            <textarea v-model="proofInput" id="proofAttempt" name="proofAttempt" rows="12"
              class="font-mono shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder="theorem riemann_hypothesis ..." />
          </div>
          <!-- <p class="mt-2 text-sm text-gray-500">
            The main question... </p> -->
        </div>

      </div>
      <div v-else>
        <ProofAttemptPageVue instance-hash="preview" hash="X" :instance-value="instancePreview"
          class="-m-6"/>
      </div>

      <div class="flex space-x-4 justify-end">
        <Button v-if="!preview" @click="togglePreview()" color="indigo" >Preview</Button>
        <Button v-else @click="togglePreview()" color="indigo" >Edit</Button>
        <Button v-if="preview" @click="publish()" color="indigo" filled>Publish</Button>
      </div>
    </div>


  </SlideOver>
  </div>
</template>

<script setup lang="ts">
import dedent from 'dedent';
import _ from 'lodash';
import { computed, nextTick, provide, ref } from 'vue';
import { Challenge, Sprig, copy, ProofAttempt, Status, linkTo } from '../../sprig';
import { Button, SlideOver } from '../small';
import { store } from '../../store';
import LANGS from '../languages';
import ProofAttemptPageVue from '../pages/ProofAttemptPage.vue';
import dayjs from 'dayjs';
import { useRouter } from 'vue-router';

const slideOpen = ref(false);
const templateVisible = ref(false);
const preview = ref(false);
const instancePreview = ref(null);
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
  store.newProofAttempt(
    props.instance.hash, props.challenge.hash,
    lang.challengeCount(proofInput.value) === 0,
    proofInput.value)
    .then((proofAttempt) => {
      console.log("published", proofAttempt);
      nextTick(() => router.push(linkTo(proofAttempt)));
    })
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
  }
}

const attempt = props.instance.proofs[props.challenge.parent];
const lang = LANGS[props.instance.language];
const template = lang.attemptTemplate(props.challenge.hash, props.instance);

// So that the preview is readOnly.
provide('readOnly', true);
</script>