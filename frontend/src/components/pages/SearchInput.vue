<script setup lang="ts">

import { computed, reactive, ref } from 'vue';
import _ from 'lodash';
import dayjs from 'dayjs/esm';

import { Status, decided, Sprig, ProofAttempt, Parameters, Challenge, linkTo } from '../../sprig';
import { store } from '../../store';
import { StatusTag, LanguageTag } from '../small';
import InstanceEmbed from '../medium/InstanceEmbed.vue';
import AttemptEmbed from '../medium/AttemptEmbed.vue';
import ChallengeEmbed from '../medium/ChallengeEmbed.vue';

const statuses = reactive({
  [Status.CHALLENGED]: true,
  [Status.UNCHALLENGED]: true,
  [Status.VALIDATED]: false,
  [Status.REJECTED]: false
});

const REWARD = "Reward";
const OPEN_UNTIL = "Open until";
const RELEVANCE = "Relevance";
const NEW = "New";
const sortMethods = reactive([NEW, REWARD, OPEN_UNTIL]);
enum Types {
  CHALLENGE = "Challenges",
  ATTEMPT = "Proof Attempts",
  INSTANCE = "Instances",
  USER = "Users",
}
const types = [Types.CHALLENGE, Types.ATTEMPT, Types.INSTANCE, Types.USER];
const selectedTypes = reactive({
  [Types.CHALLENGE]: true,
  [Types.ATTEMPT]: true,
  [Types.INSTANCE]: true,
  [Types.USER]: false,
});
const search = ref("");

const languages = reactive<Record<string, boolean>>({});
_.uniq(_.values(store.instances)
  .map(instance => instance.language))
  .forEach(lang => languages[lang] = true);


function startDrag(event, method) {
  event.dataTransfer.dropEffect = 'move';
  event.dataTransfer.setData("method", method);
  event.target.classList.add("opacity-70");
}

function endDrag(event, method) {
  event.target.classList.remove("opacity-70");
}

function dragEnter(event, method) {
  const dragged = event.dataTransfer.getData("method");
  if (method !== dragged) {
    if (sortMethods.indexOf(dragged) > sortMethods.indexOf(method)) {
      event.target.classList.add("border-t-4", "border-t-gray-600");
    } else {
      event.target.classList.add("border-b-4", "border-b-gray-600");
    }
  }
}
function dragExit(event, _) {
  event.target.classList.remove("border-t-4", "border-b-4");
}

function drop(event, droppedMethod) {
  event.target.classList.remove("border-t-4", "border-b-4");

  const draggedMethod = event.dataTransfer.getData("method");
  const idxDropped = sortMethods.indexOf(draggedMethod);
  const idxCurrent = sortMethods.indexOf(droppedMethod);

  // Remove the moved method
  sortMethods.splice(idxDropped, 1);
  sortMethods.splice(idxCurrent, 0, draggedMethod);
}

function getWeights(o, type: Types) {
  const weights = {};
  const now = dayjs();
  const timeDiff = (d: dayjs.Dayjs) => now.diff(d, "hours", true);
  switch (type) {
    // TODO: Set all weights
    case Types.CHALLENGE:
      const challenge: Challenge = o;
      weights[REWARD] = -challenge.possibleReward(store.instances[challenge.instanceHash].params);
      weights[NEW] = timeDiff(challenge.challengedAt || challenge.createdAt);
      weights[OPEN_UNTIL] = decided(challenge.status)
        ? 99999999999999
        : timeDiff(challenge.openUntil);
      weights[RELEVANCE] = -1;
      break;

    case Types.ATTEMPT:
      const attempt: ProofAttempt = o;
      const instance_ = store.instances[attempt.instanceHash];
      weights[REWARD] = -attempt.possibleReward(instance_.params);
      weights[NEW] = timeDiff(attempt.createdAt);
      weights[OPEN_UNTIL] = -1;
      weights[RELEVANCE] = -1;
      break;

    case Types.INSTANCE:
      const instance: Sprig = o;
      weights[REWARD] = -instance.totalBounties();
      weights[NEW] = timeDiff(instance.rootAttempt().createdAt);
      weights[OPEN_UNTIL] = -1;
      weights[RELEVANCE] = -1;
      break;

    default:
      break;
  }

  return weights;
}

function combineWeights(weights): number {
  var weight = 0;
  for (let i = 0; i < sortMethods.length; i++) {
    const method = sortMethods[i];
    weight += weights[method] * 0.3 ** i;
  }
  return weight;
}
function weightDebug(o, type: Types) {
  const weights = getWeights(o, type);
  weights["Total"] = combineWeights(weights);
  return weights;
}

