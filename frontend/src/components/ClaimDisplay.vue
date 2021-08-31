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
import { defineComponent } from "vue";
import { Claim } from "@/sprig";
import StatementDisplayShort from "@/components/languages/TicTacToe/StatementDisplayShort.vue";
import ButtonPrimary from "@/components/ButtonPrimary.vue";
import { store } from "@/store";

export default defineComponent({
  name: "ClaimDisplay",
  props: {
    instance: {
      type: String,
      required: true,
    },
    hash: {
      type: String,
      required: true,
    },
  },
  computed: {
    claim(): Claim | undefined {
      return store.claim(this.instance, this.hash);
    },
  },
  methods: {
    challenge(): void {
      if (!this.claim) return;
      store.challenge(this.instance, this.hash, "Diego");
    },
  },
  components: { StatementDisplayShort, ButtonPrimary },
});
</script>
