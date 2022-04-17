<script setup>

defineProps({
    yes: {
        required: true,
        type: Number,
    },
    no: {
        required: true,
        type: Number,
    },
    maybe: {
        required: true,
        type: Number,
    },
})

</script>

<template>
    <span class="inline-flex space-x-2">
        <span class="text-green-500"><v-icon name="md-check-round"/>{{ yes }}</span>
        <span class="text-red-500"><v-icon name="md-clear-round"/>{{ no }}</span>
        <span class="text-blue-500"><v-icon name="md-questionmark-round" scale="0.8"/>{{ maybe }}</span>
        <span class="text-slate-500 -mr-2"><v-icon name="sigma"/>{{ yes * 1.0 + no * 1 + maybe * 1 }}</span>
    </span>
</template>
