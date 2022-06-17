<template>
  <div>
  <Button color="blue" icon="md-bolt" @click.prevent="openDialog()">Challenge</Button>
  <SlideOver v-model="slideOpen" panel-title="New challenge">
    <div class="space-y-4 flex flex-col">
      <p class="prose -mb-4">You are about to challenge a claim made by <User :name="attempt.author" /> </p>
      <div class="mx-4">
        <ChallengePart :challenge="challenge" :instance="instance">
          <lang.StatementDisplay :instance="instance" :challengeHash="challenge.hash" />
        </ChallengePart>
      </div>

      <p class="prose">Once you have locked a bounty of <Price :amount="costToChallenge" />:
      <ul>
        <li>a period of <Duration :duration="timeForAttempts" /> to submit proof attempts starts;</li>
        <li>if some proof is valid, its author is rewarded with your bounty;</li>
        <li>for every proof attempt rejected, you win <Price :amount="upstakeWinnable" />;</li>
        <li>if all proof attempts were rejected, your bounty is refunded;</li>
        <li>
          if furthermore your challenge is the first to invalidate the proof attempt,
          you win <User :name="attempt.author" />'s bounty of <Price :amount="downStakeAvailable" />;
        </li>
        <li v-if="siblingChallenges > 0">However, there are already {{ siblingChallenges }} open sibling challenge{{siblingChallenges > 1 ? 's' : '' }}.</li>
      </ul>
      </p>
      <Button @click="startChallenge()" color="indigo" filled
        class="self-end">
          <span>Challenge and lock <Price :amount="costToChallenge"/></span>
        </Button>
    </div>
  </SlideOver>
  </div>
</template>

<script setup lang="ts">
import dedent from 'dedent';
import _ from 'lodash';
import { computed, nextTick, provide, ref } from 'vue';
import { Challenge, Sprig, copy, ProofAttempt, Status, linkTo } from '../../sprig';
import { Button, SlideOver } from '../small';
import { store } from '../../store';
import LANGS from '../languages';
import dayjs from 'dayjs';
import ChallengePart from './ChallengePart.vue';
import Price from '../small/Price.vue';
import Duration from '../small/Duration.vue';
import UidTag from '../small/UidTag.vue';
import User from './User.vue';

const slideOpen = ref(false);

const props = defineProps<{
  challenge: Challenge,
  instance: Sprig,
}>();

function openDialog() {
  slideOpen.value = true;
}

function startChallenge() {
  store.challenge(props.instance.hash, props.challenge.hash)
    .then(() => slideOpen.value = false);
}

provide('readOnly', true);

const attempt = props.instance.proofs[props.challenge.parent];
const lang = LANGS[props.instance.language];
const costToChallenge = props.instance.params.costToChallenge(attempt);
const timeForAttempts = props.instance.params.timeForAnswers;
const downStakeAvailable = attempt.possibleReward(props.instance.params);
const siblingChallenges =  attempt.challenges.filter(c => props.instance.challenges[c].status == Status.CHALLENGED).length;
const upstakeWinnable = props.instance.params.upstakes[props.challenge.height - 1];

// So that the preview is readOnly.
provide('readOnly', true);
</script>