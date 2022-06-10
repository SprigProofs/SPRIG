<script setup lang="ts">
import { ProofAttempt, Sprig, Action, ActionData, Challenge } from '../../sprig';
import User from './User.vue';
import { Time, Duration } from '../small';
import UidTag from '../small/UidTag.vue';
import { nextTick, ref, watch } from 'vue';
import Time1 from '../small/Time.vue';


const props = withDefaults(defineProps<{
  action: ActionData,
  instance: Sprig,
  startOpen?: boolean,
  last?: boolean
}>(), { startOpen: false, last: false });

const collapsed = ref(!props.startOpen);

const params = props.instance.params;


const instance: Sprig = props.instance;
let attempt: ProofAttempt | null = null;
let challenge: Challenge | null = null;

if (props.action.target instanceof Challenge) {
  challenge = props.action.target;
  attempt = instance.proofs[challenge.parent];
} else if (props.action.target instanceof ProofAttempt) {
  attempt = props.action.target;
  if (attempt.parent !== null) {
    challenge = instance.challenges[attempt.parent]
  }
} else if (props.action.target instanceof Sprig) {
  attempt = instance.rootAttempt();
}


const buttonTexts = {
  // [Action.PARENT_CHALLENGED]: 'Submit proof',
  [Action.ROOT_CREATED]: !attempt?.decided() ? 'Start a challenge' : undefined,
  [Action.ATTEMPT_CREATED]: !attempt?.decided() ? 'Start a challenge' : undefined,
  [Action.CHALLENGE_ACTIVATED]: !challenge?.decided() ? 'Submit proof' : undefined,
  // [Action.CHALLENGE_ANSWERED]: 'See the proof',
};
const buttonText = buttonTexts[props.action.type] ;
const title = {
  // [Action.PARENT_CHALLENGED]: "",
  [Action.ROOT_CREATED]: "Doubtful? Challenge a claim.",
  [Action.ATTEMPT_CREATED]: "Doubtful? Challenge a claim.",
  [Action.CHALLENGE_ACTIVATED]: "Can you prove it?",
  // [Action.CHALLENGE_ANSWERED]: "Check the proof.",
  // [Action.MACHINE_VERIFIED]: "",
  // [Action.MACHINE_REJECTED]: "",
  // [Action.CHALLENGE_REJECTED]: "",
  // [Action.CHALLENGE_VALIDATED]: "",
  // [Action.AUTO_VALIDATION]: "",
  // [Action.ATTEMPT_VALIDATED]: "",
  // [Action.ATTEMPT_REJECTED]: "",

}[props.action.type];

const addIcon = { name: 'md-add-round', class: 'bg-blue-200' };
const challengeIcon = { name: 'md-bolt', class: 'bg-yellow-200' };
const validatedIcon = { name: 'md-check-round', class: 'bg-green-200' };
const rejectedIcon = { name: 'md-close-round', class: 'bg-red-200' };
const lockIcon = { name: 'md-lockoutline', class: 'bg-gray-200' };
const icon = {
    [Action.ROOT_CREATED]: addIcon,
    [Action.ATTEMPT_CREATED]: addIcon,
    [Action.CHALLENGE_ACTIVATED]: challengeIcon,
    [Action.AUTO_VALIDATION]: lockIcon,
    [Action.CHALLENGE_REJECTED]: rejectedIcon,
    [Action.CHALLENGE_VALIDATED]: validatedIcon,
    [Action.ATTEMPT_VALIDATED]: validatedIcon,
    [Action.ATTEMPT_REJECTED]: rejectedIcon,
    [Action.MACHINE_VALIDATED]: validatedIcon,
    [Action.MACHINE_REJECTED]: rejectedIcon,
}[props.action.type];

const collapsable = title && buttonText;

function takeAction() {

}

function toggle() {
  // We use title to know if there is anything to show.
  if (collapsable) {
    collapsed.value = !collapsed.value;
  }
}

</script>

