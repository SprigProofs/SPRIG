<template>
  <div class="flex border bg-gray-50 rounded-lg p-2 items-center justify-between">
    <StatementDisplayShort :statement="claim.statement" />
    <p v-if="claim.challenged_time !== null">
      Challenged at {{ claim.challenged_time }}
    </p>
    <ButtonPrimary v-if="claim.status === 'challenged'" @click="openProofModal">Submit proof</ButtonPrimary>
    <ButtonPrimary v-if="claim.status === 'unchallenged'" @click="challenge">Challenge</ButtonPrimary>
    <TailwindUIModal :open="proofModalOpen" title="New proof attempt" main-button="Submit" @closed="proofModalOpen = false" @submit="submitProof">
      <ProofInput :parent-claim="claim" @input="proof = $event" />
    </TailwindUIModal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Claim } from "@/sprig";
import { store } from "@/store";
import StatementDisplayShort from "@/components/languages/TicTacToe/StatementDisplayShort.vue";
import ButtonPrimary from "@/components/ButtonPrimary.vue";
import ProofInput from "@/components/ProofInput.vue";
import TailwindUIModal from "@/components/TailwindUIModal.vue";

export default defineComponent({
  name: "ClaimDisplay",
  emits: ["input"],
  data() {
    return {
      proofModalOpen: false,
      proof: { machineLevel: false, statements: [""], machineProof: "" },
    };
  },
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
    openProofModal(): void {
      this.proofModalOpen = true;
    },
    submitProof(): void {
      if (this.proof.machineLevel) {
        store.answerLowLevel(
          this.instance,
          this.hash,
          "Diego",
          this.proof.machineProof
        );
      } else {
        store.answer(this.instance, this.hash, "Diego", this.proof.statements);
      }
    },
  },
  components: {
    TailwindUIModal,
    ProofInput,
    StatementDisplayShort,
    ButtonPrimary,
  },
});
</script>
