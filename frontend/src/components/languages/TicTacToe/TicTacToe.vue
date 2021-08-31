<template>
  <table>
    <tr v-for="(row, r) in grid" :key="row">
      <td v-for="(play, c) in row" :key="play" class="border text-center" :class="{'bg-blue-300': is_highlighted(r, c)}">
        <div v-if="play !== '.'" class="w-5 h-5">
          {{ play }}
        </div>
        <div v-else class="w-5 h-5"></div>
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TicTacToe",
  props: {
    grid: {
      type: Array,
      required: true,
      validator(value: Array<Array<string>>): boolean {
        if (value.length != 3) {
          return false;
        }
        for (let row of value) {
          if (row.length != 3) {
            return false;
          }
          for (let player of row) {
            if (!["X", "O", "."].includes(player)) {
              return false;
            }
          }
        }
        return true;
      },
    },
    highlight: {
      type: String,
      validator(value: string): boolean {
        return /^[/\\.]|[-|][123]$/.test(value);
      },
    },
  },
  methods: {
    is_highlighted(row: number, col: number): boolean {
      if (!this.highlight) {
        return false;
      }
      if (this.highlight === ".") {
        return true;
      }
      if (this.highlight === "\\") {
        return row == col;
      }
      if (this.highlight === "/") {
        return row + col == 2;
      }
      if (this.highlight[0] === "|") {
        return (col + 1).toString() === this.highlight[1];
      }
      if (this.highlight[0] === "-") {
        return (row + 1).toString() === this.highlight[1];
      }

      return true;
    },
  },
});
</script>
