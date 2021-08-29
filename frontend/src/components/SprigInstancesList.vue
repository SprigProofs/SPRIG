<template>
  <div class="hello">
    <h1></h1>
    <ul>
      <li v-for="sprig in instances" :key="sprig">
        <sprig-summary-card :instance="sprig"></sprig-summary-card>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {api, SprigSummary} from "@/sprig";
import SprigSummaryCard from "@/components/SprigSummaryCard.vue";

export default defineComponent({
  name: "SprigInstancesList",
  components: {SprigSummaryCard},
  props: {
    msg: String,
  },
  data(): {
    instances: SprigSummary[]
  } {
    return {
      instances: []
    }
  },
  methods: {},

  mounted() {
    api.fetchInstanceList(data => {
      this.instances = data
    })
  }

});
</script>
