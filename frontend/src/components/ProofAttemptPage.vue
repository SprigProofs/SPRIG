



<template>
    <div class="max-w-7xl mx-auto">
        <header class="p-8 pb-2"> 

            <div class="flex">
                <StatusTag status="unchallenged" /> 
                <div class="ml-4 font-bold rounded-md">
                    Bounty <Price :amount="100"/>
                </div>
            </div>
            <h1 class="text-3xl font-bold font-title py-2">
                {{ claimTitle(claim) }}
            </h1>
            <div class="flex space-x-4">
                <div>
                    <v-icon name="md-person-round" class="mr-1"/> 
                    <User name="cozyfractal" />
                </div>
                <div>
                    <v-icon name="md-accesstime-round" class="mr-1"/> 
                    <span>{{ humanize(claim.last_modification) }}</span>
                </div>
                <div>
                    <v-icon name="md-lockclock" class="mr-1"/> 
                    <span>{{ humanize(claim.open_until) }}</span>
                </div>
                <div>
                    <v-icon name="fa-mountain" class="mr-1"/> 
                    <span>{{ claim.height }} / {{ params.root_height }}</span>
                </div>
            </div>

        </header>

        <div class="p-8 flex xl:flex-row-reverse flex-col">
            
            <section class="max-w-xl">
                <h2 class="small-title pb-2">Actions log</h2>
                <el-timeline>
                    <el-timeline-item timestamp="15.04.22 20:46" class="" > 
                        <User name="cozyfractal"/> posted this proof attempt with a bounty of <Price amount="100"/> 
                        <div class="bg-slate-100 p-4 mt-2 rounded-md flex flex-col shadow-sm">
                            <h3 class="font-semibold">Doubtful ? Challenge a claim.</h3>
                            <ul class="list-disc list-inside">
                                <li>Lock a bounty of <Price :amount="params.question_bounties[claim.height]"/> </li>
                                <li>For 10 days, proof attempts can be submitted for <price :amount="params.upstakes[claim.height-1] + params.downstakes[claim.height-1]"/> </li>
                                <li>The first accepted proof attempt is rewarded with your bounty of <Price :amount="params.question_bounties[claim.height]"/> </li>
                                <li>If all proof attempts are rejected, you get your locked bounty back, 
                                    If your challenge is the first to invalidate <User name="cozyfractal" />'s proof, you get their <Price :amount="params.downstakes[claim.height]" /> bounty. </li>
                            </ul>
                            <button class="bg-white rounded-md px-2 py-1 mt-3 self-end shadow">
                                Start a challenge
                            </button>
                        </div>
                    </el-timeline-item>
                    <el-timeline-item timestamp="14.04.22 16:24">
                        <User name="Michael" /> challenged the parent claim.
                    </el-timeline-item>
                </el-timeline>
            </section>

            <section class="flex flex-col flex-grow">
                <h2 class="small-title ">Proof attempt</h2>

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

                <code class="mt-2"><pre>example : p ∨ q ↔ q ∨ p :=
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

    <section>
        <el-collapse>
            <el-collapse-item title="Instance parameters">
                    <Parameters :params="params" :highlight="claim.height" />
            </el-collapse-item>
            <el-collapse-item title="Previous designs">
                <section>
                    <h2 class="small-title pb-2">Summary</h2>
                    <el-descriptions border class="mb-4">
                        <el-descriptions-item label="Downstakes"><Price amount="100"/></el-descriptions-item>
                        <el-descriptions-item label="Upstakes"><Price amount="5"/></el-descriptions-item>
                        <el-descriptions-item label="Challenge cost"><Price amount="37"/></el-descriptions-item>
                        <el-descriptions-item label="Depth">3 / 7</el-descriptions-item>
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


            </el-collapse-item>
            <el-collapse-item title="Raw data">
                <div class="text-sm text-gray-500">
                    {{ claim }}
                </div>
            </el-collapse-item>
        </el-collapse>
    </section>


</template>

<script setup>

import {claims, claimTitle, params, humanize} from './../sprig.ts';
import { MoreFilled, Plus } from '@element-plus/icons-vue'
import StatusTag from './StatusTag.vue';
import Algo from './Algo.vue';
import { ref } from 'vue';
import Price from './Price.vue';
import User from './User.vue';
import Parameters from './Parameters.vue';


const claim = claims[0];
const showPreviousDefinitions = ref(false);

</script>