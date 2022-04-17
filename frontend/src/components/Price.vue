<script setup>

defineProps({
    amount: {
        required: true,
        type: Number,
    },
})

</script>

<template>
    <el-popover placement="top">
        Currently {{ (amount * 0.68).toFixed(2) }}$

        <template #reference>
            <span>{{ amount }}&nbsp;<Algo/></span>
        </template>
    </el-popover>
</template>
