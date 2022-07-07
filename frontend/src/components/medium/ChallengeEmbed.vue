<template>

  <div class="w-full group flex space-x-4">
    <!-- Left side of the card -->
    <div class="flex flex-col flex-grow">

      <!-- First row -->
      <div class="flex space-x-2 items-center">
        <StatusTag class="" :status="challenge.status" />
        <h3 class="text-lg small-title break-all">{{ lang.title(challenge, instance) }}</h3>
      </div>

      <!-- Second row -->
      <component :is=lang.StatementDisplay :instance="instance" :challenge-hash="challenge.hash"
        class="self-start flex-grow"/>

      <!-- Third row -->
      <div class="flex space-x-2 items-baseline">
          <!-- <LanguageTag :lang="instance.language" /> -->
          <UidTag long :tooltip="false" :object="challenge" :instance="instance"/>
          <span class="text-gray-600 text-sm">
            <span> · </span>
            <template v-if="challenge.author">
              Challenge by <User :name="challenge.author" />
            </template><template v-else>Claim by <User :name="instance.proofs[challenge.parent].author"/></template>
          </span>
      </div>

    </div>

    <!-- Right of the card -->
    <div v-if="!decided(challenge.status)"
      class="grid text-right #grid-cols-[auto_auto] gap-6 min-w-max">
      <LabeledData label="Bounty">
        <Price :amount="bounty" />
      </LabeledData>
      <LabeledData :label="challenge.decided() ? 'Expired' : 'Expires'">
        <Time :time="challenge.openUntil" suffix />
      </LabeledData>

      <template v-if="!readOnly">
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
import { decided, Status, Parameters, Challenge, Sprig } from '../../sprig';
import { Price, StatusTag, UidTag } from '../small';
import LanguageTag from '../small/LanguageTag.vue';
import Time from '../small/Time.vue';
import LabeledData from '../small/LabeledData.vue';
import User from './User.vue';
import { inject } from 'vue';
import LANGS from '../languages';
import NewProofButton from './NewProofButton.vue';
import ChallengeButton from './ChallengeButton.vue';

const props = defineProps<{
  hash: string,
  instance: Sprig,
}>();
const readOnly = inject('readOnly', false);

const challenge = props.instance.challenges[props.hash];
const lang = LANGS[props.instance.language];
const params: Parameters = props.instance.params;
const bounty = props.instance.maxRewardIfAction(props.hash);
const attemptCost = challenge.costAddAttempt(params);
const challengeCost = params.costToChallenge(props.instance.proofs[challenge.parent]);
</script>