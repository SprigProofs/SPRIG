<template>
  {{ instance }}
  <h2>
    {{ instance.root_claim.statement}}
  </h2>
  <h3>By Diego</h3>
</template>

<script>
import {SprigSummary} from "@/sprig";

export default {
  name: "SprigSummaryCard",
  props: {
    instance: SprigSummary
  }
}
</script>
