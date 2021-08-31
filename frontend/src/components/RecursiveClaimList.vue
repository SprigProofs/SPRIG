<template>
  <div class="flex">
    <div
      class="flex flex-col w-72"
      :class="{ 'cursor-pointer': sprig?.proof_attempts[start]?.length }"
      @click="collapsed = !collapsed"
    >
      <!-- This extra div in the hierarchy allow the click to happen on possibly large blank space before the next claim. -->
      <div class="w-72 shadow p-4 rounded-lg bg-white w-auto flex justify-between items-center"
        :class="bg_color">
        <div class="flex items-center">
          <div v-if="false && sprig.proof_attempts[start]"
            class="pr-2 text-gray-500">
            <ChevronRightIcon v-if="collapsed" class="h-5" />
            <ChevronDownIcon v-else class="h-5" />
          </div>
          <StatementDisplayShort :statement="claim.statement" />
        </div>
        <!-- Right -->
        <div class="flex flex-col items-center space-y-2">
          <StatusDisplay :status="claim.status" />
          <div
            v-if="statusCountsToDisplay.length"
            class="flex items-center rounded-r-lg"
          >
            <StatusDisplay
              v-for="data in statusCountsToDisplay"
              :count="data.count"
              only_icon
              gray
              :status="data.status"
              :key="data.status"
              class="flex items-center h-full"
            />
          </div>
        </div>
      </div>
    </div>

    <ol v-if="!collapsed && sprig.proof_attempts[start]?.length">
      <li
        v-for="(attempt, key) in sprig.proof_attempts[start]"
        :key="key"
        class="ml-4 border-l-4 pl-4"
      >
        <p class="text-gray-500 py-2">
          Attempt by {{ attempt.claimer }} at {{ attempt.time }}
          <span v-if="attempt.height === 0"> - Machine level proof </span>
          <!--        <StatusDisplay :status="attempt.status" />-->
        </p>
        <ol class="space-y-2">
          <li v-for="claim_hash in attempt.claims" :key="claim_hash">
            <RecursiveClaimList
              :instance="instance"
              :start="claim_hash"
            />
          </li>
        </ol>
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { Claim, Sprig, Status } from "@/sprig";
import StatusDisplay from "@/components/StatusDisplay.vue";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/vue/outline";
import StatementDisplayShort from "@/components/languages/TicTacToe/StatementDisplayShort.vue";

import { defineComponent, PropType } from "vue";
import { store } from "@/store";

export default defineComponent({
  name: "RecursiveClaimList",
  props: {
    instance: {
      type: String,
      required: true,
    },
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
    sprig(): Sprig | undefined {
      return store.instance(this.instance);
    },
    claim(): Claim | undefined {
      return store.claim(this.instance, this.start);
    },
    bg_color(): string {
      if (!this.claim) return "";

      let map: Record<string, string> = {
        rejected: "bg-red-50",
        validated: "bg-green-50",
        challenged: "bg-yellow-50",
        unchallenged: "bg-blue-50",
      };
      return map[this.claim.status];
    },
    statusCountsToDisplay() {
      if (!this.sprig || !this.claim) return [];
      // Avoid typecheck complain about undefinded
      const sprig = this.sprig;
      const claim = this.claim;
      return [
        Status.VALIDATED,
        Status.REJECTED,
        Status.CHALLENGED,
        Status.UNCHALLENGED,
      ]
        .map((status) => ({
          status,
          count:
            this.countStatus(sprig, status, this.start) -
            (status == claim.status ? 1 : 0),
        }))
        .filter((data) => data.count > 0);
    },
  },
  methods: {
    countStatus(sprig: Sprig, status: Status, start = "0"): number {
      let count = sprig.claims[start].status === status ? 1 : 0;
      if (!sprig.proof_attempts[start]) {
        return count;
      }
      for (let attempt of sprig.proof_attempts[start]) {
        for (let claim of attempt.claims) {
          count += this.countStatus(sprig, status, claim);
        }
      }
      return count;
    },
  },
  components: {
    StatusDisplay,
    ChevronDownIcon,
    ChevronRightIcon,
    StatementDisplayShort,
  },
});
</script>
