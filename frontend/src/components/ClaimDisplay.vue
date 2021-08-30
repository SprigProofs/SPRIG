<template>
  <div class="flex border bg-gray-50 rounded-lg p-2 items-center justify-between">
    <StatementDisplayShort :statement="claim.statement" />
    <p v-if="claim.challenged_time !== null">
      Challenged at {{ claim.challenged_time }}
    </p>
    <ButtonPrimary v-if="claim.status === 'challenged'">Submit proof</ButtonPrimary>
    <ButtonPrimary v-if="claim.status === 'unchallenged'">Challenge</ButtonPrimary>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Claim } from "@/sprig";
import StatementDisplayShort from "@/components/languages/TicTacToe/StatementDisplayShort.vue";
import ButtonPrimary from "@/components/ButtonPrimary.vue";

export default defineComponent({
  name: "ClaimDisplay",
  props: {
    claim: Claim,
  },
  components: { StatementDisplayShort, ButtonPrimary },
});
</script>
