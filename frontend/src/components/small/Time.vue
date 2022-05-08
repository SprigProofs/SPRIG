<script setup lang="ts">

import dayjs from 'dayjs';

interface Props {
  time: dayjs.Dayjs,
  suffix?: boolean,
}
const props = withDefaults(defineProps<Props>(), {
  suffix: false
});
</script>

<template>
  <span :title="time.toString()">{{ time.fromNow(!suffix) }}</span>
</template>