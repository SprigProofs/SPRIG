<script setup lang="ts">

defineProps({
    lang: {
        required: true,
        type: String,
    },
    grayed: {
        type: Boolean,
        default: false,
    },
})

</script>

<template>
    <el-tag :type="grayed ? 'info' : ''" effect="plain">{{ lang }}</el-tag>
</template>
