<template>
  <button
          class="font-semibold rounded-lg px-4 py-2 text-white bg-green-500
            hover:bg-green-400 focus:bg-green-400 focus:ring focus:ring-offset-2 focus:ring-green-500 focus:outline-none active:bg-green-500
            transition shadow-md"><slot></slot></button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ButtonPrimary",
});
</script>
