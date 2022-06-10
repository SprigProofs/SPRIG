<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Status, Challenge, ProofAttempt, Sprig, linkTo } from '../../sprig';
import AttemptEmbed from '../medium/AttemptEmbed.vue';
import Tooltip from './Tooltip.vue';
import ChallengeEmbed from '../medium/ChallengeEmbed.vue';
import InstanceEmbed from '../medium/InstanceEmbed.vue';


interface Props {
    object: ProofAttempt|Challenge|Sprig
    tooltip?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
    tooltip: true,
});

const link = linkTo(props.object);

const status = props.object instanceof Sprig
    ? props.object.rootAttempt().status
    : props.object.status;

const linkClasses = {
    [Status.CHALLENGED]: 'bg-yellow-50 border-yellow-300 hover:bg-yellow-200',
    [Status.UNCHALLENGED]: 'bg-blue-50 border-blue-200 hover:bg-blue-200',
    [Status.VALIDATED]: 'bg-green-50 border-green-200 hover:bg-green-200',
    [Status.REJECTED]: 'bg-red-50 border-red-200 hover:bg-red-200',
}

</script>

<template>
    <Tooltip v-if="tooltip === true" width="200">
        <template #reference>
            <RouterLink :to="link" class="text-gray-800 italic text-sm font-mono
                px-1 py-0.5 border-b transition
                rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 "
                :class="linkClasses[status]"
                >{{ object.uid()}}</RouterLink>
        </template>

        <AttemptEmbed v-if="tooltip && object instanceof ProofAttempt"
            :instance-hash="object.instanceHash"
            :hash="object.hash" />
        <ChallengeEmbed v-else-if="tooltip && object instanceof Challenge"
            :instance-hash="object.instanceHash"
            :challenge-hash="object.hash" />
        <InstanceEmbed v-else-if="tooltip && object instanceof Sprig"
            :hash="object.hash" />
    </Tooltip>

    <RouterLink v-else
        :to="link" class="text-gray-800 italic text-sm font-mono
        rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 "
        >{{ object.uid()}}</RouterLink>

</template>