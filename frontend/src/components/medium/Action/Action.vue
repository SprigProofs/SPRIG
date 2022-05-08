<script setup lang="ts">
import { ProofAttempt, Sprig, Action } from '../../../sprig';
import ActionChallengeParent from './ActionChallengeParent.vue';
import User from '../User.vue';
import { Time, Duration } from '../../small';
import UidTag from '../../small/UidTag.vue';
import { nextTick, ref, watch } from 'vue';
import Time1 from '../../small/Time.vue';


const props = withDefaults(defineProps<{
  action: any,
  attempt: ProofAttempt,
  instance: Sprig,
  startOpen?: boolean,
}>(), { startOpen: false });

const collapsed = ref(!props.startOpen);

const params = props.instance.params;
const parentChallenge = props.attempt.parent
  ? props.instance.challenges[props.attempt.parent]
  : null;

const buttonTexts = {
  [Action.PARENT_CHALLENGED]: 'Submit proof',
  [Action.ROOT_CREATED]: 'Start a challenge',
  [Action.ATTEMPT_CREATED]: 'Start a challenge',
  [Action.CHALLENGE_ACTIVATED]: 'Submit proof',
  [Action.CHALLENGE_ANSWERED]: 'See the proof',
};
const buttonText = buttonTexts[props.action.type];
const title = {
  [Action.PARENT_CHALLENGED]: "",
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

const collapsable = title !== undefined;

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
  <div class="group" @click="toggle()" :class="{ 'cursor-pointer': collapsable }">
    <div class="flex group w-full ">
      <p>

        <v-icon v-if="title" name="md-expandmore-round"
          class="mr-1 transform transition duration-500 text-gray-600 group-hover:scale-125 group-hover:text-gray-900"
          :class="{ '-rotate-90': collapsed }" />

        <span v-if="action.type === Action.PARENT_CHALLENGED">
          <User :name="action.author" /> challenged the parent claim
          <UidTag :object="parentChallenge" />
          with a bounty of
          <Price :amount="action.cost" />
        </span><span v-else-if="action.type === Action.ROOT_CREATED">
          <User :name="action.author" /> created a new SPRIG instance with a bounty of
          <Price :amount="action.cost" />.
        </span><span v-else-if="action.type === Action.ATTEMPT_CREATED">
          <User :name="action.author" /> answered
          <UidTag :object="parentChallenge" />
          with this proof attempt and a bounty of
          <Price :amount="params.downstakes[attempt.height]" />
        </span><span v-else-if="action.type === Action.CHALLENGE_ACTIVATED">
          <User :name="action.author" /> opened the challenge
          <UidTag :object="action.challenge" />
          with a bounty of
          <Price :amount="action.cost" />
        </span><span v-else-if="action.type === Action.CHALLENGE_ANSWERED">
          Challenge
          <UidTag :object="action.challenge" /> was answered by
          <User :name="action.author" />
          with
          <UidTag :object="action.attempt" :tooltip="true" />
        </span><span v-else-if="action.type === Action.AUTO_VALIDATION">
          Time for questions has elapsed, and no new challenges can be added.
        </span><span v-else-if="action.type === Action.MACHINE_REJECTED">
          This machine proof was rejected.
        </span><span v-else-if="action.type === Action.MACHINE_VERIFIED">
          This machine proof was accepted.
        </span><span v-else>
          {{ action.type }} needs more work...
        </span>

      </p>

      <button v-if="buttonText" @click.stop="takeAction()"
        class="min-w-fit align-top border box-border border-slate-300 shadow-sm rounded-md px-4 py-1 ml-auto mr-4 -my-1 self-start transition duration-500 "
        :class="{ 'opacity-0': !collapsed && title }">{{ buttonText }}</button>
    </div>

    <Transition>
      <div v-if="collapsable" v-show="!collapsed" @click.stop>
        <div class="bg-slate-100 p-4 my-2 rounded-md flex flex-col shadow-sm cursor-auto">
          <h3 class="font-semibold ">{{ title }}</h3>
          <ul v-if="action.type === Action.ROOT_CREATED || action.type === Action.ATTEMPT_CREATED">
            <li>Lock a bounty of
              <Price :amount="params.question_bounties[attempt.height]" />
            </li>
            <li>For
              <Duration :duration="params.time_for_questions" />, proof attempts can be submitted for
              <price :amount="params.upstakes[attempt.height - 1] + params.downstakes[attempt.height - 1]" />
            </li>
            <li>The first accepted proof attempt is rewarded with your bounty of
              <Price :amount="params.question_bounties[attempt.height]" />
            </li>
            <li>If all proof attempts are rejected, you get your locked bounty back,
              If your challenge is the first to invalidate
              <User :name="attempt.author" />'s proof, you get their
              <Price :amount="params.downstakes[attempt.height]" /> bounty.
            </li>
          </ul>
          <ul v-else-if="action.type === Action.CHALLENGE_ACTIVATED">
            <li>Before <Time :time="action.challenge.openUntil" />, submit a proof for
              <Price :amount="action.challenge.costAddAttempt(params)" />.
            </li>
            <li>For
              <Duration :duration="params.time_for_questions" /> challenges can be submitted.
            </li>
            <li>If the proof passes all challenges, you get your
              <Price :amount="action.challenge.costAddAttempt(params)" /> back, and also
              <User :name="action.challenge.author" />'s bounty of
              <Price :amount="action.cost" />
            </li>
            <li>If some challenge invalidates the proof, they get
              <Price :amount="params.downstakes[attempt.height - 1]" /> and
              <User :name="action.author" /> gets
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

    <Time :time="action.time" suffix class="block w-fit text-xs text-gray-400 -mb-4" />

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