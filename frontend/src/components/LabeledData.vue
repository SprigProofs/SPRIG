<script setup>

defineProps({
    label: {
        type: String,
        required: true,
    }
})

</script>

<template>
    <div>
        <div class="text-xs text-gray-600"
            >{{ label }}</div>
        <div class="text-xl font-bold tracking-tight"
            > <slot/> </div>
    </div>
</template>