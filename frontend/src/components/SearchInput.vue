<script setup>
import { reactive } from 'vue';
import StatusTag from './StatusTag.vue';
import { Status, STATUSES, NOW, decided } from '../sprig'
import ClaimMd from './ClaimMd.vue';

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
const types = reactive({
    "Claims": true,
    "Proof attempts": false,
})

const claims = [
    {
        hash: "aaaaaa",
        statement: "theorem infinitude_of_primes: set.infinite { p | nat.prime p } := [big proof]",
        status: Status.CHALLENGED,
        parent: "a884ff2",
        last_modification: 12,
        open_until: 20
    }, {
        hash: "bbbbbb",
        statement: "theorem infinitude_of_primes : set.infinite { p | nat.prime p } := [big proof]",
        status: Status.UNCHALLENGED,
        parent: "a884ff2",
        last_modification: 11,
        open_until: 18
    }, {
        hash: "cccccc",
        statement: "theorem infinitude_of_primes : set.infinite { p | nat.prime p } := [big proof]",
        status: Status.VALIDATED,
        parent: "a884ff2",
        last_modification: 9,
        open_until: 22
    }, {
        hash: "dddddd",
        statement: "theorem infinitude_of_primes : set.infinite { p | nat.prime p } := [big proof]",
        status: Status.REJECTED,
        parent: "a884ff2",
        last_modification: 7,
        open_until: 14
    }
]

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

function results() {
    return claims
        .filter(claim => types["Claims"] && statuses[claim.status])
        .sort((a, b) => sort_weight(a) - sort_weight(b))
}

</script>

<template>
    <div class="w-full p-6">
        <input type="text" class="border rounded-sm 
            w-full
            p-2 mb-6" placeholder="Search...">
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
                <label v-for="(v, type) in types" :key="type">
                    <input type="checkbox" :name="type" :id="type" v-model="types[type]"> 
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
                <ClaimMd :claim="result"></ClaimMd>
            </li>
        </TransitionGroup>
    </div>
</template>
