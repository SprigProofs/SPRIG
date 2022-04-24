<template>
  <!-- TODO: Route to a instance page, not the root proof attempt. -->
  <router-link :to="{ name: 'proofAttempt', params: { instanceHash, claimHash, attemptNb } }"
    class="w-full border rounded-sm shadow-sm hover:shadow-md group flex">
    <!-- First part of the card -->
    <div class="p-4 flex flex-col flex-grow">
      <!-- First row -->
      <div class="flex flex-row justify-between ">
        <!-- Top left -->
        <div class="space-x-2">
          <StatusTag class="" :status="attempt.status" />
          <el-tag effect="plain">{{ instance.language }}</el-tag>
          <span class="text-gray-500 italic text-sm font-mono">#{{ instanceHash }}/{{ claimHash }}.{{ attemptNb }}</span>
        </div>
      </div>
      <h3 class="text-lg pt-2  ">
        <span class="small-title break-all">{{ language.title(claim) }}</span>
        <span class="text-sm text-gray-700">
          by
          <User :name="attempt.claimer" />
        </span>
      </h3>
      <code class="text-sm flex-grow">
        <pre class="whitespace-pre-wrap">{{ language.shortDescription(claim) }}</pre>
      </code>
      

      <!-- <pre>{{ attempt }}</pre> -->

    </div>
    <!-- Right of the card -->
    <!-- <div v-if="!decided(attempt.status)" class=" p-4 flex-shrink-0
          flex flex-col space-y-2 items-end"> -->
      <!-- <div class="text-black font-semibold rounded-sm">
        Bounty
        <Price :amount="attempt.possibleReward(params)" />
      </div>
      <div class="text-xs text-slate-700 flex-grow">
        {{ claim.open_until.fromNow() }} left
      </div> -->

      <div class="grid grid-cols-[auto_auto] flex-wrap justify-evenly gap-y-4 gap-x-8 m-4">
        <LabeledData label="Bounty"><Price :amount="attempt.possibleReward(params)"/></LabeledData>
        <LabeledData label="Expires">{{ claim.open_until.fromNow() }}</LabeledData>
        <LabeledData label="Claims">5</LabeledData>
        <LabeledData label="Height">{{ attempt.height }} / {{ params.root_height - 1 }}</LabeledData>
      </div>
      
    <!-- </div> -->

  </router-link>

</template>

<script setup lang="ts">
import { decided, Status, humanize, Sprig, Claim, Language, LANGUAGES, ProofAttempt, Parameters } from '../sprig';
import { store } from '../store';
import StatusTag from './StatusTag.vue';
import Price from './Price.vue';
import User from './User.vue';
import StatusIcon from './StatusIcon.vue';
import LabeledData from './LabeledData.vue';

const props = defineProps({
  instanceHash: {
    type: String,
    required: true,
  },
  claimHash: {
    type: String,
    required: true,
  },
  attemptNb: {
    type: Number,
    required: true,
  },
});

const instance: Sprig = store.instances[props.instanceHash];
const params: Parameters = instance.params;
const claim: Claim = instance.claims[props.claimHash];
const attempt: ProofAttempt = instance.proof_attempts[props.claimHash][props.attemptNb];
const language: Language = LANGUAGES[instance.language];

</script>