<template>
  <div v-if="!sprig" class="text-center m-auto">loading...</div>
  <div v-else>
    <div class="bg-white shadow p-4 z-10 relative">
      <h1 class="text-lg font-bold flex items-center space-x-2">
        <StatusDisplay :status="sprig.claims[0].status" />
        <span>Instance #{{ hash }}</span>
      </h1>
      <ul class="flex space-x-4 mt-1 text-gray-700">
        <li class="flex items-center">
          <TranslateIcon class="h-5 text-gray-500" />
          <span class="ml-2"> {{ sprig.language_data.__class__ }} </span>
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
    </div>

    <div class="flex w-full">
      <aside class="max-w-lg w-full p-6 bg-white shadow h-full">
        <section v-if="claimsWithStatus('challenged').length">
          <h2 class="text-2xl font-black text-gray-700 pb-4">Challenged claims</h2>
          <ul class="space-y-2">
            <li v-for="claim in claimsWithStatus('challenged')" :key="claim.hash">
              <ClaimDisplay :instance="hash" :hash="claim.hash" />
            </li>
          </ul>
        </section>
        <section v-if="claimsWithStatus('unchallenged').length" class="mt-2">
          <h2 class="text-2xl font-black text-gray-700 py-4">Unchallenged claims</h2>
          <ul class="space-y-2">
            <li v-for="claim in claimsWithStatus('unchallenged')" :key="claim.hash">
              <ClaimDisplay :instance="hash" :hash="claim.hash" />
            </li>
          </ul>
        </section>
      </aside>
      <div class="bg-grid flex justify-around w-full">
        <RecursiveClaimList class="m-4" :instance="hash" start="0"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
  // created(): void {
  //   this.loading = true;
  //   api.fetchInstance(this.hash, (data) => {
  //     this.sprig = data;
  //     this.loading = false;
  //   });
  // },
});
</script>

<style scoped>
.bg-grid {
  background-image: linear-gradient(#e6e6e6 1px, transparent 1px), linear-gradient(90deg, #e6e6e6 1px, transparent 1px);
  background-size: 1em 1em;
  background-repeat: repeat;
}
</style>
