<template>
    <article class="">
        <pre v-if="previousDefs.length > 0" class="whitespace-pre-wrap #overflow-x-scroll text-gray-500 mb-4">{{ previousDefs }}</pre>
        <div v-for="block in blocks"
            class="w-full">
            <ChallengePart
                v-if="block.challenge" :preview="preview"
                :instance="instance" :challenge="instance.challenges[attempt.challenges[block.challengeNb]]"
                class="mb-4">
                <pre class="whitespace-pre-wrap">{{ block.content }}</pre>
            </ChallengePart>
            <pre v-else class="whitespace-pre-wrap #overflow-x-scroll">{{ block.content }}</pre>
        </div>
    </article>
</template>

<script setup lang="ts">

import { type Sprig, dedent } from '../../../sprig';
import ChallengePart from '../../medium/ChallengePart.vue';
import { computed } from '@vue/reactivity';
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

const fullProof = computed(() => collectPreviousDefs(props.instance, attempt.value.parent) + attempt.value.proof);

</script>