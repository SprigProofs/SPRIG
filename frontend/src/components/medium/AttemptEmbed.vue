<template>
  <div class="flex">
    <!-- Left side of the card -->
    <div class="flex flex-col flex-grow space-y-2">

      <!-- First row -->
      <div class="flex space-x-2 items-center">
        <StatusTag class="" :status="attempt.status" />
        <h3 class="text-lg small-title break-all">{{ lang.title(attempt, instance) }}</h3>
      </div>

      <!-- Second row -->
      <component :is=lang.StatementDisplay :instance="instance" :challenge-hash="attempt.parent"
        class="self-start flex-grow"/>


      <!-- Third row -->
      <div class="flex space-x-2 items-baseline">
          <!-- <LanguageTag :lang="instance.language" /> -->
          <UidTag long :tooltip="false" :object="attempt" :instance="instance"/>
          <span class="text-gray-600 text-sm">
            <span> · </span>
            <template v-if="attempt.height == 0">Machine proof</template>
            <template v-else>Proof attempt</template>
            by <User :name="attempt.author" />
          </span>
      </div>
    </div>

    <div class="grid #grid-cols-[auto_auto] text-right min-w-max h-min gap-y-4 gap-x-8 ml-4">
      <!-- <LabeledData label="Claims">{{ _.size(attempt.challenges )}}</LabeledData> -->
      <LabeledData label="Bounty"><Price :amount="attempt.possibleReward(params)"/></LabeledData>
      <LabeledData :label="expires.isBefore(dayjs()) ? 'Expired' : 'Expires' "><Time :time="expires" suffix /></LabeledData>
      <!-- <LabeledData label="Height">{{ attempt.height }} / {{ params.rootHeight - 1 }}</LabeledData> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import _ from 'lodash';
import dayjs from 'dayjs/esm';
import { Status, Sprig, Challenge, ProofAttempt, Parameters } from '../../sprig';
import { store } from '../../store';
import { LabeledData, StatusTag, Price, LanguageTag, Time, UidTag } from "../small";
import User from './User.vue';
import Languages from '../languages'
import { computed } from '@vue/reactivity';

const props = defineProps<{
  instance: Sprig,
  hash: string,
}>();

const params: Parameters = props.instance.params;
const attempt: ProofAttempt = props.instance.proofs[props.hash];
const lang = Languages[props.instance.language];

const expires = computed(() => attempt.expires(props.instance));

</script>