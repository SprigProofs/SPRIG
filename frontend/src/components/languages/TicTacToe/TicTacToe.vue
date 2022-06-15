<template>
    <canvas ref="canvas" id="tictactoe" :width="size" :height="size"></canvas>
</template>

<script setup lang="ts">

import { nextTick, PropType, ref, watch, watchEffect } from 'vue';

const canvas = ref(null);

const props = defineProps({
    grid: {
        type: Array as PropType<string[]>,
        default: () => ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        validator(value: Array<string>): boolean {
            if (value.length != 9) {
                return false;
            }
            return (value.every(x => ["X", "O", "."].includes(x)))
        },
    },
    highlight: {
        type: String,
        validator(value: string): boolean {
            return /^[/\\.]|[-|][123]$/.test(value);
        },
    },
    size: {  // Size in pixels of the canvas
        type: Number,
        default: 200,
    },
    color: {  // 1-based selection of which cells to colorize
        type: Array as PropType<number[]>,
        default: () => [],
    }
});

function caseCenter(x: number, y: number) {
    return [
        ((x + 0.5) * canvas.value.width) / 3,
        ((y + 0.5) * canvas.value.height) / 3,
    ];
}

function redraw(): void {
    const ctx = canvas.value.getContext("2d");
    if (!ctx) return;

    const w = canvas.value.width,
        h = canvas.value.height;

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

    const get = (x: number, y: number) => props.grid[y * 3 + x];

    // Draw Xs and Os
    for (const x of [0, 1, 2]) {
        for (const y of [0, 1, 2]) {
            const c = get(x, y)
            const [centerX, centerY] = caseCenter(x, y);
            ctx.beginPath();
            ctx.lineWidth = 2;
            if (props.color.includes(3 * y + x + 1)) {
                ctx.save();
                ctx.strokeStyle = c == "O" ? "red" : "blue";
            }
            if (c == "O") {
                ctx.arc(centerX, centerY, Math.min(w, h) / 12, 0, Math.PI * 2);
            } else if (c == "X") {
                ctx.moveTo(centerX - w / 12, centerY - h / 12);
                ctx.lineTo(centerX + w / 12, centerY + h / 12);
                ctx.moveTo(centerX - w / 12, centerY + h / 12);
                ctx.lineTo(centerX + w / 12, centerY - h / 12);
            }
            ctx.stroke();
            if (props.color.includes(3 * y + x + 1)) {
                ctx.restore();
            }
        }
    }

    // Draw win line
    if (!props.highlight) {
        return;
    }
    if (props.highlight === ".") {
        ctx.fillStyle = "#2d92ff";
        ctx.textAlign = "center";
        ctx.font = `bold ${h / 4}px  Nunito, sans-serif`;
        ctx.fillText("Draw", ...caseCenter(1, 1.25));
        ctx.stroke();
        return;
    }
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineCap = "round";
    ctx.lineWidth = 6;
    if (props.highlight === "\\") {
        ctx.moveTo(...caseCenter(0, 0));
        ctx.lineTo(...caseCenter(2, 2));
    } else if (props.highlight === "/") {
        ctx.moveTo(...caseCenter(2, 0));
        ctx.lineTo(...caseCenter(0, 2));
    } else if (props.highlight[0] === "|") {
        const column = parseInt(props.highlight[1]) - 1;
        ctx.moveTo(...caseCenter(column, 0));
        ctx.lineTo(...caseCenter(column, 2));
    } else if (props.highlight[0] === "-") {
        const row = parseInt(props.highlight[1]) - 1;
        ctx.moveTo(...caseCenter(0, row));
        ctx.lineTo(...caseCenter(2, row));
    }
    ctx.stroke();
}

// function is_highlighted(row: number, col: number): boolean {
//   if (!props.highlight) {
//     return false;
//   }
//   if (props.highlight === ".") {
//     return true;
//   }
//   if (props.highlight === "\\") {
//     return row == col;
//   }
//   if (props.highlight === "/") {
//     return row + col == 2;
//   }
//   if (props.highlight[0] === "|") {
//     return (col + 1).toString() === props.highlight[1];
//   }
//   if (props.highlight[0] === "-") {
//     return (row + 1).toString() === props.highlight[1];
//   }
//
//   return true;
// },

nextTick(redraw);
watch(props, () => redraw());

</script>
