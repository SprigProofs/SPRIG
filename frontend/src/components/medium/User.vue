<!-- TODO: Replace user placeholder stats with real stats. -->

<script setup lang="ts">

import Tooltip from "../small/Tooltip.vue";
import UserEmbed from "./UserEmbed.vue";

const props = defineProps({
  name: {
    required: true,
    type: String,
  },
});

</script>

<template>
  <!-- <Tooltip :width="300">
    <UserEmbed :name="name" />
    <template #reference> -->
      <span class="underline decoration-dashed">{{ name }}</span>
    <!-- </template>
  </Tooltip> -->
</template>