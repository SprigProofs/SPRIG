<template>

  <div class="w-full border rounded-sm shadow-sm hover:shadow-md group flex">
    <!-- First part of the card -->
    <div class="p-4 flex flex-col flex-grow">
      <!-- First row -->
      <div class="flex flex-row justify-between ">
        <!-- Top left -->
        <div class="space-x-2">
          <StatusTag class="" :status="claim.status" />
          <LanguageTag :lang="instance.language" />
          <span class="text-gray-500 italic text-sm font-mono">{{ claim.uid() }}</span>
        </div>
      </div>
      <h3 class="text-lg pt-2  ">
        <span class="small-title break-all">{{ language.title(claim) }}</span>
        <span class="text-sm text-gray-700"> by TODO </span>
      </h3>
      <code class="text-sm flex-grow">
        <pre class="whitespace-pre-wrap">{{ language.shortDescription(claim) }}</pre>
      </code>
    </div>

    <!-- Right of the card -->
    <div v-if="!decided(claim.status)" class="p-4
          grid grid-cols-[auto_auto] gap-6 min-w-max">
      <LabeledData label="Bounty">
        <Price :amount="claim.possibleReward(instance)" />
      </LabeledData>
      <LabeledData :label="claim.decided() ? 'Expired' : 'Expires'">
        <Time :time="claim.open_until" />
      </LabeledData>

      <button v-if="claim.status == Status.UNCHALLENGED"
        class="col-span-2 self-end
          border bg-blue-100 rounded-md py-2 shadow">
        Challenge for
        <Price :amount="params.question_bounties[claim.height]" />
      </button>
      <button v-else-if="attemptCost !== null"
        class="col-span-2 self-end
        border bg-blue-100 rounded-md py-2 w-full shadow">
        Add proof for
        <Price :amount="attemptCost" />
      </button>
    </div>
  </div>

</template>

<script setup lang="ts">
import { decided, Status, Claim, Parameters, LANGUAGES, Language } from '../../sprig';
import { Price, StatusTag } from '../small';
import { store } from '../../store';
import LanguageTag from '../small/LanguageTag.vue';
import Time from '../small/Time.vue';
import LabeledData from '../small/LabeledData.vue';

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
const challengeCost = params.question_bounties[claim.height];
</script>