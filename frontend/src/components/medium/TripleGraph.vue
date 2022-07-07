<template>
  <div class="relative">
    <canvas ref="chart" />
  </div>
</template>

<script setup lang="ts">
import _, { attempt } from 'lodash';
import { Challenge, dayjs, ProofAttempt, Status } from '../../sprig';
import { onMounted, ref } from 'vue';
import { store } from '../../store';
import { Chart } from 'chart.js';

const props = defineProps<{
  data: ProofAttempt[] | Challenge[];
}>();

const chart = ref();

interface Data {
  time: dayjs.Dayjs,
  total: number,
  accepted: number,
  rejected: number,
  pending: number,
}
const attempts: Data[] = [];

const current = {
  time: dayjs(),
  total: 0,
  accepted: 0,
  rejected: 0,
  pending: 0,
};


const events = props.data.flatMap(a => {
  if (a.decided()) {
    const t = a instanceof Challenge
      ? a.openUntil
      : a.expires(store.instances[a.instanceHash]);
    return [{ t, status: a.status }];
  } else return [];
})
  .concat(props.data.map(a => ({ t: a.createdAt, status: Status.CHALLENGED })));

_.sortBy(events, e => e.t)
  .forEach(e => {
    current.time = e.t;
    if (e.status === Status.VALIDATED) {
      current.accepted++;
      current.pending--;
    } else if (e.status === Status.REJECTED) {
      current.rejected++;
      current.pending--;
    } else {
      current.pending++;
      current.total++;
    }
    if (attempts.length > 0 && current.time.diff(attempts[attempts.length - 1].time, 'minutes') < 1) {
      attempts[attempts.length - 1] = {...current};
    } else {
      attempts.push({ ...current });
    }
  });
attempts.push({
  ...current,
  time: dayjs(),
});
attempts.splice(0, 0, {
  accepted: 0,
  rejected: 0,
  pending: 0,
  total: 0,
  time: attempts[0].time.subtract(1, 'day'),
})

const type = props.data[0] instanceof Challenge ? 'challenges' : 'proofs';

onMounted(() => {
  const times = _.map(attempts, a => a.time.toString());
  new Chart(chart.value, {
    type: 'line',
    data: {
      labels: times,
      datasets: [
        {
          label: 'Rejected ' + type,
          data: _.map(attempts, a => a.rejected),
          borderColor: '#E11D48',
          backgroundColor: '#FFE4E640',
          fill: true,
          stepped: true,
        },
        {
          label: 'Successful ' + type,
          data: _.map(attempts, a => a.accepted),
          borderColor: '#16A34A',
          backgroundColor: '#DCFCE740',
          fill: '-1',  // Area above rejected
          stepped: true,
        },
        {
          label: 'Undecided ' + type,
          data: _.map(attempts, a => a.pending),
          borderWidth: 1,
          fill: '-1',
          borderColor: '#a0a0a0',
          backgroundColor: '#e5e5e540',
          stepped: true,
        },
      ]
    },
    options: {
      elements: {
        point: {
          radius: 0,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        axis: 'x',
        intersect: false,
      },
      plugins: {
        tooltip: {
          position: 'nearest',
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || '';

              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                const data = attempts[context.dataIndex];
                const name = ['rejected', 'accepted', 'pending'][context.datasetIndex];
                label += data[name];
                label += ' (' + Math.round(data[name] / data.total * 100) + '%)';
              }
              return label;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          stacked: true,
        },
        x: {
          type: 'time',
          time: {
            minUnit: 'day',
          }
        }
      }
    }
  });
});


</script>