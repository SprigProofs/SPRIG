<template>
  <div class="flex">
    <!-- Left side of the card -->
    <div class="flex flex-col flex-grow space-y-2">

      <!-- First row -->
      <div class="flex space-x-2 items-center">
        <StatusTag class="" :status="node.status" />
        <h3 class="text-lg small-title break-all">{{ lang.title(node, instance) }}</h3>
      </div>

      <!-- Second row -->
      <component :is=lang.StatementDisplay :instance="instance" :challenge-hash="isAttempt ? attempt.parent : challenge.hash"
        class="self-start flex-grow"/>


      <!-- Third row -->
      <div class="flex space-x-2 items-baseline">
          <!-- <LanguageTag :lang="instance.language" /> -->
          <UidTag long :tooltip="false" :object="node" :instance="instance"/>
          <span class="text-gray-600 text-sm">
            <span> · </span>
            <template v-if="node.height == 0">Machine proof</template>
            <template v-else-if="isAttempt">Proof attempt</template>
            <template v-else-if="challenge.author">Challenge</template>
            <template v-else>Claim</template>
            by <User :name="author" />
          </span>
      </div>
    </div>

    <div class="grid #grid-cols-[auto_auto] text-right min-w-max h-min gap-y-4 gap-x-8 ml-4">
      <LabeledData label="Bounty"><Price :amount="bounty"/></LabeledData>
      <LabeledData :label="expires.isBefore(dayjs()) ? 'Expired' : 'Expires' "><Time :time="expires" suffix /></LabeledData>
      <!-- <LabeledData label="Claims">{{ _.size(attempt.challenges )}}</LabeledData> -->
      <!-- <LabeledData label="Height">{{ attempt.height }} / {{ params.rootHeight - 1 }}</LabeledData> -->

      <template v-if="!readOnly && !isAttempt">
        <ChallengeButton v-if="challenge.status == Status.UNCHALLENGED"
          :challenge="challenge" :instance="instance"
          class="#col-span-2 self-end" />
        <NewProofButton
          v-else-if="attemptCost !== null"
          :instance="instance" :challenge="challenge"
          class="#col-span-2 self-end"
          />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import _ from 'lodash';
import dayjs from 'dayjs/esm';
import { computed } from '@vue/reactivity';
import { inject } from 'vue';

import { Status, Sprig, Challenge, ProofAttempt, Parameters } from '../../sprig';
import Languages from '../languages'
import { LabeledData, StatusTag, Price, LanguageTag, Time, UidTag } from "../small";
import NewProofButton from './NewProofButton.vue';
import ChallengeButton from './ChallengeButton.vue';
import User from './User.vue';

const props = defineProps<{
  instance: Sprig,
  hash: string,
}>();

const readOnly = inject('readOnly', false);

const challenge = props.instance.challenges[props.hash];
const isAttempt = !challenge;
console.log(isAttempt, props.hash)
const attempt: ProofAttempt = isAttempt
  ? props.instance.proofs[props.hash]
  : props.instance.proofs[challenge.parent];
const node = challenge || attempt;

const lang = Languages[props.instance.language];
const params: Parameters = props.instance.params;
const author = challenge?.author || attempt.author;

const expires = computed(() => isAttempt
  ? attempt.expires(props.instance)
  : challenge.openUntil
);
const bounty = isAttempt
  ? attempt.possibleReward(params)
  : props.instance.maxRewardIfAction(props.hash);
const attemptCost = challenge?.costAddAttempt(params);

</script>