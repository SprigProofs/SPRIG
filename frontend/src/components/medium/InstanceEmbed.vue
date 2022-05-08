<template>
  <!-- TODO: Route to a instance page, not the root proof attempt. -->
  <router-link :to="{ name: 'proofAttempt', params: { instanceHash: instance.hash, claimHash: '0', attemptNb: 0 } }"
    class="w-full border rounded-sm shadow-sm hover:shadow-md group flex">
    <!-- First part of the card -->
    <div class="p-4 flex flex-col flex-grow">
      <!-- First row -->
      <div class="flex flex-row justify-between ">
        <!-- Top left -->
        <div class="space-x-2">
          <StatusTag class="" :status="claim.status" />
          <LanguageTag :lang="instance.language"/>
          <UidTag :object="instance" />
        </div>
      </div>
      <h3 class="text-lg pt-2  ">
        <span class="small-title break-all">{{ language.title(claim) }}</span>
        <span class="text-sm text-gray-700">
          by
          <User :name="instance.author()" />
        </span>
      </h3>
      <code class="text-sm flex-grow">
        <pre class="whitespace-pre-wrap">{{ language.shortDescription(claim) }}</pre>
      </code>
      <div class="leading-none rounded border-gray-200 p-2">
        <div class="text-xs text-gray-600">Last action</div>
        <p class="text-sm">Michael challenged claim #1a209b for 70</p>
      </div>

    </div>
    <!-- Right of the card -->
    <div  class=" p-4 flex-shrink-0
          flex flex-col space-y-2 items-end">
      <div class="grid grid-cols-[auto_auto] gap-4">
        <LabeledData label="Bounties">
          <span class="font-extralight text-gray-600 text-sm pr-1.5">Σ</span>
          <Price :amount="instance.totalBounties()"/>
        </LabeledData>
        <LabeledData :label="claim.decided() ? 'Expired' : 'Expires'">
          <Time :time="claim.open_until" />
        </LabeledData>

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

  </router-link>

</template>

<script setup lang="ts">
import { Status, Sprig, Claim, Language, LANGUAGES } from '../../sprig';
import { store } from '../../store';
import { Price, StatusIcon, StatusTag, Time, LanguageTag } from '../small';
import User from '../medium/User.vue';
import LabeledData from '../small/LabeledData.vue';
import UidTag from '../small/UidTag.vue';


const props = defineProps({
  hash: {
    type: String,
    required: true,
  }
});

const instance: Sprig = store.instances[props.hash];
const claim: Claim = instance.claims['0'];
const language: Language = LANGUAGES[instance.language];

</script>