<template>
  <div class="space-y-4">
    <p class="text-sm">
      Attempt to close the challenge with a claim of proof.
      If this attempt is the first to be validated, you receive the challenge bounty.
      <span v-if="parentClaim.height > 1">
        You may also submit a
        <button class="underline text-green-600" @click="machineLevel = !machineLevel; emitInput()">
          <span v-if="machineLevel">proof of height {{ parentClaim.height - 1 }}</span>
          <span v-else>machine-level proof</span>
        </button>.
      </span>
      <span v-else>
        You need to submit a machine-level proof as the parent claim has height one.
      </span>
    </p>
    <div>
      <ul class="grid grid-cols-4 w-full text-center">
        <li class="rounded-l-lg bg-yellow-100 p-2">
          <div class="text-yellow-700 text-xs font-semibold">Submit cost</div>
          <span v-if="machineLevel">-101$</span><span v-else>-100$</span>
        </li>
        <li class="bg-blue-100 p-2">
          <div class="text-blue-700 text-xs font-semibold">First Validated</div>
          +200$
        </li>
        <li class="bg-green-100 p-2">
          <div class="text-green-700 text-xs font-semibold">Validated</div>
          +100$
        </li>
        <li class="bg-red-100 rounded-r-lg p-2">
          <div class="text-red-700 text-xs font-semibold">Rejected</div>
          0$
        </li>
      </ul>
    </div>
    <div v-show="!machineLevel">
      <ul class="space-y-2">
        <li v-for="i in claimsNb" :key="i" class="group">
          <p class="text-xs font-semibold text-gray-800">Claim {{ i }}</p>
          <div class="border-l-2 pl-4 py-3 flex items-center">
            <ClaimInput @input="statements[i - 1] = $event; emitInput()"/>
            <button v-if="claimsNb > 1 && i === claimsNb" @click="removeLastClaim" class="text-gray-400 hover:text-red-400 pl-4"><TrashIcon class="h-5"/></button>
          </div>
        </li>
      </ul>
      <ButtonSecondary class="flex items-center mt-4" @click="addClaim">
        <PlusIcon class="h-4 pr-2"/>
        Add claim
      </ButtonSecondary>
    </div>
    <div v-show="machineLevel">
      <p class="text-xs font-semibold text-gray-800">Machine-level proof</p>
      <div class="border-l-2 pl-4 py-3">
        <MachineProofInput @input="machineProof = $event; emitInput()" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ButtonSecondary from "@/components/ButtonSecondary.vue";
import { PlusIcon, TrashIcon } from "@heroicons/vue/outline";
import { Claim } from "@/sprig";
import ClaimInput from "@/components/languages/TicTacToe/ClaimInput.vue";
import MachineProofInput from "@/components/languages/TicTacToe/MachineProofInput.vue";

export default defineComponent({
  name: "ProofInput",
  emits: ["input"],
  data() {
    return {
      claimsNb: 2,
      machineLevel: false,
      statements: [""],
      machineProof: "",
    };
  },
  props: {
    parentClaim: {
      type: Object as PropType<Claim>,
      required: true,
    },
  },
  methods: {
    addClaim() {
      this.claimsNb++;
      this.statements.push("");
    },
    removeLastClaim() {
      this.claimsNb--;
      this.statements.pop();
    },
    emitInput() {
      this.$emit("input", {
        machineLevel: this.machineLevel,
        statements: this.statements,
        machineProof: this.machineProof,
      });
    },
  },
  components: {
    MachineProofInput,
    ClaimInput,
    ButtonSecondary,
    PlusIcon,
    TrashIcon,
  },
});
</script>