<template>
  <div class="flex group w-full" @click="toggle()" :class="{ 'cursor-pointer': collapsable }" >

  <div class="w-6 mr-2 flex-shrink-0 relative
    flex flex-col items-center">
    <div v-if="!last" class="h-full absolute border-l-2 border-slate-200 mt-1
      group-hover:border-slate-400"></div>
    <v-icon :name="icon.name" :class="icon.class" class="absolute border shadow border-gray-500 w-6 h-6 p-1 rounded-full bg-blue-200 mt-0.5" />
  </div>

  <div class="w-full">

    <div class="flex group w-full justify-between">
      <p>

        <v-icon v-if="collapsable" name="md-expandmore-round"
          class="mr-1 transform transition duration-500 text-gray-600 group-hover:scale-125 group-hover:text-gray-900"
          :class="{ '-rotate-90': collapsed }" />

        <span v-if="action.type === Action.ROOT_CREATED">
          <User :name="instance.author()" /> created a new SPRIG instance with a bounty of
          <Price :amount="params.downstakes[params.rootHeight-1]" />.
        <!-- </span><span v-else-if="action.type === Action.PARENT_CHALLENGED">
          <User :name="action.author" /> challenged the parent claim
          <UidTag :object="parentChallenge" />
          with a bounty of
          <Price :amount="action.cost" /> -->
        </span><span v-else-if="action.type === Action.ATTEMPT_CREATED">
          <User :name="attempt.author" /> answered
          <!-- Note: challenge is always defined here, because ATTEMPT_CREATED does not happen on the root -->
          <UidTag :object="challenge" />
          with this proof attempt and a bounty of
          <Price :amount="params.downstakes[attempt.height]" />
        </span><span v-else-if="action.type === Action.CHALLENGE_ACTIVATED">
          <User :name="challenge.author" /> opened challenge
          <UidTag :object="challenge" /> on <UidTag :object="attempt" />
          with a bounty of
          <Price :amount="params.costToChallenge(attempt)" />
        <!-- </span><span v-else-if="action.type === Action.CHALLENGE_ANSWERED">
          Challenge
          <UidTag :object="action.challenge" /> was answered by
          <User :name="action.author" />
          with
          <UidTag :object="action.attempt" :tooltip="true" /> -->
        </span><span v-else-if="action.type === Action.AUTO_VALIDATION">
          Time for questions has elapsed for <UidTag :object="instance.proofs[action.target[0].parent]" />, and no new challenges can be added.
        </span><span v-else-if="action.type === Action.MACHINE_REJECTED">
          The machine proof <UidTag :object="attempt" /> was rejected.
        </span><span v-else-if="action.type === Action.MACHINE_VALIDATED">
          The machine proof <UidTag :object="attempt" /> was accepted.
        </span><span v-else-if="action.type === Action.ATTEMPT_REJECTED">
          <UidTag :object="attempt" /> was rejected by challenge <UidTag :object="challenge" />.
        </span><span v-else-if="action.type === Action.ATTEMPT_VALIDATED">
          <UidTag :object="attempt" /> was validated.
        </span><span v-else-if="action.type === Action.CHALLENGE_REJECTED">
          <UidTag :object="challenge" /> was rejected.
        </span><span v-else>
          {{ action.type }} needs more work...
        </span>

      </p>

      <Button v-if="buttonText" @click.stop="takeAction()"
        class="min-w-fit mr-4 -my-1 self-start transition-opacity duration-500 "
        :class="{ 'opacity-0': !collapsed && title }">{{ buttonText }}</Button>
    </div>

    <Transition>
      <div v-if="collapsable" v-show="!collapsed" @click.stop>
        <div class="bg-slate-100 p-4 my-2 rounded-md flex flex-col shadow-sm cursor-auto">
          <h3 class="font-semibold ">{{ title }}</h3>
          <ul v-if="action.type === Action.ROOT_CREATED || action.type === Action.ATTEMPT_CREATED">
            <li>Lock a bounty of
              <Price :amount="params.costToChallenge(attempt)" />
            </li>
            <li>For
              <Duration :duration="params.timeForQuestions" />, proof attempts can be submitted for
              <price :amount="params.upstakes[attempt.height - 1] + params.downstakes[attempt.height - 1]" />
            </li>
            <li>The first accepted proof attempt is rewarded with your bounty of
              <Price :amount="params.costToChallenge(attempt)" />
            </li>
            <li>If all proof attempts are rejected, you get your locked bounty back,
              If your challenge is the first to invalidate
              <User :name="attempt.author" />'s proof, you get their
              <Price :amount="params.downstakes[attempt.height]" /> bounty.
            </li>
          </ul>
          <ul v-else-if="action.type === Action.CHALLENGE_ACTIVATED">
            <li>Before <Time :time="challenge.openUntil" />, submit a proof for
              <Price :amount="challenge.costAddAttempt(params)" />.
            </li>
            <li>For
              <Duration :duration="params.timeForQuestions" /> challenges can be submitted.
            </li>
            <li>If the proof passes all challenges, you get your
              <Price :amount="challenge.costAddAttempt(params)" /> back, and also
              <User :name="challenge.author" />'s bounty of
              <Price :amount="params.costToChallenge(attempt)" />
            </li>
            <li>If some challenge invalidates the proof, they get
              <Price :amount="params.downstakes[attempt.height - 1]" /> and
              <User :name="challenge.author" /> gets
              <Price :amount="params.upstakes[attempt.height - 1]" /> for their good question.
            </li>
          </ul>
          <pre v-else>{{ action }}</pre>
          <button v-if="buttonText !== null" @click.stop="takeAction()"
            class="bg-white border border-slate-300 rounded-md px-2 py-1 self-end shadow-sm">
            {{ buttonText }}
          </button>
        </div>
      </div>
    </Transition>

    <Time :time="action.time" suffix class="block mb-2 w-fit text-xs text-gray-400" />

  </div>

  </div>

</template>

<style scoped>
ul {
  list-style: disc;
  list-style-position: inside;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  max-height: 300px;
}

.v-leave-to,
.v-enter-from {
  max-height: 0px;
  opacity: 0;
}
</style>