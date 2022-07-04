<script setup lang="ts">
import Tooltip from './Tooltip.vue';

// TODO: Replace conversion rate by live data
const ALGO_TO_USD = 0.67;

defineProps({
    amount: {
        required: true,
        // type: Number,
    },
})

</script>

<!-- <template>
    <Tooltip>
        Currently {{ (amount * ALGO_TO_USD).toFixed(2) }}$

        <template #reference>
            <span class="inline-block">{{ amount }}<Algo class="ml-0.5"></Algo></span>
        </template>
    </Tooltip>
</template> -->

<template>
    <span class="inline-block">{{ amount }}<Algo class="ml-0.5"></Algo></span>
</template>