<template>
  <div class="p-4 bg-green-400 flex justify-between shadow z-10">
    <router-link to="/" class="font-black">Sprig</router-link>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
  <router-view/>
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
