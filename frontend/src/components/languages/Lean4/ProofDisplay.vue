<template>
    <article>
        <pre v-if="previousDefs.length > 0" class="whitespace-pre-wrap text-gray-500 mb-4">{{ previousDefs }}</pre>
        <div v-for="block in blocks">
            <ChallengePart
                v-if="block.challenge" :preview="preview"
                :instance="instance" :challenge="instance.challenges[attempt.challenges[block.challengeNb]]"
                class="mb-4">
                <pre class="whitespace-pre-wrap">{{ block.content }}</pre>
            </ChallengePart>
            <pre v-else class="whitespace-pre-wrap">{{ block.content }}</pre>
        </div>
    </article>
</template>

<script setup lang="ts">
import dedent from 'dedent';

import { Sprig } from '../../../sprig';
import ChallengePart from '../../medium/ChallengePart.vue';
import { computed } from '@vue/reactivity';
import LabeledData from '../../small/LabeledData.vue';
import { collectPreviousDefs, getBlocks } from './Lean4'

const props = withDefaults(defineProps<{
    instance: Sprig,
    attemptHash: string,
    preview?: boolean,
}>(), {
    preview: false,
});

const attempt = computed(() => props.instance.proofs[props.attemptHash]);
const blocks = computed(() => getBlocks(dedent(attempt.value.proof)));
const previousDefs = computed(() => dedent(collectPreviousDefs(props.instance, attempt.value.parent)).trim());

</script>