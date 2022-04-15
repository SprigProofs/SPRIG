<script setup>

defineProps({
    amount: {
        required: true,
        type: Number,
    },
})

</script>

<template>
    <span>{{ amount }}&nbsp;<Algo/></span>
</template>
