<template>
  <div class="h-full">
    <div v-if="!sprig" class="text-center m-auto">loading...</div>
    <div v-else class="h-full">
      <!-- It is important that this header has a height of 20 as it is used to size the div below-->
      <header class="h-20 px-4 flex justify-around bg-white shadow z-20 relative">
        <h1 class="text-lg font-bold flex items-center space-x-2">
          <StatusDisplay :status="sprig.claims[0].status" />
          <span>Instance #{{ hash }}</span>
        </h1>
        <ul class="flex space-x-4 mt-1 text-gray-700">
          <li class="flex items-center">
            <TranslateIcon class="h-5 text-gray-500" />
            <span class="ml-2"> {{ sprig.language_data.type }} </span>
          </li>
          <li class="flex items-center">
            <UserCircleIcon class="h-5 text-gray-500" />
            <span class="ml-2">{{ sprig.proof_attempts[0][0].claimer }}</span>
          </li>
          <li class="flex items-center">
            <ClockIcon class="h-5 text-gray-500" />
            <span class="ml-2">{{ sprig.proof_attempts[0][0].time }}</span>
          </li>
        </ul>
      </header>

      <div class="flex w-full h-[calc(100%-5rem)]">
        <aside class="w-[32rem] p-6 bg-white shadow h-full overflow-y-scroll z-10">
          <section v-if="claimsWithStatus('challenged').length">
            <h2 class="text-2xl font-black text-gray-700 pb-4">
              Challenged claims
            </h2>
            <ul class="space-y-2">
              <li
                v-for="claim in claimsWithStatus('challenged')"
                :key="claim.hash"
              >
                <ClaimDisplay :instance="hash" :hash="claim.hash" />
              </li>
            </ul>
          </section>
          <section v-if="claimsWithStatus('unchallenged').length" class="mt-2">
            <h2 class="text-2xl font-black text-gray-700 py-4">
              Unchallenged claims
            </h2>
            <ul class="space-y-2">
              <li
                v-for="claim in claimsWithStatus('unchallenged')"
                :key="claim.hash"
              >
                <ClaimDisplay :instance="hash" :hash="claim.hash" />
              </li>
            </ul>
          </section>
        </aside>
        <div class="w-[calc(100vw-32rem)] overflow-hidden h-full">
          <div class="bg-grid min-w-max p-16" id="tree">
            <RecursiveClaimList :instance="hash" start="0" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import { Claim, Sprig, Status } from "@/sprig";
import StatusDisplay from "@/components/StatusDisplay.vue";
import RecursiveClaimList from "@/components/RecursiveClaimList.vue";
import {
  ClockIcon,
  TranslateIcon,
  UserCircleIcon,
} from "@heroicons/vue/outline";
import ClaimDisplay from "@/components/ClaimDisplay.vue";
import { store } from "@/store";
import panzoom from "panzoom";

export default defineComponent({
  name: "Instance",
  components: {
    RecursiveClaimList,
    StatusDisplay,
    ClockIcon,
    UserCircleIcon,
    TranslateIcon,
    ClaimDisplay,
  },
  data() {
    // Fix type check: instance can be a list of string, even if it will never.
    const instance = this.$route.params.instance;
    const hash = Array.isArray(instance) ? instance[0] : instance;
    return {
      hash,
      // loading: false,
    };
  },
  methods: {
    claimsWithStatus(status: Status): Claim[] {
      return store.allClaimsWithStatus(status, this.hash);
    },
  },
  computed: {
    sprig(): Sprig | undefined {
      return store.instance(this.hash);
    },
  },
  mounted() {
    const stop = watchEffect(() => {
      // We wait for the instance to be loaded
      if (this.sprig) {
        // And on next tick the DOM will have updated
        this.$nextTick(() => {
          const element = document.getElementById("tree") as HTMLElement;
          // So element is not null and we can create the panzoom
          panzoom(element, {
            minZoom: 0.1,
            maxZoom: 2,
            boundsPadding: 1,
            bounds: true,
          });
          stop();
        });
      }
    });
  },
});
</script>

<style scoped>
.bg-grid {
  background-image: linear-gradient(#e6e6e6 1px, transparent 1px),
    linear-gradient(90deg, #e6e6e6 1px, transparent 1px);
  background-size: 1em 1em;
  background-repeat: repeat;
}
</style>
