<template>
  <div class="w-64 bg-green-50 rounded-lg shadow p-4 text-center flex flex-col space-y-4">
    <h2 class="text-xl font-bold">
      {{ instance.language }}
    </h2>
    <p>{{ instance.root_claim.statement }}</p>
    <div class="flex justify-center items-center">
      {{ instance.counts.validated }}
      ️<CheckIcon class="h-5 text-green-500 pr-1 -ml-1" />
      {{ instance.counts.unchallenged }}
      ️<QuestionMarkCircleIcon class="h-5 text-blue-500 pr-2" />
      {{ instance.counts.challenged }}
      ️<ExclamationIcon class="h-5 text-yellow-500 pr-2" />
      {{ instance.counts.rejected }}
      ️<XIcon class="h-6 text-red-500 -ml-1" />
    </div>
  </div>
  <p class="text-sm">
    {{ instance }}
  </p>
</template>

<script>
import { SprigSummary } from "@/sprig";
import {
  CheckIcon,
  XIcon,
  ExclamationIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/vue/outline";

export default {
  name: "SprigSummaryCard",
  props: {
    instance: SprigSummary,
  },
  components: { CheckIcon, XIcon, ExclamationIcon, QuestionMarkCircleIcon },
};
</script>
