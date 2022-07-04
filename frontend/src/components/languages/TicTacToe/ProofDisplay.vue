<template>
    <div v-if="attempt.height > 0">
        <p class="mb-2">The responses of X to each possible move of O are given in color and claimed to
            all be wining for {{ winner }}.
        </p>
        <ul class="space-y-4">
            <li v-for="d in data">
                <ChallengePart :instance="instance" :challenge="d.challenge">
                    <div class="flex  space-x-4">
                        <TicTacToe class="w-28" :grid="d.board" :size="200" :color="d.colors" />
                        <div class="flex flex-col justify-around">
                            <LabeledData label="Winner">
                                {{ winner }}
                            </LabeledData>
                            <LabeledData label="Next player">{{ player }}</LabeledData>
                        </div>
                    </div>
                </ChallengePart>
            </li>
        </ul>
    </div>

    <!-- Machine level -->
    <div v-else>
        <TicTacToe :highlight="attempt.proof" :grid="getState(attempt.parent, instance).board"/>
    </div>
</template>

<script setup lang="ts">

import { Sprig } from '../../../sprig';
import { getMove, getState } from './TicTacToe';
import TicTacToe from './TicTacToe.vue';
import ChallengePart from '../../medium/ChallengePart.vue';
import { computed } from '@vue/reactivity';
import LabeledData from '../../small/LabeledData.vue';

const props = defineProps<{
    instance: Sprig,
    attemptHash: string,
}>();

const attempt = computed(() => props.instance.proofs[props.attemptHash]);
const data = computed(() => attempt.value.challenges.map(c => {
    const state = getState(c, props.instance);
    return {
        board: state.board,
        colors: getMove(c, props.instance).map(m => m + 1),
        challenge: props.instance.challenges[c]
    };
}));

const winner = computed(() => getState(null, props.instance).wins);
const player = computed(() => getState(null, props.instance).plays);

</script>