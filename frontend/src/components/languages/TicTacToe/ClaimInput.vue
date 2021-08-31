<template>
  <input
    aria-label="TicTacToe pattern"
    type="text"
    v-model="statement"
    class="border-b"
    placeholder="...|XO.|O.X"
    pattern="[.XO]{3}\|[.XO]{3}\|[.XO]{3}"
    @input="$emit('input', statement)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ClaimInput",
  emits: ["input"],
  data() {
    return {
      statement: "",
    };
  },
});
</script>
