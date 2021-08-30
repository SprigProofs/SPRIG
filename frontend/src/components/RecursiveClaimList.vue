<template>
  <div
    @click="collapsed = !collapsed"
    class="shadow rounded-lg bg-white w-auto flex justify-between"
  >
    <div class="flex items-center p-4">
      <div v-if="sprig.proof_attempts[start]" class="pr-2 text-gray-500">
        <ChevronRightIcon v-if="collapsed" class="h-5" />
        <ChevronDownIcon v-else class="h-5" />
      </div>
      <p class="pr-4">
        <StatementDisplayShort :statement="claim.statement" />
      </p>
      <StatusDisplay :status="claim.status" />
    </div>

    <div class="grid grid-cols-2 items-center pr-2 rounded-r-lg">
      <StatusDisplay
        v-for="status in ['validated', 'rejected', 'challenged', 'unchallenged']"
        count="7" only_icon gray :status="status"
        :key="status"
        class="p-2 flex items-center h-full"
      />
    </div>
  </div>

  <ol
    v-if="
      !collapsed &&
      sprig.proof_attempts[start] &&
      sprig.proof_attempts[start].length
    "
  >
    <li
      v-for="(attempt, key) in sprig.proof_attempts[start]"
      :key="key"
      class="ml-4 border-l-4 pl-4"
    >
      <p class="text-gray-500 py-2">
        Attempt by {{ attempt.claimer }} at {{ attempt.time }}
        <span v-if="attempt.height === 0"> - Machine level proof </span>
        <StatusDisplay :status="attempt.status" />
      </p>
      <ol class="space-y-2">
        <li v-for="claim_hash in attempt.claims" :key="claim_hash">
          <RecursiveClaimList :sprig="sprig" :hash="hash" :start="claim_hash" />
        </li>
      </ol>
    </li>
  </ol>
</template>

<script lang="ts">
import { Claim, Sprig } from "@/sprig";
import StatusDisplay from "@/components/StatusDisplay.vue";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/vue/outline";
import StatementDisplayShort from "@/components/languages/TicTacToe/StatementDisplayShort.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "RecursiveClaimList",
  props: {
    sprig: Sprig,
    hash: String,
    start: {
      type: String,
      default: "0",
    },
  },
  data() {
    return {
      collapsed: this.start !== "0",
    };
  },
  computed: {
    claim(): Claim {
      return this.sprig.claims[this.start];
    },
    bg_color(): string {
      let map: Record<string, string> = {
        rejected: "bg-red-50",
        validated: "bg-green-50",
        challenged: "bg-yellow-50",
        unchallenged: "bg-blue-50",
      };
      return map[this.claim.status];
    },
  },
  components: { StatusDisplay, ChevronDownIcon, ChevronRightIcon, StatementDisplayShort },
});
</script>

<style scoped></style>
