<template>
  <div :class="[color,  bg_color]"
        class="
        inline-flex items-center
        text-sm font-semibold space-x-1 rounded-full py-1 pr-3 pl-1.5">
    ️<CheckIcon
      v-if="status === Status.VALIDATED"
      class="inline h-5"
    />️<QuestionMarkCircleIcon
      v-if="status === Status.UNCHALLENGED"
      class="inline h-5"
    />️<ExclamationIcon
      v-if="status === Status.CHALLENGED"
      class="inline h-5"
    />️<XIcon
      v-if="status === Status.REJECTED"
      class="inline h-6"
    />
    <span v-if="!only_icon">{{ status[0].toUpperCase() + status.slice(1) }}</span>
    <span v-if="count !== undefined" class="text-gray-700">{{ count }}</span>
  </div>
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
    gray: {
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
      if (this.gray) {
        return "text-gray-500";
      }

      let map: Record<string, string> = {
        validated: "text-green-700",
        rejected: "text-red-700",
        challenged: "text-yellow-700",
        unchallenged: "text-blue-700",
      };
      return map[this.status];
    },
    bg_color(): string {
      if (this.gray) {
        return "text-gray-500";
      }

      let map: Record<string, string> = {
        validated: "bg-green-200",
        rejected: "bg-red-200",
        challenged: "bg-yellow-200",
        unchallenged: "bg-blue-200",
      };
      return map[this.status];
    }
  },
  components: { CheckIcon, QuestionMarkCircleIcon, ExclamationIcon, XIcon },
});
</script>
