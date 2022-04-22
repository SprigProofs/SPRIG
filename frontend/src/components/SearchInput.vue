<script setup>
import { reactive, ref } from 'vue';
import StatusTag from './StatusTag.vue';
import { api, claims, Status, STATUSES, NOW, decided } from '../sprig'
import ClaimMd from './ClaimMd.vue';
import { ElNotification } from 'element-plus';
import InstanceMd from './InstanceMd.vue';
import * as dayjs from 'dayjs';

const statuses = reactive({
    [Status.CHALLENGED]: true,
    [Status.UNCHALLENGED]: true,
    [Status.VALIDATED]: false,
    [Status.REJECTED]: false
});

const REWARD = "Reward";
const OPEN_UNTIL = "Open until";
const RELEVANCE = "Relevance";
const NEW = "New";
const sort_methods = reactive([NEW, REWARD, OPEN_UNTIL])
const types = ["Claims", "Proof Attempts", "Instances", "Users"];
const selectedType = ref("Instances")
const search = ref("")

const instances = ref({});
api.fetchInstanceList(l => {
    console.log(l)
    instances.value = l;
});

function startDrag(event, method) {
    event.dataTransfer.dropEffect = 'move';
    event.dataTransfer.setData("method", method);
    event.target.classList.add("opacity-70")
}

function endDrag(event, method) {
    event.target.classList.remove("opacity-70")
}

function dragEnter(event, method) {
    const dragged = event.dataTransfer.getData("method")
    if (method !== dragged) {
        if (sort_methods.indexOf(dragged) > sort_methods.indexOf(method)) {
            event.target.classList.add("border-t-4", "border-t-gray-600");
        } else {
            event.target.classList.add("border-b-4", "border-b-gray-600");
        }
    }
}
function dragExit(event, _) {
    event.target.classList.remove("border-t-4", "border-b-4")
}

function drop(event, droppedMethod) {
    event.target.classList.remove("border-t-4", "border-b-4")

    const draggedMethod = event.dataTransfer.getData("method");
    const idxDropped = sort_methods.indexOf(draggedMethod)
    const idxCurrent = sort_methods.indexOf(droppedMethod);
    
    // Remove the moved method
    sort_methods.splice(idxDropped, 1)
    sort_methods.splice(idxCurrent, 0, draggedMethod);
}

function sort_weight(claim) {
    const weights = {};
    // TODO: Put the real reward here
    weights[REWARD] = 10;
    weights[NEW] = NOW - claim.last_modification;
    weights[OPEN_UNTIL] = decided(claim.status) ? 9999 : claim.open_until - NOW
    weights[RELEVANCE] = 0

    var weight = 0;
    for (let i = 0; i < sort_methods.length; i++) {
        const method = sort_methods[i];
        weight += weights[method] * 0.3 ** i;
    }
    return weight;
}

function sort_weight_instance(instance) {
    const weights = {};
    weights[REWARD] = -instance.bounties;
    weights[NEW] = dayjs().diff(instance.root_claim.last_modification);
    // TODO: Set the correct value
    weights[OPEN_UNTIL] = 1
    weights[RELEVANCE] = 0


    var weight = 0;
    for (let i = 0; i < sort_methods.length; i++) {
        const method = sort_methods[i];
        weight += weights[method] * 0.3 ** i;
    }
    console.log(instance.hash, weights, weight)
    return weight;
}

function results() {
    switch (selectedType.value) {
        case "Claims":
            return claims
                .filter(claim => statuses[claim.status]
                    && claim.statement.toLowerCase().includes(search.value.toLowerCase()))
                .sort((a, b) => sort_weight(a) - sort_weight(b))
        
        case "Instances":
            return Object.keys(instances.value)
                .map(key => instances.value[key])
                .filter(instance => statuses[instance.root_claim.status])
                .sort((a, b) => sort_weight_instance(a) - sort_weight_instance(b))
            
        default:
            console.log(selectedType)
            return [];
    }
}

</script>

<template>
    <div class="max-w-5xl mx-auto p-8">
        <input type="text" 
            v-model="search"
            class="border rounded-sm w-full p-2 mb-6"
            placeholder="Search...">
        <div class="bg-gray-100 rounded-sm border
            p-4
            grid grid-cols-3">
            <section class="flex flex-col space-y-4">
                <h2 class="small-title">Filter claim status</h2>
                <label v-for="v, s in statuses" :key="s">
                    <input type="checkbox" :name="s" :id="s" v-model="statuses[s]"> 
                    <StatusTag :status="s" class="ml-2" :grayed="!statuses[s]" />
                </label>
            </section>
            <section class="flex flex-col space-y-2">
                <h2 class="small-title">Sort by</h2>
                <TransitionGroup tag="ol" class="flex flex-col items-start
                    list-inside list-decimal
                    ">
                    <li v-for="method in sort_methods" :key="method"
                        :draggable="true" @dragstart="startDrag($event, method)"
                        @drop="drop($event, method)"
                        @dragend="endDrag($event, method)"
                        @dragenter="dragEnter($event, method)"
                        @dragexit="dragExit($event, method)"
                        @dragover.prevent @dragenter.prevent
                        class="cursor-move select-none
                        hover:bg-gray-200 border-l-2 hover:border-l-gray-600 border-l-transparent border-y-gray-600
                        py-2 rounded-sm -ml-4 px-4 w-full transition-all
                        marker:text-gray-600">
                        {{ method }}</li>
                </TransitionGroup>
                <span class="text-xs text-gray-400">Tip: reorder to match your needs.</span>
            </section>
            <section class="flex flex-col space-y-2">
                <h2 class="small-title">Type</h2>
                <label v-for="(type) in types" :key="type">
                    <input type="radio" name="type" :value="type" v-model="selectedType"> 
                    {{ type }}
                </label>
            </section>
        </div>
        <h2 class="mt-4 py-4">
            {{ results().length }} Result{{ results().length != 1 ? 's' : ''}}
        </h2>
        <TransitionGroup tag="ol" class="space-y-6">
            <li v-for="result in results()" :key="result.hash"
                class="transition">
                <ClaimMd v-if="selectedType=='Claims'" :claim="result"></ClaimMd>
                <InstanceMd v-else-if="selectedType=='Instances'" :instance="result"></InstanceMd>
                <div v-else>{{ result }}</div>
            </li>
            <li key="nothing there! It just allows to have hover effect on the last item :shrug:"></li>
        </TransitionGroup>
    </div>
</template>
