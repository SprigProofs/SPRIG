<script setup lang="ts">

import { Sprig, ProofAttempt, Challenge } from '../../../sprig';
import { getChallenges } from './Lean4';
import dedent from "dedent";

const props = defineProps<{
    instance: Sprig,
    challengeHash: string | null;
}>();

const challenge = props.instance.challenges[props.challengeHash];

let text: string;
if (props.challengeHash === null) {
    text = getChallenges(props.instance.rootQuestion)[0].content;
} else {
    const proofAttempt = props.instance.proofs[challenge.parent];
    const challengeNb = proofAttempt.challenges.indexOf(challenge.hash);
    text = getChallenges(proofAttempt.proof)[challengeNb].content;
}

</script>

<template>
    <pre>{{ dedent(text) }}</pre>
</template>