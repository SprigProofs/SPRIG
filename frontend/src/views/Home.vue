<template>
  <SprigInstanceList />
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
