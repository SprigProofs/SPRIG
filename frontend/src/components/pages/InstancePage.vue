<template>
    <Embed404 v-if="!instance"/>
    <div v-else>
        <div class="max-w-7xl mx-auto">
            <header class="p-8 pb-2">

                <div class="flex">
                    <StatusTag :status="attempt.status" />
                    <LanguageTag :lang="instance.language" class="ml-2" />
                    <div class="ml-4 font-bold rounded-md">
                        Bounty
                        <Price :amount="attempt.possibleReward(params)" />
                    </div>
                </div>
                <h1 class="text-3xl font-bold font-title py-2">
                    {{ language.describe(attempt, instance) }}
                </h1>
                <div class="flex space-x-4 text-gray-800">
                    <div>
                        <v-icon name="md-person-round" class="mr-1" />
                        <User :name="attempt.author" />
                    </div>
                    <div>
                        <v-icon name="md-accesstime-round" class="mr-1" />
                        <Time :time="attempt.createdAt" />
                    </div>
                    <div>
                        <v-icon name="md-lockclock" class="mr-1" />
                        <Time :time="attempt.createdAt" />
                    </div>
                    <div>
                        <v-icon name="fa-mountain" class="mr-1" />
                        <span>{{ attempt.height }} / {{ params.rootHeight }}</span>
                    </div>
                </div>

            </header>

            <div class="p-8 flex xl:flex-row-reverse xl:justify-between flex-col">

                <aside class="xl:w-[32rem]">
                    <h2 class="small-title pb-2">Actions log</h2>
                    <ol>
                        <li v-for="(action, idx) in actions">
                            <Action :action="action" :instance="instance" :last="idx === actions.length - 1" />
                        </li>
                    </ol>
                </aside>

                <div>
                    <section>
                        <h2 class="small-title pb-2">Parameters</h2>
                        <Parameters :params="params" :highlight="attempt.height" />
                    </section>

                    <section class="flex flex-col flex-grow max-w-prose">
                        <h2 class="small-title mb-2 mt-4">Proof attempt</h2>

                        <!-- <button
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
                </div> -->

                        <!-- <code class="mt-2"><pre class="overflow-auto">{{ attempt.proof }}</pre>
                </code> -->
                        <Language.TicTacToe.ProofDisplay :instance="instance" :attemptHash="attempt.hash" />
                    </section>

                </div>
            </div>
        </div>

        <section class="m-8">
            <el-collapse>
                <el-collapse-item title="Raw data">
                    <div class="text-sm text-gray-500">
                        <pre>{{ instance }}</pre>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </section>
    </div>
</template>

<script setup lang="ts">

import { reactive, ref, watch } from 'vue';
import { LANGUAGES } from '../../sprig';
import { store } from '../../store';
import { Price, StatusTag, Time } from "../small";
import User from '../medium/User.vue';
import Parameters from '../medium/Parameters.vue';
import Action from '../medium/Action.vue';
import { useRoute } from 'vue-router';
import * as Language from '../languages';
import LanguageTag from '../small/LanguageTag.vue';
import { computed } from '@vue/reactivity';
import Embed404 from '../medium/Embed404.vue';

const props = defineProps({
    instanceHash: {
        type: String,
        required: true,
    },
});

const instance = reactive(store.instances[props.instanceHash]);
const language = reactive(LANGUAGES[instance?.language]);
const attempt = reactive(instance?.rootAttempt());
// const claim = instance.claims[props.hash];
const params = reactive(instance?.params);

const showPreviousDefinitions = ref(false);

const actions = computed(() => instance?.allActions().map(action => {
    return {
        open: true,
        ...action,
    };
}));


const route = useRoute();
watch(
    () => route.params,
    () => { }
);
</script>