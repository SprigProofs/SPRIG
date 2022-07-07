<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Status, Challenge, ProofAttempt, Sprig, linkTo } from '../../sprig';
import Tooltip from './Tooltip.vue';
import AttemptEmbed from '../medium/AttemptEmbed.vue';
import ChallengeEmbed from '../medium/ChallengeEmbed.vue';
import InstanceEmbed from '../medium/InstanceEmbed.vue';


interface Props {
    instance: Sprig;
    object?: ProofAttempt|Challenge;
    tooltip?: boolean;
    long?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    tooltip: true,
    long: false,
});

const link = linkTo(props.object || props.instance);
const linkText = props.long
    ? props.object?.uid() || props.instance.uid()
    : props.object?.hash || props.instance.uid();

const status = props.object?.status || props.instance.rootAttempt().status;

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
                >{{ linkText }}</RouterLink>
        </template>

        <AttemptEmbed v-if="tooltip && object instanceof ProofAttempt"
            :instance="instance"
            :hash="object.hash" />
        <ChallengeEmbed v-else-if="tooltip && object instanceof Challenge"
            :instance="instance"
            :hash="object.hash" />
        <InstanceEmbed v-else :instance="instance" />
    </Tooltip>

    <RouterLink v-else
        :to="link" class="text-gray-800 italic text-sm font-mono
        rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 "
        >{{ linkText }}</RouterLink>

</template>