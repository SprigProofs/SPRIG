<template>
  <ul class="p-4 flex flex-wrap">
    <li v-for="hashAndInstance in sortedInstances" :key="hashAndInstance[0]" class="m-2">
      <sprig-summary-card :instance="hashAndInstance[1]" :hash="hashAndInstance[0]"></sprig-summary-card>
    </li>
  </ul>
</template>

<script lang="ts">
import { api, SprigSummary } from "@/sprig";
import SprigSummaryCard from "@/components/SprigSummaryCard.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "SprigInstancesList",
  components: { SprigSummaryCard },
  props: {
    msg: String,
  },
  data(): {
    instances: { [key: string]: SprigSummary }
  } {
    return {
      instances: {},
    };
  },
  methods: {},
  computed: {
    sortedInstances() {
      return Array.from(Object.entries(this.instances)).sort();
    }
  },
  mounted() {
    api.fetchInstanceList((data) => {
      this.instances = data;
    });
  },
});
</script>
