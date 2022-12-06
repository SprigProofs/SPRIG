<template>
  <div class="flex space-x-4">
    <!-- First part of the card -->
    <div class="flex flex-col flex-grow space-y-2">

      <!-- First row -->
      <div class="flex space-x-2 items-center">
        <StatusTag class="" :status="rootAttempt.status" />
        <h3 class="text-lg small-title break-all">{{ lang.title(rootAttempt, instance) }}</h3>
      </div>

      <!-- Second row -->
      <component :is=lang.StatementDisplay :instance="instance" :challenge-hash="null"
        class="self-start flex-grow"/>


      <!-- Third row -->
      <div class="flex space-x-2 items-baseline">
          <!-- <LanguageTag :lang="instance.language" /> -->
          <UidTag long :tooltip="false" :instance="instance"/>
          <span class="text-gray-600 text-sm">
            <span> · </span>
            Instance by <User :name="rootAttempt.author" />
          </span>
      </div>

    </div>
    <!-- Right of the card -->
    <div  class=" flex-shrink-0
          flex flex-col space-y-2 items-end">
      <div class="grid grid-cols-[auto_auto] gap-4">
        <div></div>
        <LabeledData label="Bounties">
          <span class="font-extralight text-gray-600 text-sm pr-1.5">Σ</span>
          <Price :amount="instance.totalBounties()"/>
        </LabeledData>
        <!-- <LabeledData :label="expires.isBefore(dayjs()) ? 'Expired' : 'Expires' "><Time :time="expires" /></LabeledData> -->

        <LabeledData
          v-for="(count, status) in instance.counts()" :key="status"
          :label="status">
          <div class="flex items-center">
            <StatusIcon :status="status" class="mr-2" />
            <div>{{ count }}</div>
          </div>
        </LabeledData>
      </div>
      <!-- <div class="text-xs text-gray-500 capitalize">{{ status }}</div>
      <div class="flex items-center font-semibold">
        <StatusIcon :status="status" class="mr-2" />
        <div>{{ count }}</div>
      </div> -->
    </div>

  </div>

</template>

<script setup lang="ts">
import type { Sprig, ProofAttempt } from '../../sprig';
import { Price, StatusIcon, StatusTag } from '../small';
import User from '../medium/User.vue';
import LabeledData from '../small/LabeledData.vue';
import UidTag from '../small/UidTag.vue';
import Languages from '../languages';


const props = defineProps<{
  instance: Sprig;
}>();

const rootAttempt: ProofAttempt = props.instance.rootAttempt();
const lang = Languages[props.instance.language];
const expires = rootAttempt.expires(props.instance);

</script>