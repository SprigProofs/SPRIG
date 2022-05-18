<script setup lang="ts">

import SimpleStats from "./SimpleStats.vue";
import Tooltip from "../small/Tooltip.vue";
import { store } from "../../store";

const props = defineProps({
  name: {
    required: true,
    type: String,
  },
});

const money = store.bank[props.name];

</script>

<template>
    <div class="flex flex-col">
      <div class="flex justify-between w-full mb-2 items-baseline">
        <h3 class="small-title pb-2">@{{ name }}</h3>
        <Price :amount="money" class="font-bold bg-blue-200 px-3 py-1 rounded-md" />
      </div>
      <p>Proof attempts
        <SimpleStats :yes="7" :no="4" :maybe="5" />
      </p>
      <p>Challenges
        <SimpleStats :yes="2" :no="6" :maybe="1" />
      </p>

      <button class="underline self-end pt-4">View full user profile</button>
    </div>

</template>