<template>
    <p class="mb-2">The responses of X to each possible move of O are given in color and claimed to
        all be wining for {{ winner }}.
    </p>
    <ul class="flex flex-wrap -m-4">
        <li v-for="d in data" class="p-4">
            <TicTacToe class="w-28"
                :grid="d.board" :size="200" :color="d.colors" />
        </li>
    </ul>
</template>

<script setup lang="ts">

import { Sprig } from '../../../sprig';
import { getMove, getState } from './TicTacToe';
import TicTacToe from './TicTacToe.vue';

const props = defineProps<{
    instance: Sprig,
    attemptHash: string,
}>();

const attempt = props.instance.proofs[props.attemptHash];
const data = attempt.challenges.map(c => {
    const state = getState(c, props.instance);
    return {
        board: state.board,
        colors: getMove(c, props.instance).map(m => m + 1),
    };
});

const winner = getState(null, props.instance).wins;

</script>