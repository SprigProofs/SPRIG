<script setup lang="ts">
import { reactive, ref } from 'vue';
import StatusTag from './StatusTag.vue';
import * as _ from 'lodash';
import { Status, decided, Sprig, Claim, ProofAttempt, Parameters } from '../sprig'
import { store } from '../store';
import ClaimEmbed from './ClaimEmbed.vue';
import { ElNotification } from 'element-plus';
import InstanceEmbed from './InstanceEmbed.vue';
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
const sort_methods = reactive([NEW, REWARD, OPEN_UNTIL]);
enum Types {
    CLAIM = "Claims",
    ATTEMPT = "Proof Attempts",
    INSTANCE = "Instances",
    USER = "Users",
}
const types = [Types.CLAIM, Types.ATTEMPT, Types.INSTANCE, Types.USER];
const selectedType = ref(Types.ATTEMPT);
const search = ref("")



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

function getWeights(o, type: Types) {
    const weights = {};
    const now = dayjs();
    const timeDiff = (d: dayjs.Dayjs) => now.diff(d, "hours", true);
    switch (type) {
        // TODO: Set all weights
        case Types.CLAIM:
            const claim: Claim = o;
            weights[REWARD] = -claim.possibleReward(store.instances[claim.instance_hash]);
            weights[NEW] = timeDiff(claim.last_modification);
            weights[OPEN_UNTIL] = decided(claim.status) 
                ? 999999999999
                : timeDiff(claim.open_until);
            weights[RELEVANCE] = -1
            break;

        case Types.ATTEMPT:
            const attempt: ProofAttempt = o;
            weights[REWARD] = -attempt.possibleReward(store.instances[attempt.instance_hash].params);
            weights[NEW] = timeDiff(attempt.time);
            weights[OPEN_UNTIL] = -1;
            weights[RELEVANCE] = -1
            break;

        case Types.INSTANCE:
            const instance: Sprig = o;
            weights[REWARD] = -instance.totalBounties();
            weights[NEW] = timeDiff(instance.rootClaim().last_modification);
            weights[OPEN_UNTIL] = -1
            weights[RELEVANCE] = -1
            break;
    
        default:
            break;
    }
    
    return weights;
}

/**
 * Weight of objects to sort. Smallest weight is first.
 */
function sort_weight(o, type: Types): number {

    const weights = getWeights(o, type);
    var weight = 0;
    for (let i = 0; i < sort_methods.length; i++) {
        const method = sort_methods[i];
        weight += weights[method] * 0.3 ** i;
    }
    return weight;
}

function results(): Record<string, any> {
    switch (selectedType.value) {
        case Types.CLAIM:
            // dict[instanceHash, list[claims]]
            const claimsByInstance = _.mapValues(store.instances, (i) => _.values(i.claims));
            const claims = _.flatten(_.values(claimsByInstance));
            const keyedClaims = _.fromPairs(claims.map(c => [c.hash + '/' + c.instance_hash, c]))

            return _.filter(keyedClaims, claim => statuses[claim.status]
                    && claim.statement.toLowerCase().includes(search.value.toLowerCase()))
                .sort((a, b) => sort_weight(a, Types.CLAIM) - sort_weight(b, Types.CLAIM))
        
        case Types.INSTANCE:
            return Object.keys(store.instances)
                .map(key => store.instances[key])
                .filter(instance => statuses[instance.rootClaim().status])
                .sort((a, b) => sort_weight(a, Types.INSTANCE) - sort_weight(b, Types.INSTANCE))
            
        case Types.ATTEMPT:
            const attempts = _.flatMap(
                _.values(store.instances),
                (i) => _.flatten(_.values(i.proof_attempts)));
            const keyedAttempts = _.fromPairs(attempts.map(a => [a.claim_hash + '/' + a.instance_hash, a]))

            return _.filter(keyedAttempts, attempt => statuses[attempt.status]
                    && store.instances[attempt.instance_hash].claims[attempt.claim_hash].statement.toLowerCase().includes(search.value.toLowerCase()))
                .sort((a, b) => sort_weight(a, Types.ATTEMPT) - sort_weight(b, Types.ATTEMPT))
            
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
            <li v-for="(result, key) in results()" :key="key"
                class="transition">
                <ClaimEmbed v-if="selectedType=='Claims'" :claim-hash="result.hash" :instance-hash="result.instance_hash"></ClaimEmbed>
                <InstanceEmbed v-else-if="selectedType=='Instances'" :hash="result.hash"></InstanceEmbed>
                <div v-else>{{ result }}</div>
                {{ getWeights(result, selectedType) }}
            </li>
            <li key="nothing there! It just allows to have hover effect on the last item :shrug:"></li>
        </TransitionGroup>
    </div>
</template>
