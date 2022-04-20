<script setup>

// TODO: Replace conversion rate by live data
const ALGO_TO_USD = 0.67;

defineProps({
    amount: {
        required: true,
    },
})

</script>

<template>
    <el-popover placement="top">
        Currently {{ (amount * ALGO_TO_USD).toFixed(2) }}$

        <template #reference>
            <span>{{ amount }}<Algo class="ml-0.5"></Algo></span>
        </template>
    </el-popover>
</template>
