<template>
  <div class="w-full border rounded-sm shadow-sm hover:shadow-md group flex">
      <!-- First part of the card -->
      <div class="p-4 flex flex-col flex-grow">
        <!-- First row -->
        <div class="flex flex-row justify-between ">
            <!-- Top left -->
            <div class="space-x-2">
                <StatusTag class="" :status="instance.root_claim.status" />
                <el-tag>{{ instance.language }}</el-tag>
                <span class="text-gray-500 italic text-sm font-mono">#{{ instance.hash }}</span>
            </div>
        </div>
        <h3 class="text-lg pt-2  ">
            <span class="small-title break-all">{{ claim.statement }}</span>
            <span class="text-sm text-gray-700"> by <User :name="instance.author"/></span>
            </h3> 
        <code class="text-sm flex-grow">
          <pre class="whitespace-pre-wrap">{{ claim.shortStatement() }}</pre>
        </code>
        
        <ul class="grid grid-cols-4 gap-4 pt-4 max-w-md"
          >
            <li class="bg-slate-100 rounded p-2 flex flex-col items-center space-y-2"
              v-for="(count, status) in instance.counts"
              :key="status"
              >
              <div class="text-xs text-gray-500 capitalize">{{ status }}</div>
              <div class="flex items-center font-semibold">
                <StatusIcon :status="status" class="mr-2" />
                <div>{{ count }}</div>
              </div>
            </li>
          </ul>
      
        
      </div>
      <!-- Right of the card -->
      <div 
        v-if="!decided(claim.status)"
        class="w-48  p-4 flex-shrink-0
          flex flex-col space-y-2 items-end">
        <div class="text-black font-semibold rounded-sm">
          Bounties total <Price :amount="instance.bounties"/>
        </div>
        <div class="text-xs text-slate-700 flex-grow">
          {{ humanize(claim.open_until, false) }} left
        </div>
        <button v-if="claim.status == Status.UNCHALLENGED" class="border bg-blue-100 rounded-md py-2 self-stretch shadow">
          Challenge for <Price amount="12"/>
        </button>
      </div>

  </div>
  
</template>

<script setup>
    import { reactive, ref } from 'vue';
    import { NOW, decided, Status, fmtDate, humanize} from '../sprig';
    import StatusTag from './StatusTag.vue';
    import Price from './Price.vue';
    import { computed } from '@vue/reactivity';
    import LabeledData from './LabeledData.vue';
    import User from './User.vue';
import StatusIcon from './StatusIcon.vue';

    const props = defineProps({
        instance: {
            type: Object,
            required: true,
        },
    })

    const claim = computed(() => {
        return props.instance.root_claim;
    })

</script>