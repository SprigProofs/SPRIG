<script setup lang="ts">

import { Duration } from 'dayjs/esm/plugin/duration';

const props = defineProps<{
  duration: Duration,
}>()

const title = Math.floor(props.duration.asDays()) + " days " + props.duration.format("H [hours] m [mins] s[s] SSS[ms]");
</script>

<template>
  <span :title="title">{{ duration.humanize() }}</span>
</template>