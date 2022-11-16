<template>
  <Embed404 v-if="!attempt"/>
  <div v-else>
    <div class="max-w-7xl mx-auto ">
      <header class="mx-8 mt-8">

        <div class="flex mb-2">
            <StatusTag :status="attempt.status" />
            <LanguageTag :lang="instance.language" class="ml-2" />
            <div class="ml-4 font-bold ">
                Bounty
                <Price :amount="attempt.possibleReward(params)" />
            </div>
        </div>

        <div class="lg:flex lg:items-center lg:justify-between">
          <div class="flex-1 min-w-0">
            <h1 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              {{ lang.title(attempt, instance) }}
            </h1>
            <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
              <div class="mt-2 flex items-center text-sm text-gray-500">
                <v-icon name="md-person-round" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                <User :name="attempt.author" />
              </div>
              <div class="mt-2 flex items-center text-sm text-gray-500">
                <v-icon name="fa-mountain" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                <span>{{ attempt.height }} / {{ params.rootHeight }}</span>
              </div>
              <div class="mt-2 flex items-center text-sm text-gray-500">
                <v-icon name="md-accesstime-round" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true" />
                Created&nbsp;<Time :time="attempt.createdAt" suffix />
              </div>
              <div class="mt-2 flex items-center text-sm text-gray-500">
                <v-icon name="md-lockclock" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                Closing&nbsp;<Time :time="attempt.expires(instance)" suffix />
              </div>
            </div>
          </div>
        </div>

        <section class="prose pt-6">
          <p v-if="attempt.status == Status.UNCHALLENGED && !isMachine">
            This <span v-if="attempt.height == 0">machine</span> proof attempt is currently
            <StatusTag :status="attempt.status" />.
            <ul>
              <li>
                If nothing happens, it will be
                <StatusTag status="validated"
                /> <Time :time="attempt.expires(instance)" suffix /> and the stakes
                of
                <Price :amount="stakeHeld" /> will be refunded to
                <User :name="attempt.author" />.
              </li>

              <li>
                In the meantime, the proof can be
                <StatusTag status="challenged" />
                by locking a bounty of
                <Price :amount="costToChallenge" />.
              </li>

              <li>
                If this attempt is
                <StatusTag status="rejected" />
                because of a challenge, the challenger's bounty is refunded
                and they win
                <User :name="attempt.author" />'s
                <Price :amount="downBounty" /> bounty.
              </li>

            </ul>

          </p>
          <p v-else-if="attempt.status == Status.UNCHALLENGED && isMachine">
            This machine proof will be submitted for verification and will be directly
            <StatusTag status="validated" />
            or
            <StatusTag status="rejected" />.
          </p>
          <p v-else-if="attempt.status == Status.CHALLENGED">
            This proof attempt is currently
            <StatusTag status="challenged" />
            <template v-if="attempt.challenges.some(c => instance.challenges[c].status === Status.UNCHALLENGED)">
              but you can challenge other claims for
              <Price :amount="costToChallenge" />
            </template>.
            <ul>
              <li>
                If all challenges get a valid response, this proof will be
                <StatusTag status="validated" />
                and
                <User :name="attempt.author" /> will be refunded their bounty of
                <Price :amount="stakeHeld" />.
              </li>

              <li>
                Otherwise, the first challenge that get no valid response will
                be rewarded with
                <Price :amount="downBounty" /> and this proof attempt
                becomes
                <StatusTag status="rejected" />.
              </li>

              <li>
                Every other successful challenge will only have its bounty refunded
                and the bounties of answered challenges
                will reward their answers with
                <Price :amount="costToChallenge" />.
              </li>
            </ul>
          </p>
          <p v-else-if="attempt.status == Status.VALIDATED">
            This proof attempt is currently
            <StatusTag status="validated" />
            and no more actions can be taken.
          </p>
          <p v-else-if="attempt.status == Status.REJECTED">
            This proof attempt is currently
            <StatusTag status="rejected" />
            <template v-if="attempt.challenges.some(c => !instance.challenges[c].decided())">
              but some challenges are still open for debate.
            </template>
            <template v-else>
              and no more actions can be taken.
            </template>
          </p>
        </section>

      </header>

      <div class="p-8 flex xl:flex-row-reverse xl:justify-between flex-col">
        <section v-if="!readOnly" class="xl:w-[32rem] xl:ml-8 mb-4">
          <h2 class="small-title pb-2">Actions log</h2>
          <ol>
            <li v-for="(action, idx) in actions">
              <Action :action="action" :instance="instance" :last="idx === actions.length - 1" />
            </li>
          </ol>
        </section>

        <section class="flex flex-col w-full">
          <div class="flex justify-between items-center">
            <h2 class="small-title mb-2">Proof attempt</h2>
            <div v-if="lang.fullText"
              class="flex text-gray-700 space-x-1 text-xl">
                <Button icon="md-copyall" @click="copy(lang.fullText(attempt, instance))">Copy</Button>
                <Button icon="md-simcarddownload-round" @click="download(`proof${attempt.uid()}.lean`, lang.fullText(attempt, instance))">Download</Button>
            </div>
          </div>

          <!-- <button
                    v-if="!showPreviousDefinitions"
                    class="self-center text-slate-600 text-sm hover:underline"
                    @click="showPreviousDefinitions = !showPreviousDefinitions">
                    <v-icon name="md-keyboarddoublearrowup"/>
                    Show previous definitions and lemmas
                    <v-icon name="md-keyboarddoublearrowup"/>
                </button>
                <div v-else class="flex flex-col items-center w-full">
                    <button
                        class="self-center text-slate-600 text-sm hover:underline"
                        @click="showPreviousDefinitions = !showPreviousDefinitions">
                        <v-icon name="md-keyboarddoublearrowdown"/>
                        Hide previous definitions and lemmas
                        <v-icon name="md-keyboarddoublearrowdown"/>
                    </button>
                    <code class="self-start">
                        <pre>okokok</pre>
                    </code>
                    <button
                        class="self-center text-slate-600 text-sm hover:underline"
                        @click="showPreviousDefinitions = !showPreviousDefinitions">
                        <v-icon name="md-keyboarddoublearrowup"/>
                        Hide previous definitions and lemmas
                        <v-icon name="md-keyboarddoublearrowup"/>
                    </button>
                </div> -->

          <!-- <code class="mt-2"><pre class="overflow-auto">{{ attempt.proof }}</pre>
                </code> -->
          <component :is="lang.ProofDisplay" :instance="instance" :attemptHash="hash" />
        </section>
      </div>
    </div>

    <section class="m-8" v-if="!readOnly">
      <el-collapse>
        <el-collapse-item title="Instance parameters">
          <Parameters :params="params" :highlight="attempt.height" />
        </el-collapse-item>
        <el-collapse-item title="Raw data">
          <pre class="text-sm text-gray-500 whitespace-pre overflow-scroll">{{ attempt }}</pre>
        </el-collapse-item>
      </el-collapse>
    </section>
  </div>
