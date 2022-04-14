<script setup>

defineProps({
    amount: {
        required: true,
        type: Boolean,
    },
})

</script>

<template>
    <span>{{ amount }} <Algo/></span>
</template>