const results = computed<{ key: string, challenge?: Challenge, instance?: Sprig, attempt?: ProofAttempt; user: string }[]>(() => {
  const sortKey = (type) => (a, b) => combineWeights(getWeights(a, type))
    - combineWeights(getWeights(b, type));

  var all = [];
  if (selectedTypes[Types.CHALLENGE]) {
    all = all.concat(
      _.values(store.instances)
        .flatMap((instance: Sprig) => _.values(instance.challenges))
        // TODO: filter according to search. But we need languages for that.
        .filter(challenge => statuses[challenge.status])
        .filter(challenge => languages[store.instances[challenge.instanceHash].language])
        .map(challenge => ({
          key: challenge.uid(),
          challenge,
        })));
  }

  if (selectedTypes[Types.INSTANCE]) {
    all = all.concat(_.values(store.instances)
      .filter(instance => statuses[instance.rootAttempt().status])
      .filter(instance => languages[instance.language])
      .map(instance => ({
        key: instance.uid(),
        instance,
      })));
  }

  if (selectedTypes[Types.ATTEMPT]) {
    all = all.concat(_.values(store.instances)
      .flatMap(instance => _.values(instance.proofs))
      .filter(attempt => statuses[attempt.status] && attempt.proof.toLowerCase().includes(search.value.toLowerCase()))
      .filter(attempt => languages[store.instances[attempt.instanceHash].language])
      .map(attempt => ({
        key: attempt.uid(),
        attempt,
      })));
  }

  if (selectedTypes[Types.USER]) {
    all = all.concat(_.values(store.instances)
      .flatMap(instance => _.values(instance.proofs)
        .map(p => p.author)
        .concat(_.values(instance.challenges)
          .map(c => c.author)))
      .filter(user => user !== null && user.toLowerCase().includes(search.value.toLocaleLowerCase()))
      .map(user => ({ key: user, user }))

    )
  }

  const getType = o => o.attempt ? Types.ATTEMPT : o.instance ? Types.INSTANCE : o.challenge ? Types.CHALLENGE : Types.USER;
  const getItem = o => o.attempt || o.instance || o.challenge || o.user;

  all.sort((a, b) => (
    combineWeights(getWeights(getItem(a), getType(a)))
    - combineWeights(getWeights(getItem(b), getType(b)))
  ));

  return all;
});

</script>

<template>
  <div class="max-w-5xl mx-auto p-8">
    <input type="text" v-model="search" class="w-full p-2 mb-6" placeholder="Search...">
    <div class="bg-gray-100 rounded-sm border
            p-4
            grid grid-cols-3 gap-8">
      <section class="flex flex-col space-y-2">
        <h2 class="small-title">Filter status</h2>
        <div class="flex flex-wrap -mx-1 -my-1">
          <label v-for="v, s in statuses" :key="s" class="m-1 hover:brightness-105 cursor-pointer transition ">
            <input class="hidden" type="checkbox" :name="s" :id="s" v-model="statuses[s]">
            <StatusTag :status="s" class="" :grayed="!statuses[s]" />
          </label>
        </div>
        <h2 class="small-title pt-2">Filter language</h2>
        <div class="flex flex-wrap -mx-1 -my-1">
          <label v-for="v, l in languages" :key="l" class="m-1 cursor-pointer hover:font-semibold transition">
            <input class="hidden" type="checkbox" :name="l" :id="l" v-model="languages[l]">
            <LanguageTag :lang="l" :grayed="!v" />
          </label>
        </div>
      </section>
      <section class="flex flex-col space-y-2">
        <h2 class="small-title">Sort by</h2>
        <TransitionGroup tag="ol" class="flex flex-col items-start
                    list-inside list-decimal
                    ">
          <li v-for="method in sortMethods" :key="method" :draggable="true" @dragstart="startDrag($event, method)"
            @drop="drop($event, method)" @dragend="endDrag($event, method)" @dragenter="dragEnter($event, method)"
            @dragexit="dragExit($event, method)" @dragover.prevent @dragenter.prevent class="cursor-move select-none
                        hover:bg-gray-200 border-l-2 hover:border-l-gray-600 border-l-transparent border-y-gray-600
                        py-2 rounded-sm -ml-4 px-4 w-full transition-all
                        marker:text-gray-600">
            {{ method }}</li>
        </TransitionGroup>
        <span class="text-xs text-gray-400">Tip: reorder to match your needs.</span>
      </section>
      <section class="flex flex-col space-y-2">
        <h2 class="small-title">Type</h2>
        <label v-for="(type) in types" :key="type" class="cursor-pointer">
          <input type="checkbox" :name="type" :id="type" v-model="selectedTypes[type]">
          {{ type }}
        </label>
      </section>
    </div>

    <h2 class="mt-4 py-4">
      {{ results.length }} Result{{ results.length != 1 ? 's' : '' }}
    </h2>

    <TransitionGroup tag="ol" class="space-y-6">
      <li v-for="result in results" :key="result.key" class="transition">
        <router-link :to="linkTo(result.attempt || result.challenge || result.instance || result.user)"
          class="p-4 block bg-white rounded-sm shadow-sm hover:shadow-md w-full border">
          <AttemptEmbed v-if="result.attempt" :hash="result.attempt.hash" :instance="store.instances[result.attempt.instanceHash]" />
          <InstanceEmbed v-else-if="result.instance" :hash="result.instance.hash"></InstanceEmbed>
          <ChallengeEmbed v-else-if="result.challenge" :challenge="result.challenge" :instance="store.instances[result.challenge.instanceHash]" />
          <pre v-else>{{ result }}</pre>
          <!-- <pre>{{ weightDebug(result.attempt || result.claim || result.instance, selectedType) }}</pre> -->

        </router-link>
      </li>
    </TransitionGroup>

    <section v-if="results.length === 0">
      <el-empty description="Nothing to show here. Try broadening your search.">
        <router-link to="/new">
          <Button icon="md-add-round" color="blue">New SPRIG instance</Button>
        </router-link>
      </el-empty>
    </section>
  </div>
</template>
