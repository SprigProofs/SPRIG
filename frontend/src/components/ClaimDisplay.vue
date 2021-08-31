<template>
  <div class="flex border bg-gray-50 rounded-lg p-2 items-center justify-between">
    <StatementDisplayShort :statement="claim.statement" />
    <p v-if="claim.challenged_time !== null">
      Challenged at {{ claim.challenged_time }}
    </p>
    <ButtonPrimary v-if="claim.status === 'challenged'" @click="submitProof">Submit proof</ButtonPrimary>
    <ButtonPrimary v-if="claim.status === 'unchallenged'" @click="challenge">Challenge</ButtonPrimary>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import {api, Claim} from "@/sprig";
import StatementDisplayShort from "@/components/languages/TicTacToe/StatementDisplayShort.vue";
import ButtonPrimary from "@/components/ButtonPrimary.vue";

export default defineComponent({
  name: "ClaimDisplay",
  props: {
    claim: {
      type: Object as PropType<Claim>,
      required: true,
    },
  },
  methods: {
    challenge(): void {
      api.challenge("00001", this.claim.hash, "Diego", (balance) => {
        console.log("Claim challenge. Balance left:", balance);
      });
    },
  },
  components: { StatementDisplayShort, ButtonPrimary },
});
</script>
