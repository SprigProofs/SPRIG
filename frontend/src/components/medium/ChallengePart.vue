<template>

  <div class="w-full -mx-4 px-4 mt-8 pb-4
    border shadow-md
    rounded
    " :class="style[status]">

    <div class="-translate-y-1/2 w-full flex space-x-4 -mb-1">
      <h3 class="border
    flex px-4 py-2 rounded
    font-semibold text-gray-700" :class="style[status] + ' ' + lightBg[status]">
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
          <Price :amount="challengeCost" />
          before <Time :time="challenge.openUntil" not-relative />
        </p>
        <p v-else-if="challenge.status == Status.CHALLENGED">
          Challenged by <User :name="challenge.author" />
          with a bounty of <Price :amount="challengeCost" />.
        </p>
      </div>
      <Button v-if="challenge.attempts.length > 0"
        @click="isAttemptPanelOpen = true"
        >View proof attempts</Button>
      <Button v-if="challenge.status == Status.UNCHALLENGED" color="blue" icon="md-bolt"
        @click="startChallenge()">Challenge</Button>
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
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs/esm';
import { Challenge, Sprig, Status } from '../../sprig';
import UidTag from '../small/UidTag.vue';
import Duration from '../small/Duration.vue';
import Time from '../small/Time.vue';
import Button from '../small/Button.vue';
import SlideOver from '../small/SlideOver.vue';
import { ref } from 'vue';
import AttemptEmbed from './AttemptEmbed.vue';
import { store } from '../../store';
import UserVue from './User.vue';
import { computed } from '@vue/reactivity';

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
}

const lightBg = {
  [Status.CHALLENGED]: 'bg-yellow-50',
  [Status.UNCHALLENGED]: 'bg-blue-50',
  [Status.VALIDATED]: 'bg-green-50',
  [Status.REJECTED]: 'bg-red-50',
};

const status = computed(() => props.challenge.status);
const attempt = computed(() => props.instance.proofs[props.challenge.parent]);
const timeForQuestions = computed(() => props.instance.params.timeForQuestions);
const challengeCost = computed(() => props.instance.params.costToChallenge(attempt.value));

function startChallenge() {
  store.challenge(props.instance.hash, props.challenge.hash);
}

// Internal data
const isAttemptPanelOpen = ref(false);

</script>