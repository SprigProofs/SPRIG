<template>
    <Embed404 v-if="!!!instance"/>
    <div v-else>
        <div class="max-w-7xl mx-auto">
            <header class="p-8 pb-2">

                <div class="flex mb-2">
                    <StatusTag :status="attempt.status" />
                    <!-- <LanguageTag :lang="instance.language" class="ml-2" /> -->
                    <div class="ml-4 font-bold ">
                        Bounty
                        <Price :amount="attempt.possibleReward(params)" />
                    </div>
                </div>

                <!-- <h1 class="text-3xl font-bold font-title py-2">
                    {{ lang.title(attempt, instance) }}
                </h1> -->
                <h1 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                {{ lang.title(attempt, instance) }}
                </h1>

                <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                <div class="mt-2 flex items-center text-sm text-gray-500">
                    <v-icon name="md-person-round" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <User :name="attempt.author" />
                </div>
                <div class="mt-2 flex items-center text-sm text-gray-500">
                    <v-icon name="fa-mountain" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span>{{ params.rootHeight }}</span>
                </div>
                <div class="mt-2 flex items-center text-sm text-gray-500">
                    <v-icon name="md-accesstime-round" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true" />
                    Created&nbsp;<Time :time="attempt.createdAt" suffix />
                </div>
                <div class="mt-2 flex items-center text-sm text-gray-500">
                    <v-icon name="md-lockclock" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    Closing&nbsp;<Time :time="attempt.expires(instance)" suffix />
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

                    <section class="flex flex-col flex-grow">
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

                        <component :is="lang.ProofDisplay" :instance="instance" :attemptHash="attempt.hash" />
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
import { store } from '../../store';
import { Price, StatusTag, Time } from "../small";
import User from '../medium/User.vue';
import Parameters from '../medium/Parameters.vue';
import Action from '../medium/Action.vue';
import { useRoute } from 'vue-router';
import Languages from '../languages';
import LanguageTag from '../small/LanguageTag.vue';
import { computed } from '@vue/reactivity';
import Embed404 from '../medium/Embed404.vue';
import { Sprig } from '../../sprig';

const props = defineProps({
    instanceHash: {
        type: String,
        required: true,
    },
});

const instance = computed(() => store.instances[props.instanceHash]);
const lang = computed(() => Languages[instance.value?.language]);
const attempt = computed(() => instance.value?.rootAttempt());
// const claim = instance.claims[props.hash];
const params = computed(() => instance.value?.params);

const showPreviousDefinitions = ref(false);

const actions = computed(() => instance.value?.allActions().map(action => {
    return {
        open: true,
        ...action,
    };
}));

</script>