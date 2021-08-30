<template>
  <button
          class="
          border-2 rounded-lg px-4 py-2 text-gray-700
          bg-white
          hover:text-green-500 focus:text-green-500
          hover:border-green-500 focus:border-green-500
          transition
            "><slot></slot></button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ButtonSecondary",
})
</script>
