<template>
  <div>
    <SprigInstanceList msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SprigInstanceList from "@/components/SprigInstancesList.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    SprigInstanceList,
  },
});
</script>