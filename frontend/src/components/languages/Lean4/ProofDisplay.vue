<template>
    <article>
        <div v-for="block in blocks">
            <ChallengePart
                v-if="block.challenge"
                :instance="instance" :challenge="instance.challenges[attempt.challenges[block.challengeNb]]">
                <pre>{{ block.content }}</pre>
            </ChallengePart>
            <pre v-else>{{ block.content }}</pre>
        </div>
    </article>
</template>

<script setup lang="ts">
import dedent from 'dedent';

import { Sprig } from '../../../sprig';
import ChallengePart from '../../medium/ChallengePart.vue';
import { computed } from '@vue/reactivity';
import LabeledData from '../../small/LabeledData.vue';
import { getBlocks } from './Lean4'

const props = defineProps<{
    instance: Sprig,
    attemptHash: string,
}>();

const attempt = computed(() => props.instance.proofs[props.attemptHash]);
const blocks = computed(() => getBlocks(dedent(attempt.value.proof)));
</script>