<template>
  
  <div class="w-full border rounded-sm shadow-sm hover:shadow-md group flex">
      <!-- First part of the card -->
      <div class="p-4 flex flex-col flex-grow">
        <!-- First row -->
        <div class="flex flex-row justify-between ">
            <!-- Top left -->
            <div class="space-x-2">
                <StatusTag class="" :status="claim.status" />
                <span class="text-gray-500 italic text-sm font-mono">#{{ claim.hash }}</span>
            </div>
        </div>            <div v-if="false" class="leading-none flex items-center">
                <span v-if="!decided(claim.status)"
                    class="text-gray-600 pr-4">
                    <v-icon name="md-keyboarddoublearrowup"/>
                    24 <v-icon name="ci-algo"/>
                </span>
                <span v-if="!decided(claim.status)"
                    class="text-gray-900 ">
                    <v-icon name="md-keyboarddoublearrowdown"/>
                    57.3 <v-icon name="ci-algo"/>
                </span>
                <!-- <div class="text-gray-600 text-sm inline-block">
                    <v-icon name="md-modeedit"/>
                    by cozyfractal {{ 2 }} days ago
                </div> -->
            </div>
        <h3 class="text-lg pt-2  ">
            <span class="small-title break-all">{{ claim.title() }}</span>
            <span class="text-sm text-gray-700"> by cozyfractal</span>
            </h3> 
        <code class="text-sm flex-grow">
          <pre class="whitespace-pre-wrap">{{ claim.shortStatement() }}</pre>
        </code>
      </div>
      <!-- Right of the card -->
      <div 
        v-if="!decided(claim.status)"
        class="w-48  p-4 flex-shrink-0
          flex flex-col space-y-2 items-end">
        <div class="text-black font-semibold rounded-sm">
          Bounty <Price amount="120"/>
        </div>
        <div class="text-xs text-slate-700 flex-grow">
          {{ humanize(claim.open_until, false) }} left
        </div>
        <button v-if="claim.status == Status.UNCHALLENGED" class="border bg-blue-100 rounded-md py-2 self-stretch shadow">
          Challenge for <Price amount="12"/>
        </button>
        <button v-else class="border bg-blue-100 rounded-md py-2 w-full shadow">
          Add proof for <Price amount="12"/>
        </button>
      </div>
  </div>
  
</template>

<script setup>
    import { reactive, ref } from 'vue';
    import { NOW, decided, Status, humanize} from '../sprig';
    import StatusTag from './StatusTag.vue';
    import Price from './Price.vue';

    const hint = ref("hellooo")

    const props = defineProps({
        claim: {
            type: Object,
            required: true,
        },
    })

    function setHint(kind) {
        this.hint = kind;
    }

</script>