<script setup lang="ts">
import { ProofAttempt, Sprig } from '../../../sprig';
import ActionBase from './ActionBase.vue';


const props = defineProps<{
    action: any,
    attempt: ProofAttempt,
    instance: Sprig,
}>()

const params = props.instance.params;

</script>

<template>
    <ActionBase title="ok">

    </ActionBase>
    <User name="cozyfractal"/> posted this proof attempt with a bounty of <Price amount="100"/>
    <div class="bg-slate-100 p-4 mt-2 rounded-md flex flex-col shadow-sm">
        <h3 class="font-semibold">Doubtful ? Challenge a claim.</h3>
        <ul class="list-disc list-inside">
            <li>Lock a bounty of <Price :amount="params.question_bounties[attempt.height]"/> </li>
            <li>For 10 days, proof attempts can be submitted for <price :amount="params.upstakes[attempt.height-1] + params.downstakes[attempt.height-1]"/> </li>
            <li>The first accepted proof attempt is rewarded with your bounty of <Price :amount="params.question_bounties[attempt.height]"/> </li>
            <li>If all proof attempts are rejected, you get your locked bounty back,
                If your challenge is the first to invalidate <User name="cozyfractal" />'s proof, you get their <Price :amount="params.downstakes[attempt.height]" /> bounty. </li>
        </ul>
        <button class="bg-white rounded-md px-2 py-1 mt-3 self-end shadow">
            Start a challenge
        </button>
    </div>

</template>