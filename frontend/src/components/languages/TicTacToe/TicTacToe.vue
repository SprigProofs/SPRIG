<template>
  <canvas id="tictactoe" :width="size" :height="size"></canvas>
</template>

<script lang="ts">
import { defineComponent, watchEffect, PropType } from "vue";

export default defineComponent({
  name: "TicTacToe",
  props: {
    grid: {
      type: Array as PropType<string[][]>,
      default: () => ["...", "...", "..."],
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
        // either /, \, |X, -X, or the empty string
        return /^([/\\.]|([-|][123]))?$/.test(value);
      },
    },
    size: {
      type: Number,
      default: 100,
    },
  },
  methods: {
    caseCenter(x: number, y: number) {
      return [
        ((x + 0.5) * this.$el.width) / 3,
        ((y + 0.5) * this.$el.height) / 3,
      ];
    },
    redraw(): void {
      const ctx = this.$el.getContext("2d");
      if (!ctx) return;

      const w = this.$el.width,
        h = this.$el.height;

      // Draw the grid
      ctx.beginPath();
      ctx.strokeStyle = "#888";
      for (const i of [1, 2]) {
        ctx.moveTo((w * i) / 3, 0);
        ctx.lineTo((w * i) / 3, h);
        ctx.moveTo(0, (h * i) / 3);
        ctx.lineTo(w, (h * i) / 3);
      }
      ctx.stroke();
      ctx.strokeStyle = "black";

      // Draw Xs and Os
      for (const x of [0, 1, 2]) {
        for (const y of [0, 1, 2]) {
          const c = this.grid[y][x];
          const [center_x, center_y] = this.caseCenter(x, y);
          ctx.beginPath();
          ctx.lineWidth = 2;
          if (c == "O") {
            ctx.arc(center_x, center_y, Math.min(w, h) / 12, 0, Math.PI * 2);
          } else if (c == "X") {
            ctx.moveTo(center_x - w / 12, center_y - h / 12);
            ctx.lineTo(center_x + w / 12, center_y + h / 12);
            ctx.moveTo(center_x - w / 12, center_y + h / 12);
            ctx.lineTo(center_x + w / 12, center_y - h / 12);
          }
          ctx.stroke();
        }
      }

      // Draw win line
      if (!this.highlight) {
        return;
      }
      if (this.highlight === ".") {
        ctx.fillStyle = "#2d92ff";
        ctx.textAlign = "center";
        ctx.font = `bold ${h / 4}px  Nunito, sans-serif`;
        ctx.fillText("Draw", ...this.caseCenter(1, 1.25));
        ctx.stroke();
        return;
      }
      ctx.beginPath();
      ctx.strokeStyle = "red";
      ctx.lineCap = "round";
      ctx.lineWidth = 6;
      if (this.highlight === "\\") {
        ctx.moveTo(...this.caseCenter(0, 0));
        ctx.lineTo(...this.caseCenter(2, 2));
      } else if (this.highlight === "/") {
        ctx.moveTo(...this.caseCenter(2, 0));
        ctx.lineTo(...this.caseCenter(0, 2));
      } else if (this.highlight[0] === "|") {
        const column = parseInt(this.highlight[1]) - 1;
        ctx.moveTo(...this.caseCenter(column, 0));
        ctx.lineTo(...this.caseCenter(column, 2));
      } else if (this.highlight[0] === "-") {
        const row = parseInt(this.highlight[1]) - 1;
        ctx.moveTo(...this.caseCenter(0, row));
        ctx.lineTo(...this.caseCenter(2, row));
      }
      ctx.stroke();
    },
    // is_highlighted(row: number, col: number): boolean {
    //   if (!this.highlight) {
    //     return false;
    //   }
    //   if (this.highlight === ".") {
    //     return true;
    //   }
    //   if (this.highlight === "\\") {
    //     return row == col;
    //   }
    //   if (this.highlight === "/") {
    //     return row + col == 2;
    //   }
    //   if (this.highlight[0] === "|") {
    //     return (col + 1).toString() === this.highlight[1];
    //   }
    //   if (this.highlight[0] === "-") {
    //     return (row + 1).toString() === this.highlight[1];
    //   }
    //
    //   return true;
    // },
  },
  mounted() {
    // console.log(this.$el)
    // this.ctx = this.$el.getContext("2d");
    watchEffect(() => {
      this.redraw();
    });
  },
});
</script>
