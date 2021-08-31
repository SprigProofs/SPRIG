<template>
  <input
    aria-label="TicTacToe machine proof"
    type="text"
    v-model="statement"
    class="border-b"
    placeholder="...|XO.|O.X"
    pattern="[.\\/]|[-|][123]|"
    @input="$emit('input', statement)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MachineProofInput",
  emits: ["input"],
  data() {
    return {
      statement: "",
    };
  },
});
</script>
