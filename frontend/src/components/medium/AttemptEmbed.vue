<template>
  <div class="flex">
    <!-- First part of the card -->
    <div class="flex flex-col flex-grow">
      <!-- First row -->
      <div class="flex flex-row justify-between ">
        <!-- Top left -->
        <div class="space-x-2">
          <StatusTag class="" :status="attempt.status" />
          <LanguageTag :lang="instance.language" />
          <UidTag  :tooltip="false" :object="attempt" />
        </div>
      </div>
      <h3 class="text-lg pt-2  ">
        <span class="small-title break-all">{{ lang.title(attempt, instance) }}</span>
        <span class="text-sm text-gray-700">
          by
          <User :name="attempt.author" />
        </span>
      </h3>
      <!-- <component :is="language.name + '.' + 'ShortDescription'"/> -->
      <component :is=lang.StatementDisplay :instance="instance" :challenge-hash="attempt.parent"
        class="self-start "/>
    </div>

      <div class="grid grid-cols-[auto_auto] min-w-max h-min gap-y-4 gap-x-8 ml-4">
        <LabeledData label="Bounty"><Price :amount="attempt.possibleReward(params)"/></LabeledData>
        <LabeledData :label="expires.isBefore(dayjs()) ? 'Expired' : 'Expires' "><Time :time="expires" /></LabeledData>
        <LabeledData label="Claims">{{ _.size(attempt.challenges )}}</LabeledData>
        <LabeledData label="Height">{{ attempt.height }} / {{ params.rootHeight - 1 }}</LabeledData>
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

const props = defineProps({
  instanceHash: {
    type: String,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
});

const instance = store.instances[props.instanceHash];
const params: Parameters = instance.params;
const attempt: ProofAttempt = instance.proofs[props.hash];
const lang = Languages[instance.language];

const expires = computed(() => attempt.expires(instance));

</script>