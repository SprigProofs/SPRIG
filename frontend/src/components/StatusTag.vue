<script setup>

const statuses = {
    "Challenged": "bg-yellow-100 text-yellow-800",
    "Unchallenged": "bg-blue-100 text-blue-600",
    "Validated": "bg-green-100 text-green-600",
    "Rejected": "bg-red-100 text-red-600",
}
const greyClass = "bg-gray-200 text-gray-600"

defineProps({
    status: {
        required: true,
        validator(value) {
            // We cannot use the statuses variable because we cannot access variables defined in <script setup> here.
            // We'll change that when those are stored in some constants.js file.
            return ["Challenged", "Unchallenged", "Validated", "Rejected"].includes(value)
        },
    },
    grayed: Boolean
})

</script>

<template>
    <span :class="grayed ? greyClass: statuses[status]" 
        class="px-2 pt-2 pb-1 rounded-full 
            font-semibold text-xs">
        {{ status }}
    </span>
</template>
