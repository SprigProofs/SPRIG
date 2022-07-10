<script setup lang="ts">

import { Sprig, ProofAttempt, Challenge, dedent } from '../../../sprig';
import { getChallenges } from './Lean4';

const props = defineProps<{
    instance: Sprig,
    challengeHash: string | null;
}>();

let text: string;
if (props.challengeHash === null) {
    text = getChallenges(props.instance.rootQuestion)[0].content;
} else {
    const challenge = props.instance.challenges[props.challengeHash];
    const proofAttempt = props.instance.proofs[challenge.parent];
    const challengeNb = proofAttempt.challenges.indexOf(challenge.hash);
    text = getChallenges(proofAttempt.proof)[challengeNb].content;
}

</script>

<template>
    <pre class="whitespace-pre-wrap">{{ dedent(text) }}</pre>
</template>