<template>
  <div class="p-4">
    <ul>
      <li v-for="(sprig, hash) in instances" :key="sprig">
        <sprig-summary-card :instance="sprig" :hash="hash"></sprig-summary-card>
      </li>
    </ul>
  </div>
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
    instances: Record<string, SprigSummary>;
  } {
    return {
      instances: {},
    };
  },
  methods: {},

  mounted() {
    api.fetchInstanceList((data) => {
      this.instances = data;
    });
  },
});
</script>
