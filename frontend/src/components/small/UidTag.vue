<script setup lang="ts">
import { Challenge, ProofAttempt, Sprig } from '../../sprig';

const props = defineProps<{
    object: ProofAttempt|Challenge|Sprig
}>()

const link = props.object instanceof Sprig
    ? '#'  // TODO add link to instance page
    : props.object instanceof ProofAttempt
        ? { name: 'proofAttempt', params: {hash: props.object.hash, instanceHash: props.object.instanceHash}}
        : '#' // TODO add link to challenge page

</script>

<template>
    <rounter-link :to="link"
        class="text-gray-500 italic text-sm font-mono">{{ object.uid()}}</rounter-link>
</template>