<template>
  <div class="h-16 px-4 bg-green-400 flex items-center justify-between shadow z-50">
    <router-link to="/" class="font-black">Sprig</router-link>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
  <router-view style="height: calc(100vh - 4rem)" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { store } from "@/store";

export default defineComponent({
  name: "App",
  provide() {
    return { store };
  },
});
</script>
