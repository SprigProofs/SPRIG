<template>
  <!-- TODO: Route to a instance page, not the root proof attempt. -->
  <router-link :to="{ name: 'proofAttempt', params: { instanceHash, hash } }"
    class="w-full border rounded-sm shadow-sm hover:shadow-md group flex">
    <!-- First part of the card -->
    <div class="p-4 flex flex-col flex-grow">
      <!-- First row -->
      <div class="flex flex-row justify-between ">
        <!-- Top left -->
        <div class="space-x-2">
          <StatusTag class="" :status="attempt.status" />
          <LanguageTag :lang="instance.language" />
          <UidTag :object="attempt" />
        </div>
      </div>
      <h3 class="text-lg pt-2  ">
        <span class="small-title break-all">{{ language.describe(attempt, instance, Descr.TITLE) }}</span>
        <span class="text-sm text-gray-700">
          by
          <User :name="attempt.author" />
        </span>
      </h3>
      <code class="text-sm flex-grow">
        <pre class="whitespace-pre-wrap">{{ language.describe(attempt, instance, Descr.SHORT) }}</pre>
      </code>


      <!-- <pre>{{ attempt }}</pre> -->

    </div>
    <!-- Right of the card -->
    <!-- <div v-if="!decided(attempt.status)" class=" p-4 flex-shrink-0
          flex flex-col space-y-2 items-end"> -->
      <!-- <div class="text-black font-semibold rounded-sm">
        Bounty
        <Price :amount="attempt.possibleReward(params)" />
      </div>
      <div class="text-xs text-slate-700 flex-grow">
        {{ claim.open_until.fromNow() }} left
      </div> -->

      <div class="grid grid-cols-[auto_auto] min-w-max h-min gap-y-4 gap-x-8 m-4">
        <LabeledData label="Bounty"><Price :amount="attempt.possibleReward(params)"/></LabeledData>
        <LabeledData :label="expires.isBefore(dayjs()) ? 'Expired' : 'Expires' ">{{ expires.fromNow() }}</LabeledData>
        <LabeledData label="Claims">{{ _.size(attempt.challenges )}}</LabeledData>
        <LabeledData label="Height">{{ attempt.height }} / {{ params.root_height - 1 }}</LabeledData>
      </div>

    <!-- </div> -->

  </router-link>

</template>

<script setup lang="ts">
import _ from 'lodash';
import dayjs from 'dayjs';
import { Status, Descr, Sprig, Challenge, Language, LANGUAGES, ProofAttempt, Parameters } from '../../sprig';
import { store } from '../../store';
import { LabeledData, StatusTag, Price, LanguageTag } from "../small";
import User from './User.vue';
import UidTag from '../small/UidTag.vue';

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

const instance: Sprig = store.instances[props.instanceHash];
const params: Parameters = instance.params;
// const claim: Claim = instance.claims[props.claimHash];
const attempt: ProofAttempt = instance.proofs[props.hash];
const language: Language = LANGUAGES[instance.language];

const challenges = attempt.challenges.map(c => instance.challenges[c]);

// If there are no challenges, it is a machine claim, decided as soon as it is created.
// otherwise, we take the earliest deadline.
const expires = _.minBy(challenges, c => c.openUntil.millisecond())?.openUntil || attempt.createdAt;

</script>