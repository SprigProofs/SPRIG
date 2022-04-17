<template>
    <div class="min-h-screen">
        <header class="border-b pb-6 drop-shadow bg-slate-50
            p-8"> 
            <div class="text-3xl" @mouseenter="$notify({title: 'hello', message: 'yeah', type: 'warning'})">
                {{ claimTitle(claim) }}
            </div>

        </header>

        <div class="p-8 max-w-3xl mx-auto flex flex-col space-y-4">
            <section>
                <h2 class="small-title pb-2">Summary</h2>
                <el-descriptions 
                    border="true"
                    class="mb-4">
                    <el-descriptions-item label="Author">cozyfractal</el-descriptions-item>
                    <el-descriptions-item label="Status"> <StatusTag status="unchallenged" /> </el-descriptions-item>
                    <el-descriptions-item label="Open until">27.04.22 12:00</el-descriptions-item>
                    <el-descriptions-item label="Downstakes"><Price amount="100"/></el-descriptions-item>
                    <el-descriptions-item label="Upstakes"><Price amount="5"/></el-descriptions-item>
                    <el-descriptions-item label="Challenge cost"><Price amount="37"/></el-descriptions-item>
                    <el-descriptions-item label="Depth">3 / 7</el-descriptions-item>
                    <el-descriptions-item label="Nb. of subclaims">6</el-descriptions-item>
                    <el-descriptions-item label="Proof length">2193</el-descriptions-item>
                </el-descriptions>
            </section>

            <section>
                <h2 class="small-title pb-2">Past changes and possible actions</h2>
                <el-timeline>
                    <el-timeline-item type="success" timestamp="15.04.22 20:46"> <User name="cozyfractal"/> posted this proof attempt with a bounty of <Price amount="100"/> </el-timeline-item>
                    <el-timeline-item type="warning" hollow="true" timestamp="Until 27.04.22 12:00"> Doubtful ? Challenge a claim by locking <Price amount="100"/> </el-timeline-item>
                    <el-timeline-item timestamp="Up to 10 days after each challenge">Proof attempts can be submitted  for <Price amount="42"/> </el-timeline-item>
                    <el-timeline-item>If some proof attempt is accepted, the first is rewarded with your locked bounty of <Price amount="37"/></el-timeline-item>
                    <el-timeline-item class="last:b-0">If no proof attempt is valid, you get back your locked <Price amount="37" />. The first challenge to invalidate Cozyfractal's claim get the bounty of <Price amount="100"/></el-timeline-item>
                </el-timeline>
            </section>

            <section class="flex flex-col">
                <h2 class="small-title ">Partial proof</h2>

                <button
                    v-if="!showPreviousDefinitions"
                    class="self-center text-slate-600 text-sm hover:underline"
                    @click="showPreviousDefinitions = !showPreviousDefinitions">
                    <v-icon name="md-keyboarddoublearrowup"/>
                    Show previous definitions and lemmas
                    <v-icon name="md-keyboarddoublearrowup"/>
                </button>
                <div v-else class="flex flex-col items-center w-full">
                    <button
                        class="self-center text-slate-600 text-sm hover:underline"
                        @click="showPreviousDefinitions = !showPreviousDefinitions">
                        <v-icon name="md-keyboarddoublearrowdown"/>
                        Hide previous definitions and lemmas
                        <v-icon name="md-keyboarddoublearrowdown"/>
                    </button>
                    <code class="self-start">
                        <pre>okokok</pre>
                    </code>
                    <button
                        class="self-center text-slate-600 text-sm hover:underline"
                        @click="showPreviousDefinitions = !showPreviousDefinitions">
                        <v-icon name="md-keyboarddoublearrowup"/>
                        Hide previous definitions and lemmas
                        <v-icon name="md-keyboarddoublearrowup"/>
                    </button>
                </div>


                <code class="mt-4"><pre>example : p ∨ q ↔ q ∨ p :=
    iff.intro
    (assume h : p ∨ q,
    show q ∨ p, from 
    or.elim h
        (assume hp : p,
        show q ∨ p, from or.intro_right q hp)
        (assume hq : q,
        show q ∨ p, from or.intro_left p hq))
    (assume h : q ∨ p,
    show p ∨ q, from 
    or.elim h
        (assume hq : q,
        show p ∨ q, from or.intro_right p hq)
        (assume hp : p,
        show p ∨ q, from or.intro_left q hp))</pre>
                </code>
            </section>
        </div>
    </div>
    <div class="text-sm text-gray-500">
        {{ claim }}
    </div>
</template>

<script setup>

import {claims, claimTitle} from './../sprig.ts';
import { MoreFilled, Plus } from '@element-plus/icons-vue'
import StatusTag from './StatusTag.vue';
import Algo from './Algo.vue';
import { ref } from 'vue';
import Price from './Price.vue';
import User from './User.vue';


const claim = claims[0];
const showPreviousDefinitions = ref(false);

</script>