<template>
  <span :class="[color, 'space-x-1']">
    ️<CheckIcon
      v-if="status === Status.VALIDATED"
      class="inline h-5 text-green-500"
    />️<QuestionMarkCircleIcon
      v-if="status === Status.UNCHALLENGED"
      class="inline h-5 text-blue-500"
    />️<ExclamationIcon
      v-if="status === Status.CHALLENGED"
      class="inline h-5 text-yellow-500"
    />️<XIcon
      v-if="status === Status.REJECTED"
      class="inline h-6 text-red-500"
    />
    <span v-if="!only_icon">
      <span v-if="status === Status.VALIDATED">Validated</span>
      <span v-if="status === Status.UNCHALLENGED">Unchallenged</span>
      <span v-if="status === Status.CHALLENGED">Challenged</span>
      <span v-if="status === Status.REJECTED">Rejected</span>
    </span>
    <span v-if="count !== undefined" class="text-black">{{ count }}</span>
  </span>
</template>

<script lang="ts">
import { Status } from "@/sprig";
import {
  CheckIcon,
  QuestionMarkCircleIcon,
  ExclamationIcon,
  XIcon,
} from "@heroicons/vue/outline";

import { defineComponent } from "vue";

export default defineComponent({
  name: "StatusDisplay",
  props: {
    status: {
      type: String,
      required: true,
      validator(value) {
        return [
          Status.VALIDATED,
          Status.UNCHALLENGED,
          Status.CHALLENGED,
          Status.REJECTED,
        ].includes(value);
      },
    },
    only_icon: {
      type: Boolean,
      default: false,
    },
    count: Number,
  },
  data() {
    return { Status };
  },
  computed: {
    color(): string {
      let map: Record<string, string> = {
        validated: "text-green-500",
        rejected: "text-red-500",
        challenged: "text-yellow-500",
        unchallenged: "text-blue-500",
      };
      return map[this.status];
    },
  },
  components: { CheckIcon, QuestionMarkCircleIcon, ExclamationIcon, XIcon },
});
</script>
