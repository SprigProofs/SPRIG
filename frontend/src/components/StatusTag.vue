<script setup lang="ts">

import { Status, STATUSES, STATUS_DISPLAY_NAME } from '../sprig';

const statuses = {
    [Status.CHALLENGED]: "bg-amber-100 text-amber-600 border-amber-200",
    [Status.UNCHALLENGED]: "bg-blue-100 text-blue-600 border-blue-200",
    [Status.VALIDATED]: "bg-green-100 text-green-600 border-green-300",
    [Status.REJECTED]: "bg-rose-100 text-rose-600 border-rose-200",
}
const statusType = {
    [Status.CHALLENGED]: "warning",
    [Status.UNCHALLENGED]: "",
    [Status.VALIDATED]: "success",
    [Status.REJECTED]: "danger",
}

const greyClass = "bg-gray-200 text-gray-600 border-gray-300"

defineProps({
    status: {
        required: true,
        type: String,
        validator(value: string) {
            return (STATUSES as string[]).includes(value)
        },
    },
    grayed: Boolean
})

</script>

<template>
    <!-- <el-tag :type="grayed ? 'info' : statusType[status]" 
        class="font-semibold transition">{{ STATUS_DISPLAY_NAME[status] }}</el-tag> -->
    <span :class="grayed ? greyClass: statuses[status]" 
        class="inline-flex px-2 h-6 items-center rounded 
            border  
            font-semibold text-xs transition">
        {{ STATUS_DISPLAY_NAME[status] }}
    </span>
</template>
