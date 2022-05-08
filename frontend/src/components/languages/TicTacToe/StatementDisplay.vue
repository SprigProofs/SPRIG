<script setup lang="ts">

import { Sprig, ProofAttempt, Challenge } from '../../../sprig';
import TicTacToe from './TicTacToe.vue';
import { getState, getMove } from './TicTacToe';

const props = defineProps<{
    instance: Sprig,
    challengeHash: string;
}>();

const challenge = props.instance.challenges[props.challengeHash];

const state = getState(props.challengeHash, props.instance);
const colored = props.challengeHash
    ? getMove(props.challengeHash, props.instance).map(m => m+1)
    : [];

</script>

<template>
    <TicTacToe :grid="state.board" :size="200" :color="colored"
        class="w-28" />
</template>