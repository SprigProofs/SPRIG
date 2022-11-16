<script setup lang="ts">

import _ from 'lodash';
import SimpleStats from "./SimpleStats.vue";
import Tooltip from "../small/Tooltip.vue";
import { store } from "../../store";
import { computed, type ComputedRef, ref } from "@vue/reactivity";
import type { User } from '../../sprig';
import TripleGraph from './TripleGraph.vue';

const props = defineProps<{
  name: string,
}>();

const user: ComputedRef<User> = computed(() => store.getUser(props.name));

</script>

<template>
  <div class="flex flex-col">
    <div class="justify-between w-full mb-2 items-start">
      <h3 class="font-title font-extrabold text-2xl">{{ user.name }}</h3>
      <p class="text-sm text-gray-500">
        <span>Total gains </span>
        <Price :amount="user.balance" class="text-gray-700" />
      </p>
    </div>

    <div class="grid grid-cols-2 h-52">
      <TripleGraph :data="user.attempts" />
      <TripleGraph :data="user.challenges" />
    </div>
  </div>

</template>