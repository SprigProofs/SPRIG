<template>
  <Button color="yellow" icon="md-add-round" @click="openDialog()">New proof</Button>
  <SlideOver v-model="slideOpen" panel-title="New proof attempt">
    <div class="space-y-4">
      <div v-if="!preview">
        <div>
          <div class="flex space-x-4 items-baseline">
            <h3 class="flex-grow text-sm font-medium text-gray-700">Template</h3>
            <Button :icon="templateVisible ? 'md-visibilityoff' : 'md-visibility'"
              @click.prevent="templateVisible = !templateVisible">{{
              templateVisible ? 'Hide' : 'Show'
            }}</Button>
            <Button icon="md-copyall" @click="copy(template)">Copy</Button>
          </div>
          <pre v-show="templateVisible"
            class="text-sm whitespace-pre-wrap text-gray-600">{{ template }}</pre>
        </div>

        <div>
          <label for="proofAttempt" class="block text-sm font-medium text-gray-700">
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
        <Button v-if="preview" color="indigo" filled>Publish</Button>
      </div>
    </div>


  </SlideOver>
</template>

<script setup lang="ts">
import dedent from 'dedent';
import _ from 'lodash';
import { computed, provide, ref } from 'vue';
import { Challenge, Sprig, copy, ProofAttempt, Status } from '../../sprig';
import { Button, SlideOver } from '../small';
import { store } from '../../store';
import { collectPreviousDefs, getChallenges } from '../languages/Lean4/Lean4';
import LANGS from '../languages';
import ProofAttemptPageVue from '../pages/ProofAttemptPage.vue';
import dayjs from 'dayjs';

const slideOpen = ref(false);
const templateVisible = ref(true);
const preview = ref(false);
const instancePreview = ref(null);
const proofInput = ref("");

const props = defineProps<{
  challenge: Challenge,
  instance: Sprig,
}>();

function openDialog() {
  slideOpen.value = true;
  console.log("openDialog", props.challenge);
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