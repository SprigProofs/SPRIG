<template>
  <div class="flex flex-col items-center">
    <TicTacToe :grid="grid" :highlight="highlight" />
    <p class="text-sm mt-1 -mb-1 text-gray-700">{{ statement.slice(12, 30) }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TicTacToe from "@/components/languages/TicTacToe/TicTacToe.vue";

export default defineComponent({
  name: "StatementDisplayShort",
  props: {
    statement: {
      type: String,
      required: true,
    },
  },
  computed: {
    grid() {
      // We assume the statement is well formed
      if (this.statement.length <= 2) {
        return ["...", "...", "..."];
      }
      return [
        this.statement.slice(0, 3),
        this.statement.slice(4, 7),
        this.statement.slice(8, 11),
      ];
    },
    highlight(): string {
      if (this.statement.length <= 2) { return this.statement; }
      return "";
    },
  },
  components: { TicTacToe },
});
</script>