</template>

<script setup lang="ts">

import { inject, reactive, ref, watch } from 'vue';
import { copy, download, Sprig, Status } from '../../sprig';
import { store } from '../../store';
import { Price, StatusTag, Time } from "../small";
import User from '../medium/User.vue';
import Parameters from '../medium/Parameters.vue';
import Action from '../medium/Action.vue';
import { useRoute, useRouter } from 'vue-router';
import Languages from '../languages';
import { computed } from '@vue/reactivity';
import Embed404 from '../medium/Embed404.vue';
import LanguageTag from '../small/LanguageTag.vue';


const props = withDefaults(defineProps<{
  instanceHash: string,
  hash: string,
  instanceValue: Sprig,
}>(), {
  instanceValue: null,
});

const readOnly = inject('readOnly', false);
const instance = computed(() => props.instanceValue || store.instances[props.instanceHash]);
const attempt = computed(() => instance.value?.proofs[props.hash]);
const lang = computed(() => Languages[instance.value?.language]);
const params = computed(() => instance.value?.params);
const stakeHeld = computed(() => attempt.value?.stakeHeld(params.value));
const downBounty = computed(() => params.value?.downstakes[attempt.value?.height]);
const nbClaims = computed(() => attempt.value?.challenges.length);
const costToChallenge = computed(() => params.value?.costToChallenge(attempt.value));


const showPreviousDefinitions = ref(false);

const actions = computed(() => instance.value?.actions(attempt.value).map(action => {
  return {
    open: true,
    ...action,
  };
}));

const isMachine = computed(() => attempt.value.height == 0);
</script>

<style>

</style>