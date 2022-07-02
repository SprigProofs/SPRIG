<script setup lang="ts">
import UserEmbed from '../medium/UserEmbed.vue';

defineProps<{
    user: string,
}>()

</script>

<template>
    <div class="p-8">
        <UserEmbed :name="user"/>
    </div>
</template>