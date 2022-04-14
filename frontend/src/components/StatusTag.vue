<script setup>

import { Status, STATUSES, STATUS_DISPLAY_NAME } from '../sprig';

const statuses = {
    [Status.CHALLENGED]: "bg-yellow-100 text-yellow-800",
    [Status.UNCHALLENGED]: "bg-blue-100 text-blue-600",
    [Status.VALIDATED]: "bg-green-100 text-green-600",
    [Status.REJECTED]: "bg-red-100 text-red-600",
}
const greyClass = "bg-gray-200 text-gray-600"

defineProps({
    status: {
        required: true,
        validator(value) {
            return STATUSES.includes(value)
        },
    },
    grayed: Boolean
})

</script>

<template>
    <span :class="grayed ? greyClass: statuses[status]" 
        class="px-2 pt-[0.3rem] pb-1 rounded-md
            font-semibold text-xs transition">
        {{ STATUS_DISPLAY_NAME[status] }}
    </span>
</template>
