<script setup lang="ts">
import Languages from '../languages';

const people = [


  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
];

const costs = [
  {
    upstake: 0,
    downstake: 0,
    questionBounty: 0,
  },
  {
    upstake: 0,
    downstake: 0,
    questionBounty: 0,
  },
  {
    upstake: 0,
    downstake: 0,
    questionBounty: 0,
  },
  {
    upstake: 0,
    downstake: 0,
    questionBounty: 0,
  },
];

</script>

<!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
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
              <h3 class="text-lg font-medium leading-6 text-gray-900">Constraints</h3>
              <p class="mt-1 text-sm text-gray-600">This information will be displayed publicly so be
                careful
                what you share.</p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="shadow sm:rounded-md sm:overflow-hidden">
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
                            <input :id="lang.name" :aria-describedby="`${lang.name}-description`" name="language"
                              type="radio" :checked="lang.name === 'Lean4'"
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

                  <!-- Maximum depth -->
                  <div>
                    <label for="account-number" class="block text-sm font-medium text-gray-700">Maximum depth</label>
                    <div class="mt-1 relative rounded-md shadow-sm w-24">
                      <input type="number" name="account-number" id="account-number"
                        class="focus:ring-indigo-500 focus:border-indigo-500 block w-full  sm:text-sm border-gray-300 rounded-md"
                        :value="4" min="2" />
                    </div>
                  </div>

                  <!-- Bounties / Stakes -->
                  <div>
                    <div class="py-2">
                      <div class="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-300">
                          <thead class="bg-gray-50">
                            <tr>
                              <th scope="col"
                                class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                Height</th>
                              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Upstake</th>
                              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Down-stake</th>
                              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Question bounty</th>
                              <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                <span class="sr-only">Edit</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody class="divide-y divide-gray-200 bg-white">
                            <tr>
                              <!-- Root claim -->
                              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                {{ costs.length - 1 }} (root)</td>
                              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                0
                              </td>
                              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <input type="number" v-model="costs[costs.length - 1].downstake"
                                  class="w-24 border-0 px-0">
                              </td>
                              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <input type="number" v-model="costs[costs.length - 1].downstake"
                                  class="w-24 border-0 px-0">
                              </td>
                              <td></td>
                            </tr>
                            <tr v-for="(row, height) in costs" :key="height">
                              <template v-if="height > 0 && height < costs.length - 1">
                                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                  {{ costs.length - height - 1 }}
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  <input type="number" v-model="row.upstake"
                                    class="w-24 border-0 px-0">
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  <input type="number" v-model="row.downstake"
                                    class="w-24 border-0 px-0">
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  <input type="number" v-model="row.questionBounty"
                                    class="w-24 border-0 px-0">
                                </td>
                                <td
                                  class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                  <button href="#" class="text-indigo-600 hover:text-indigo-900">
                                    Remove
                                  </button>
                                </td>

                              </template>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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
                Proof statement</h3>
              <p class="mt-1 text-sm text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">

                  <div>
                    <label for="about" class="block text-sm font-medium text-gray-700">
                      Root question
                    </label>
                    <div class="mt-1">
                      <textarea id="about" name="about" rows="3"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="theorem riemann_hypothesis ..." />
                    </div>
                    <p class="mt-2 text-sm text-gray-500">Brief description for your profile. URLs
                      are
                      hyperlinked.</p>
                  </div>

                  <div class="grid grid-cols-6 gap-6">

                    <div class="col-span-6 sm:col-span-3">
                      <label for="first-name" class="block text-sm font-medium text-gray-700">First
                        name</label>
                      <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="last-name" class="block text-sm font-medium text-gray-700">Last
                        name</label>
                      <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <div class="col-span-6 sm:col-span-4">
                      <label for="email-address" class="block text-sm font-medium text-gray-700">Email
                        address</label>
                      <input type="text" name="email-address" id="email-address" autocomplete="email"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
                      <select id="country" name="country" autocomplete="country-name"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div class="col-span-6">
                      <label for="street-address" class="block text-sm font-medium text-gray-700">Street address</label>
                      <input type="text" name="street-address" id="street-address" autocomplete="street-address"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                      <input type="text" name="city" id="city" autocomplete="address-level2"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label for="region" class="block text-sm font-medium text-gray-700">State /
                        Province</label>
                      <input type="text" name="region" id="region" autocomplete="address-level1"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label for="postal-code" class="block text-sm font-medium text-gray-700">ZIP
                        /
                        Postal code</label>
                      <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
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
              <h3 class="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
              <p class="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and
                how.
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <fieldset>
                    <legend class="sr-only">By Email</legend>
                    <div class="text-base font-medium text-gray-900" aria-hidden="true">By Email
                    </div>
                    <div class="mt-4 space-y-4">
                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input id="comments" name="comments" type="checkbox"
                            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="comments" class="font-medium text-gray-700">Comments</label>
                          <p class="text-gray-500">Get notified when someones posts a comment
                            on a
                            posting.</p>
                        </div>
                      </div>
                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input id="candidates" name="candidates" type="checkbox"
                            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="candidates" class="font-medium text-gray-700">Candidates</label>
                          <p class="text-gray-500">Get notified when a candidate applies for a
                            job.</p>
                        </div>
                      </div>
                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input id="offers" name="offers" type="checkbox"
                            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="offers" class="font-medium text-gray-700">Offers</label>
                          <p class="text-gray-500">Get notified when a candidate accepts or
                            rejects an offer.</p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend class="contents text-base font-medium text-gray-900">Push Notifications
                    </legend>
                    <p class="text-sm text-gray-500">These are delivered via SMS to your mobile
                      phone.
                    </p>
                    <div class="mt-4 space-y-4">
                      <div class="flex items-center">
                        <input id="push-everything" name="push-notifications" type="radio"
                          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                        <label for="push-everything" class="ml-3 block text-sm font-medium text-gray-700"> Everything
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input id="push-email" name="push-notifications" type="radio"
                          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                        <label for="push-email" class="ml-3 block text-sm font-medium text-gray-700"> Same as email
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input id="push-nothing" name="push-notifications" type="radio"
                          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                        <label for="push-nothing" class="ml-3 block text-sm font-medium text-gray-700"> No push
                          notifications </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
