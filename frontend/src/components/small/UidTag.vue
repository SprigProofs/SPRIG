<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Challenge, ProofAttempt, Sprig, linkTo } from '../../sprig';
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


</script>

<template>
    <Tooltip v-if="tooltip === true" width="200">
        <template #reference>
            <RouterLink :to="link" class="text-gray-500 italic text-sm font-mono"
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
        :to="link" class="text-gray-500 italic text-sm font-mono"
        >{{ object.uid()}}</RouterLink>

</template>