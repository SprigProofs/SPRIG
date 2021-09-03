<template>
  <div class="flex flex-wrap">
    <label v-for="win in ['|1', '|2', '|3', '-1', '-2', '-3', '/', '\\', '.']" :key="win" class="p-2">
      <input type="radio" name="win-pattern" class="peer" :value="win" v-model="statement" @change="$emit('input', statement)" />
      <TicTacToe :highlight="win" class="peer-checked:ring-4 ring-green-400 border rounded-lg transition" />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TicTacToe from "@/components/languages/TicTacToe/TicTacToe.vue";
export default defineComponent({
  name: "MachineProofInput",
  emits: ["input"],
  data() {
    return { statement: "" };
  },
  components: { TicTacToe },
});
</script>
