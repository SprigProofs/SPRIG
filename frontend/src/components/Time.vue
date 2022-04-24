<script setup lang="ts">

import dayjs from 'dayjs';

defineProps({
  time: {
    required: true,
    type: dayjs.Dayjs,
  },
  suffix: {
    type: Boolean,
    default: true,
  },
});

</script>

<template>
  <span :title="time.toString()">{{ time.fromNow(!suffix) }}</span>
</template>