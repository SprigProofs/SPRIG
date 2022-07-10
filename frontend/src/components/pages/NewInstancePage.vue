<script setup lang="ts">
import { computed } from '@vue/reactivity';
import dayjs from 'dayjs/esm';
import { nextTick, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { linkTo, Parameters, Unit } from '../../sprig';
import { store } from '../../store';
import Languages from '../languages';
import DurationPicker from '../small/DurationPicker.vue';
import Button from '../small/Button.vue';
import LoadingIndicator from '../small/LoadingIndicator.vue';

const router = useRouter();

const costs = reactive([
  {  // machine level
    upstake: 5,
    downstake: 0,  // not used
    questionBounty: 0,  // not used
    key: "My",
    height: 0,
  },
  {
    upstake: 5,
    downstake: 50,
    questionBounty: 20,
    key: "name",
    height: 1,
  },
  {
    upstake: 10,
    downstake: 100,
    questionBounty: 25,
    key: "is",
    height: 2,
  },
  {  // root
    upstake: 0,  // not used
    downstake: 200,
    questionBounty: 50,
    key: "Bob",
    height: 3,
  },
]);
const timeForQuestions = ref(dayjs.duration(1, 'day'));
const timeForAnswers = ref(dayjs.duration(1, 'day'));
const selectedLanguage = ref("Lean4");
const maxProofSize = ref(10000);
const root_question = ref("");
const proof_attempt = ref("");
const costToPublish = computed(() => costs[costs.length - 1].downstake);
const isSubmitting = ref(false);


function newCostRow(height: number) {
  costs.splice(height, 0, {
    upstake: height,
    downstake: height,
    questionBounty: height,
    key: Math.random().toString().slice(2, 10),
    height: 0  // placeholder
  });

  costs.forEach((row, height) => row.height = height);
}

const costsMiddleRows = computed(() => {
  const middle = [...costs];
  middle.splice(0, 1);
  middle.pop();
  return middle.reverse();
});

const invalidInputs = computed(() => {
  const fails = [];
  if (timeForAnswers.value.asMinutes() < 1)
    fails.push("The time to answer challenges must be greater than one minute.");

  if (timeForQuestions.value.asMinutes() < 1)
    fails.push("The time ask questions must be greater than one minute.");

  // When an imput is not a number, its value is "", which is < 100
  if (maxProofSize.value < 100) {
    fails.push("The maximum proof size must be a number greater than 100.");
  }

  costs.forEach((row) => {
    if (row.height == 0) {
      if (row.downstake != 0)
        fails.push(`Downstake for height ${row.height} must be zero.`);
    } else if (row.downstake < 1)
      fails.push(`Downstake for height ${row.height} must be greater than 1.`);

    if (row.height == costs.length - 1) {
      if (row.upstake != 0)
        fails.push(`Upstake for height ${row.height} must be zero.`);
    } else if (row.upstake < 1)
      fails.push(`Upstake for height ${row.height} must be greater than 1.`);

    if (row.height == 0) {
      if (row.questionBounty != 0)
        fails.push(`Question Bounty for height ${row.height} must be zero.`);
    } else if (row.questionBounty < 1)
      fails.push(`Question bounty for height ${row.height} must be greater than 1.`);
  });

  if (root_question.value === "")
    fails.push("Add an initial question");

  if (proof_attempt.value === "")
    fails.push("Add a proof attempt");

  return fails;
});

function createInstance() {
  isSubmitting.value = true;
  const upstakes = costs.map(row => row.upstake);
  const downstakes = costs.map(row => row.downstake);
  const questionBounties = costs.map(row => row.questionBounty);
  const params = new Parameters({
    rootHeight: costs.length,
    maxLength: maxProofSize.value,
    timeForQuestions: timeForQuestions.value,
    timeForAnswers: timeForAnswers.value,
    upstakes: upstakes,
    downstakes: downstakes,
    questionBounties: questionBounties,
    verificationCost: 1,
  });

  store.newInstance(
    selectedLanguage.value,
    params,
    root_question.value,
    proof_attempt.value,
  ).then(instance => {
    nextTick(() => router.push(linkTo(instance)));
  }).catch(error => {
    isSubmitting.value = false;
  });
}

</script>

<template>
  <div class="bg-gray-100">
    <div class="max-w-4xl lg:mx-auto sm:mx-6 my-8">
      <h1 class="px-4 sm:px-0 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        New SPRIG Instance
      </h1>
      <div class="mt-4">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Parameters</h3>
              <p class="mt-1 text-sm text-gray-600">
                Stakes, bounties and constraints for every level of recursion.</p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="shadow border border-black sm:rounded-sm sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">

                  <!-- Language -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700">Language</label>
                    <p class="text-sm leading-5 text-gray-500">
                      The language determines the topic and syntax of the proofs.
                    </p>
                    <fieldset class="mt-4">
                      <legend class="sr-only">Language</legend>
                      <div class="space-y-4">
                        <div v-for="lang in Languages" :key="lang.name" class="relative flex items-start">
                          <div class="flex items-center h-5">
                            <input type="radio" v-model="selectedLanguage" :value="lang.name" :id="lang.name"
                              :aria-describedby="`${lang.name}-description`" name="language"
                              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                          </div>
                          <div class="ml-3 text-sm">
                            <label :for="lang.name" class="font-medium text-gray-700">{{ lang.name }}</label>
                            <p :id="`${lang.name}-description`" class="text-gray-500">{{ lang.description }}</p>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  <div class="sm:flex sm:space-x-6 space-y-6 sm:space-y-0">
                    <!-- Max question time -->
                    <DurationPicker id="time_for_questions" label="Time for questions" v-model="timeForQuestions" />

                    <!-- Answer time -->
                    <DurationPicker id="time_for_answers" label="Time to answer challenges" v-model="timeForAnswers" />

                  </div>

                  <!-- Max proof size -->
                  <div>
                    <label for="max-proof-size" class="block text-sm font-medium text-gray-700">Maximum Proof
                      size</label>
                    <div class="mt-1 relative rounded-sm shadow-sm w-24">
                      <input type="number" name="max-proof-size" id="max-proof-size" v-model="maxProofSize" min="100" />
                    </div>
                  </div>

                  <!-- Bounties / Stakes -->
                  <div>
                    <div class="ring-1  ring-black ring-opacity-5">
                      <table class="min-w-full divide-y divide-gray-300 md:rounded-sm">
                        <thead class="bg-gray-50 md:rounded-t-lg">
                          <tr>
                            <th scope="col"
                              class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                              Height</th>
                            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Upstake</th>
                            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Downstake</th>
                            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                              Question bounty</th>
                            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                              <span class="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                          <!-- Root claim -->
                          <tr>
                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              {{ costs.length - 1 }} (root)</td>
                            <td></td>
                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <input type="number" min="1" v-model="costs[costs.length - 1].downstake">
                            </td>
                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <input type="number" min="1" v-model="costs[costs.length - 1].questionBounty">
                            </td>
                            <td class="relative">
                              <button @click.prevent="newCostRow(costs.length - 1)"
                                class="absolute text-sm top-full left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-1  text-green-600 hover:text-green-900 rounded">
                                New
                              </button>
                            </td>
                          </tr>
                          <!-- Each depth level -->
                          <tr v-for="(row, i) in costsMiddleRows">
                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              {{ row.height }}
                            </td>
                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <input type="number" min="1" v-model="row.upstake">
                            </td>
                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <input type="number" min="1" v-model="row.downstake">
                            </td>
                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <input type="number" min="1" v-model="row.questionBounty">
                            </td>
                            <td
                              class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                              <button @click.prevent="costs.splice(row.height, 1)"
                                class="px-1 rounded text-indigo-600 hover:text-indigo-900">
                                Remove
                              </button>
                              <button @click.prevent="newCostRow(row.height)"
                                class="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-1 rounded  text-green-600 hover:text-green-900">
                                New
                              </button>

                            </td>
                          </tr>

                          <!-- Machine level -->
                          <tr>
                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              0 (machine)</td>
                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <input type="number" min="1" v-model="costs[0].upstake" class="w-24">
                            </td>
                            <td></td>
                            <td></td>
                            <td class="relative">
                            </td>
                          </tr>

                        </tbody>
                      </table>
                      </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
          <div class="border-t border-gray-200" />
        </div>
      </div>

      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Initial proof attempt</h3>
              <p class="mt-1 text-sm text-gray-600">
                For details on the format, see
                <router-link to="/docs" target="_blank" class="underline hover:text-purple-700 after:content-['↗']">the documentation</router-link>.
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-sm border border-black">
                <div class="px-4 py-5 bg-white sm:p-6 space-y-6">

                  <div>
                    <label for="about" class="block text-sm font-medium text-gray-700">
                      Initial question
                    </label>
                    <div class="mt-1">
                      <textarea id="about" name="about" rows="3" v-model="root_question"
                        autocorrect="false" spellcheck="false"
                        class="font-mono whitespace-pre shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-sm"
                        placeholder="theorem riemann_hypothesis ..." />
                    </div>
                  </div>

                  <div>
                    <label for="partial_proof" class="block text-sm font-medium text-gray-700">
                      Partial proof
                    </label>
                    <div class="mt-1">
                      <textarea id="about" name="partial_proof" rows="7" v-model="proof_attempt"
                        autocorrect="false" spellcheck="false"
                        class="font-mono whitespace-pre shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-sm"
                        placeholder="theorem riemann_hypothesis ..." />
                    </div>
                    <!-- <p class="mt-2 text-sm text-gray-500">
                      The main question... </p> -->
                  </div>

                </div>
                <div class="px-4 py-3 bg-gray-50 sm:flex flex-row justify-between items-end sm:px-6">
                  <div class="text-sm text-gray-500 pb-3 sm:pb-0 sm:pr-6">
                    <p v-if="invalidInputs.length > 0">There are still a few things to do before creating this instance:
                    </p>
                    <ul class="list-disc list-inside">
                      <li v-for="fail in invalidInputs" class="">{{ fail }}</li>
                    </ul>
                  </div>
                  <Button v-if="!isSubmitting"
                    type="submit" color="indigo" filled
                    @click.prevent="createInstance()"
                    :disabled="invalidInputs.length > 0"
                    >Publish and lock&nbsp;<Price :amount="costToPublish"/></Button>
                  <LoadingIndicator v-else>
                    Submiting instance...
                  </LoadingIndicator>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
  td > input {
    width: 100% !important;
  }
</style>