<!-- TODO: Replace user placeholder stats with real stats. -->

<script setup lang="ts">

import { computed } from "@vue/reactivity";
import Tooltip from "../small/Tooltip.vue";
import UserEmbed from "./UserEmbed.vue";

const props = defineProps<{
  name: string
}>();

const shortName = computed(() => {
  return props.name.slice(0, 6) + ".." + props.name.slice(-4);
})

</script>

<template>
  <Tooltip>
      <template #reference>
          <span class="text-gray-700 font-mono">
          {{ shortName }}
          </span>
      </template>
      <span class="text-gray-700 font-mono">
      {{ name }} </span>
  </Tooltip>

  <!-- <Tooltip :width="300">
    <UserEmbed :name="name" />
    <template #reference> -->
      <!-- <span class="#underline decoration-dashed">{{ name }}</span> -->
    <!-- </template>
  </Tooltip> -->
</template>