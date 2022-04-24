<template>

  <div class="w-full border rounded-sm shadow-sm hover:shadow-md group flex">
    <!-- First part of the card -->
    <div class="p-4 flex flex-col flex-grow">
      <!-- First row -->
      <div class="flex flex-row justify-between ">
        <!-- Top left -->
        <div class="space-x-2">
          <StatusTag class="" :status="claim.status" />
          <span class="text-gray-500 italic text-sm font-mono">#{{ claim.hash }}</span>
        </div>
      </div>
      <h3 class="text-lg pt-2  ">
        <span class="small-title break-all">{{ language.title(claim) }}</span>
        <span class="text-sm text-gray-700"> by cozyfractal</span>
      </h3>
      <code class="text-sm flex-grow">
        <pre class="whitespace-pre-wrap">{{ language.shortDescription(claim) }}</pre>
      </code>
    </div>

    <!-- Right of the card -->
    <div v-if="!decided(claim.status)" class="w-48  p-4 flex-shrink-0
          flex flex-col space-y-2 items-end">
      <div v-if="bounty > 0"
        class="text-black font-semibold rounded-sm">
        Bounty
        <Price :amount="bounty" />
      </div>
      <div class="text-xs text-slate-700 flex-grow">
        {{ claim.open_until.toNow() }} left
      </div>
      <button v-if="claim.status == Status.UNCHALLENGED" class="border bg-blue-100 rounded-md py-2 self-stretch shadow">
        Challenge for
        <Price amount="12" />
      </button>
      <button v-else-if="attemptCost !== null" class="border bg-blue-100 rounded-md py-2 w-full shadow">
        Add proof for
        <Price :amount="attemptCost" />
      </button>
    </div>
  </div>

</template>

<script setup lang="ts">
import { decided, Status, Claim, Parameters, LANGUAGES, Language } from '../sprig';
import StatusTag from './StatusTag.vue';
import Price from './Price.vue';
import { store } from '../store';

const props = defineProps({
  instanceHash: {
    type: String,
    required: true,
  },
  claimHash: {
    type: String,
    required: true,
  },
});

const instance = store.instances[props.instanceHash];
const claim: Claim = instance.claims[props.claimHash];
const language: Language = LANGUAGES[instance.language];
const params: Parameters = instance.params;
const bounty = claim.possibleDownstake(instance);
const attemptCost = claim.costAddAttempt(params);
</script>