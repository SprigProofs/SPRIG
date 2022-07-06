<template>
  <Embed404 v-if="!attempt"/>
  <div v-else>
    <div class="max-w-7xl mx-auto ">
      <header class="mx-8 mt-8">

        <div class="lg:flex lg:items-center lg:justify-between">
          <div class="flex-1 min-w-0">
            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              {{ lang.title(attempt, instance) }}
            </h2>
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
          <p v-if="attempt.status == Status.UNCHALLENGED">
            This proof attempt is currently
            <StatusTag :status="attempt.status" />
            so if nothing happens, it will be
            <StatusTag status="validated" />
            <Time :time="attempt.expires(instance)" suffix /> and the bounty
            of
            <Price :amount="stakeHeld" /> will be refunded to
            <User :name="attempt.author" />.
            If you think there is a mistake in this proof,
            you can challenge one of its {{ nbClaims }} claims
            and lock a bounty of
            <Price :amount="costToChallenge" />.
            If this attempt is
            <StatusTag status="rejected" />
            because of your challenge, your bounty is refunded
            and you win an extra
            <Price :amount="downBounty" />.
            If someone posts a valid proof of your challenge,
            the get your bounty instead.
          </p>
          <p v-else-if="attempt.status == Status.CHALLENGED">
            This proof attempt is currently
            <StatusTag status="challenged" />
            <template v-if="attempt.challenges.some(c => instance.challenges[c].status === Status.UNCHALLENGED)">
              but you can challenge other claims for
              <Price :amount="costToChallenge" />
            </template>.
            If all challenges get a valid response, this proof will be
            <StatusTag status="validated" />
            and
            <User :name="attempt.author" /> will be refunded their bounty of
            <Price :amount="stakeHeld" />.
            Otherwise, the first challenge that get no valid response will
            be rewarded with
            <Price :amount="downBounty" /> and this proof attempt
            becomes
            <StatusTag status="rejected" />.
            Every other successful challenge will only have its bounty refunded
            and the bounties of answered challenges
            will reward their answers with
            <Price :amount="costToChallenge" />.
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
              When they are acc
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

        <section class="flex flex-col flex-grow ">
          <h2 class="small-title mb-2">Proof attempt</h2>

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
          <pre class="text-sm text-gray-500 whitespace-pre-wrap">{{ attempt }}</pre>
        </el-collapse-item>
      </el-collapse>
    </section>
  </div>
</template>

<script setup lang="ts">

import { inject, reactive, ref, watch } from 'vue';
import { Status } from '../../sprig';
import { store } from '../../store';
import { Price, StatusTag, Time } from "../small";
import User from '../medium/User.vue';
import Parameters from '../medium/Parameters.vue';
import Action from '../medium/Action.vue';
import { useRoute, useRouter } from 'vue-router';
import Languages from '../languages';
import { computed } from '@vue/reactivity';
import Embed404 from '../medium/Embed404.vue';


const props = defineProps({
  instanceHash: {
    type: String,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
  instanceValue: {
    type: Object,
    required: false,
  },
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

</script>

<style>
/* .group:hover .el-timeline-item__node,
.group:hover .el-timeline-item__tail {
    border-left-color: #fef3c7;
    background-color: #ffdea1;
} */

.plus-pattern {
  background-repeat: repeat;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg  fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>