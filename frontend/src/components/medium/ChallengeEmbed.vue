<template>

  <div class="w-full group flex space-x-4">
    <!-- First part of the card -->
    <div class="flex flex-col flex-grow">
      <!-- First row -->
      <div class="flex flex-row justify-between ">
        <!-- Top left -->
        <div class="space-x-2">
          <StatusTag class="" :status="challenge.status" />
          <LanguageTag :lang="instance.language" />
          <UidTag :tooltip="false" :object="challenge" />
        </div>
      </div>
      <h3 class="text-lg pt-2  ">
        <span class="small-title break-all">{{ language.describe(challenge, instance, Descr.TITLE) }}</span>
        <span class="text-sm text-gray-700"> by TODO </span>
      </h3>
      <Language.TicTacToe.StatementDisplay :instance="instance" :challenge-hash="challengeHash" />
    </div>

    <!-- Right of the card -->
    <div v-if="!decided(challenge.status)"
      class="grid grid-cols-[auto_auto] gap-6 min-w-max">
      <LabeledData label="Bounty">
        <Price :amount="bounty" />
      </LabeledData>
      <LabeledData :label="challenge.decided() ? 'Expired' : 'Expires'">
        <Time :time="challenge.openUntil" />
      </LabeledData>

      <button v-if="challenge.status == Status.UNCHALLENGED"
        class="col-span-2 self-end
          border bg-blue-100 rounded-md py-2 px-4 shadow">
        Challenge for
        <Price :amount="challengeCost" />
      </button>
      <button v-else-if="attemptCost !== null"
        class="col-span-2 self-end
        border bg-blue-100 rounded-md py-2 px-4 w-full shadow">
        Add proof for
        <Price :amount="attemptCost" />
      </button>
    </div>
  </div>

</template>

<script setup lang="ts">
import { decided, Status, Parameters, LANGUAGES, Descr } from '../../sprig';
import { Price, StatusTag } from '../small';
import { store } from '../../store';
import LanguageTag from '../small/LanguageTag.vue';
import Time from '../small/Time.vue';
import LabeledData from '../small/LabeledData.vue';
import * as Language from '../languages';

const props = defineProps({
  instanceHash: {
    type: String,
    required: true,
  },
  challengeHash: {
    type: String,
    required: true,
  },
});

const instance = store.instances[props.instanceHash];
const language = LANGUAGES[instance.language];
const params: Parameters = instance.params;
const challenge = instance.challenges[props.challengeHash];
const bounty = challenge.possibleReward(params);
const attemptCost = challenge.costAddAttempt(params);
const challengeCost = params.costToChallenge(instance.proofs[challenge.parent]);
</script>