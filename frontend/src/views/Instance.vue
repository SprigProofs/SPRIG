<template>
  <div v-if="loading" class="text-center m-auto">loading...</div>
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

    <div class="flex">
      <RecursiveClaimList class="mx-auto my-4" :sprig="sprig" :hash="hash" />
      <aside class="max-w-lg w-full p-6 bg-white shadow space-y-6">
        <h2 class="text-2xl font-black text-gray-700">Challenged claims</h2>
        <ul class="space-y-2">
          <li v-for="claim in challengedClaims" :key="claim.hash">
            <ClaimDisplay :claim="claim" />
          </li>
        </ul>
        <h2 class="text-2xl font-black text-gray-700">Unchallenged claims</h2>
        <ul class="space-y-2">
          <li v-for="claim in unchallengedClaims" :key="claim.hash">
            <ClaimDisplay :claim="claim" />
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {api, Claim, Sprig} from "@/sprig";
import StatusDisplay from "@/components/StatusDisplay.vue";
import RecursiveClaimList from "@/components/RecursiveClaimList.vue";
import {
  ClockIcon,
  TranslateIcon,
  UserCircleIcon,
} from "@heroicons/vue/outline";
import ClaimDisplay from "@/components/ClaimDisplay.vue";

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
    // We please the type system
    let s: Sprig = {
      claims: {},
      constraints: {},
      proof_attempts: {},
      language_data: { __class__: "none" },
    };
    return {
      sprig: s,
      hash: this.$route.params.instance,
      loading: false,
    };
  },
  computed: {
    challengedClaims(): Claim[] {
      return Object.values(this.sprig.claims).filter(
        (claim) => claim.status === "challenged"
      );
    },
    unchallengedClaims(): Claim[] {
      return Object.values(this.sprig.claims).filter(
          (claim) => claim.status === "unchallenged"
      );
    },
  },
  created(): void {
    this.loading = true;
    api.fetchInstance(this.hash, (data) => {
      this.sprig = data;
      this.loading = false;
    });
  },
});
</script>
