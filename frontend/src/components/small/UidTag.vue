<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Challenge, ProofAttempt, Sprig, linkTo } from '../../sprig';
import AttemptEmbed from '../medium/AttemptEmbed.vue';
import Tooltip from './Tooltip.vue';


interface Props {
    object: ProofAttempt|Challenge|Sprig
    tooltip?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
    tooltip: true,
});

const link = linkTo(props.object);

const type = props.object instanceof Sprig ? 'sprig' : props.object instanceof ProofAttempt ? 'attempt' : 'challenge';

</script>

<template>
    <Tooltip v-if="tooltip === true" width="200">
        <template #reference>
            <RouterLink :to="link" class="text-gray-500 italic text-sm font-mono"
                >{{ object.uid()}}</RouterLink>
        </template>

        <AttemptEmbed v-if="tooltip && type === 'attempt'"
            :instance-hash="object.instanceHash"
            :hash="object.hash" ></AttemptEmbed>
    </Tooltip>
    <RouterLink v-else
        :to="link" class="text-gray-500 italic text-sm font-mono"
        >{{ object.uid()}}</RouterLink>

</template>