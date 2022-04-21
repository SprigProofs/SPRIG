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
          <pre class="whitespace-pre-wrap">{{ claimStatement(claim) }}</pre>
        </code>
        
        <div class="flex space-x-6">
          <LabeledData
            v-for="(count, status) in instance.counts"
            :label="status"
            :key="status"
            >{{ count }}</LabeledData>
        </div>
        
        
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
    import { NOW, decided, Status, claimTitle, claimStatement, fmtDate, humanize} from '../sprig';
    import StatusTag from './StatusTag.vue';
    import Price from './Price.vue';
    import { computed } from '@vue/reactivity';
    import LabeledData from './LabeledData.vue';
    import User from './User.vue';

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