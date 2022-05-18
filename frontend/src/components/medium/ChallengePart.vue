<template>

  <div class="w-full -mx-4 px-4 mt-8 pb-4
    border shadow-md
    rounded
    " :class="style">

    <div class="-translate-y-1/2 w-full flex space-x-4 -mb-1">
      <h3 class="border
    flex px-4 py-2 rounded
    font-semibold text-gray-700" :class="style + ' ' + lightBg">
        <span>
          Claim {{ challenge.hash }}
          <!-- <UidTag :object="challenge" :tooltip="false" /> -->
        </span>
      </h3>
      <div class="flex-grow border bg-white rounded flex items-center px-4
        text-gray-600 text-sm">
        <p v-if="challenge.status == Status.VALIDATED && challenge.author === null">
          Validated <Time :time="challenge.openUntil" not-relative />
          after
          <Duration :duration="timeForQuestions" /> without questions.
        </p>
        <p v-else-if="challenge.status == Status.UNCHALLENGED">
          Doubtful? Challenge for
          <Price :amount="params.costToChallenge(attempt)" />
          before <Time :time="challenge.openUntil" not-relative />
        </p>
      </div>
      <Button v-if="challenge.attempts.length > 0"
        @click="isAttemptPanelOpen = true"
        >View proof attempts</Button>
      <Button v-if="challenge.status == Status.UNCHALLENGED" color="blue" icon="md-bolt">Challenge</Button>
      <Button v-else-if="challenge.status == Status.CHALLENGED && challenge.openUntil.isAfter(dayjs())" color="yellow"
        icon="md-add-round">New proof</Button>
    </div>

    <slot />

    <SlideOver v-model="isAttemptPanelOpen" :panelTitle="'Proof attempts on ' + challenge.hash">

      <ul class="divide-y -mt-4">
        <li v-for="attempt in challenge.attempts" :key="attempt"
          class="py-4">
          <AttemptEmbed :hash="attempt" :instance-hash="instance.hash"/>
        </li>
      </ul>

    </SlideOver>

    {{ $refs }}
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import { Challenge, Sprig, Status } from '../../sprig';
import UidTag from '../small/UidTag.vue';
import Duration from '../small/Duration.vue';
import Time from '../small/Time.vue';
import Button from '../small/Button.vue';
import SlideOver from '../small/SlideOver.vue';
import { ref } from 'vue';
import AttemptEmbed from './AttemptEmbed.vue';

const isAttemptPanelOpen = ref(false);


interface Props {
  challenge: Challenge;
  instance: Sprig;
}
const props = defineProps<Props>();

const style = {
  [Status.CHALLENGED]: 'border-yellow-400',
  [Status.UNCHALLENGED]: 'border-blue-500',
  [Status.VALIDATED]: 'border-green-500',
  [Status.REJECTED]: 'border-red-500',
}[props.challenge.status];

const lightBg = {
  [Status.CHALLENGED]: 'bg-yellow-50',
  [Status.UNCHALLENGED]: 'bg-blue-50',
  [Status.VALIDATED]: 'bg-green-50',
  [Status.REJECTED]: 'bg-red-50',
}[props.challenge.status];

const params = props.instance.params;
const attempt = props.instance.proofs[props.challenge.parent];
const timeForQuestions = params.timeForQuestions;



</script>