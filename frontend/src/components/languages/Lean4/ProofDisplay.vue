<template>
    <pre class="prose">{{ attempt.proof }}</pre>
    <!-- <ul class="space-y-4">
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
    </ul> -->
</template>

<script setup lang="ts">

import { Sprig } from '../../../sprig';
import ChallengePart from '../../medium/ChallengePart.vue';
import { computed } from '@vue/reactivity';
import LabeledData from '../../small/LabeledData.vue';

const props = defineProps<{
    instance: Sprig,
    attemptHash: string,
}>();

const attempt = computed(() => props.instance.proofs[props.attemptHash]);
</script>