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
          <el-tag effect="plain">{{ instance.language }}</el-tag>
          <span class="text-gray-500 italic text-sm font-mono">#{{ instance.hash }}</span>
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
      <div class="text-black font-semibold rounded-sm">
        Bounties total
        <Price :amount="instance.totalBounties()" />
      </div>
      <div class="text-xs text-slate-700 flex-grow">
        <Time :time="claim.open_until" :suffix="false"/> left
      </div>

      <ul class="grid grid-cols-2 gap-4 self-end pt-4 max-w-md">
        <li class="bg-gray-50 shadow rounded p-2 flex flex-col items-center space-y-2"
          v-for="(count, status) in instance.counts()" :key="status">
          <div class="text-xs text-gray-500 capitalize">{{ status }}</div>
          <div class="flex items-center font-semibold">
            <StatusIcon :status="status" class="mr-2" />
            <div>{{ count }}</div>
          </div>
        </li>
      </ul>
    </div>

  </router-link>

</template>

<script setup lang="ts">
import { Status, Sprig, Claim, Language, LANGUAGES } from '../sprig';
import { store } from '../store';
import { Price, StatusIcon, StatusTag, Time } from './small';
import User from './User.vue';


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