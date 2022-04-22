<script setup>

import { Status, STATUSES, STATUS_DISPLAY_NAME } from '../sprig';

const statuses = {
    [Status.CHALLENGED]: "bg-yellow-100 text-yellow-800",
    [Status.UNCHALLENGED]: "bg-blue-100 text-blue-600",
    [Status.VALIDATED]: "bg-green-100 text-green-600",
    [Status.REJECTED]: "bg-red-100 text-red-600",
}
const greyClass = "bg-gray-200 text-gray-600"

const icon = {
    [Status.CHALLENGED]: "md-questionmark-round",
    [Status.UNCHALLENGED]: "md-priorityhigh-round",
    [Status.VALIDATED]: "md-check-round",
    [Status.REJECTED]: "md-close-round",
}

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
    <v-icon 
        :class="grayed ? greyClass: statuses[status]" 
        class="rounded-full p-0.5"
        scale="1.2"
        :name="icon[status]"/>
</template>
