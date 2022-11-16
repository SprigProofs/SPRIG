<script setup lang="ts">

import type dayjs from 'dayjs/esm';

interface Props {
  time: dayjs.Dayjs,
  suffix?: boolean,
  notRelative?: boolean,
}
const props = withDefaults(defineProps<Props>(), {
  suffix: false,
  notRelative: false,
});

const text = props.notRelative
  ? props.time.calendar(null, {
    sameDay: '[Today at] H:MM', // The same day ( Today at 2:30 AM )
    nextDay: '[Tomorrow at] H:MM', // The next day ( Tomorrow at 2:30 AM )
    nextWeek: 'dddd [at] H:MM', // The next week ( Sunday at 2:30 AM )
    lastDay: '[Yesterday at] H:MM', // The day before ( Yesterday at 2:30 AM )
    lastWeek: '[Last] dddd [at] H:MM', // Last week ( Last Monday at 2:30 AM )
    sameElse: props.suffix ? 'DD/MM/YYYY' : '[the] Do MMM YYYY' // Everything else ( 17/10/2011 )
  })
  : props.time.fromNow(!props.suffix);
</script>

<template>
  <span :title="time.toString()">{{ text }}</span>
</template>