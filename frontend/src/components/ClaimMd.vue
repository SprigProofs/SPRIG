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
            <!-- Top right -->

            <div v-if="false" class="leading-none flex items-center">
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
        </div>
        <h3 class="text-lg pt-2">
            {{ claimTitle(claim) }}
            <span class="text-sm text-gray-700">by cozyfractal</span>
            </h3> 
        <code class="text-sm flex-grow">
          {{ claimStatement(claim) }}
        </code>
        <!-- Hint display  -->
        <div v-if="false"
          class="text-right italic text-sm text-gray-700 w-3/4 self-end">
          <span v-if="hint == 'time' && claim.status == Status.UNCHALLENGED">
            If nobody challenges this claim, it will be <StatusTag status="validated"/> in {{ fmtDate(claim.open_until) }}
          </span>
          <span v-if="hint == 'time' && claim.status == Status.CHALLENGED">
            If no proof attempt are made, this claim will be <StatusTag status="rejected"/> in {{ fmtDate(claim.open_until) }}
          </span>
          <span v-if="hint == 'challenge-cost'">
            You can challenge this claim for <Price amount="17.2"/>.
          </span>
          <span v-if="hint == 'challenge-success'">
            If no valid answer to this challenge are given, 
            and no other challenge defeated the attempt before,
            the downstake of <Price amount="51.3"/> will
            be given to the challenger.
          </span>
          <span v-if="hint == 'attempt-fail'">
            Every time a proof attempt is made and does not succeed,
            the upstake of <Price amount="2.42"/> will be given to the challenger.
          </span>
        </div>
      </div>
      <!-- Right of the card -->
      <div 
        v-if="false && !decided(claim.status)"
        class="w-32 bg-slate-100 p-4 flex-shrink-0
          flex flex-col text-slate-600 space-y-1">
          <div class="text-center text-sm text-slate-600"
            @mouseover="setHint('time')"
            >{{ fmtDate(claim.open_until) }} left</div>
          <div 
            v-if="claim.status == Status.UNCHALLENGED"
            @mouseover="setHint('challenge-cost')"
            class="flex justify-between items-center">
            <v-icon name="md-bolt"/>
            <Price amount="12.3"/> </div>
          <div class="flex justify-between items-center"
            @mouseover="setHint('challenge-success')">
            <v-icon name="md-clear-round"/>
            <Price amount="17.4"/></div>
          <div class="flex justify-between items-center"
            @mouseover="setHint('challenge-success')">
            <v-icon name="md-keyboarddoublearrowdown"/>
            <Price amount="51.3"/></div>
          <div class="flex justify-between items-center"
            @mouseover="setHint('attempt-fail')">
            <v-icon name="md-keyboarddoublearrowup"/>
            <Price amount="2.42"/></div>
          <div class="flex-grow"></div>
          <button 
            v-if="claim.status == Status.UNCHALLENGED"
            class="bg-gray-400 rounded-sm py-1 text-slate-900
            shadow-sm group-hover:shadow-md">
              Challenge</button>
          <button v-else
            class="bg-gray-400 rounded-sm py-1 text-slate-900
            shadow-sm group-hover:shadow-md ">
              Add proof
          </button>
      </div>
      <div 
        v-if="!decided(claim.status)"
        class="w-48 bg-slate-100 p-4 flex-shrink-0
          flex flex-col space-y-2 items-center">
        <div class="text-black font-bold rounded-sm mx-auto">
          Bounty&nbsp;<Price amount="120"/>
        </div>
        <div class="text-xs text-slate-700 flex-grow">
          {{ fmtDate(claim.open_until, false) }} left
        </div>
        <button v-if="claim.status == Status.UNCHALLENGED" class="border bg-blue-100 rounded-md py-2 self-stretch shadow">
          Challenge for <Price amount="12"/>
        </button>
        <button v-else class="border bg-blue-100 rounded-md py-2 self-stretch shadow">
          Add proof for <Price amount="12"/>
        </button>
      </div>

      <!-- Bottom of the card, if unchallenged -->
      <div v-if="false && claim.status === Status.UNCHALLENGED"
        class="border-t grid grid-cols-3 p-4 space-x-2">
        <div class="flex space-x-2">
            <v-icon scale="1.5" class="text-gray-400" name="md-offlinebolt"/> 
            <div class="flex flex-col">
                <h4 class="text-gray-900 font-bold">Challenge</h4>
                <div>
                    Open for 
                    {{ fmtDate(claim.open_until) }}
                </div>
                <div>
                    Bounty 24 <v-icon name="ci-algo" class="inline"/>
                </div>
            </div>
        </div>
        <div>
            <h4 class="text-gray-900 font-bold"><v-icon scale="0.75" name="md-cancel"/> If proven false</h4>
            {{ fmtDate(claim.last_modification) }}
        </div>
        <div>
            <h4 class="text-gray-900 font-bold"><v-icon scale="0.75" name="md-checkcircle"/> If proven true</h4>
            {{ fmtDate(claim.last_modification - 10) }}
        </div>
      </div>
      <!-- Bottom of the card -->
        <div v-if="false"
         class="border-t grid-cols-3 grid divide-x">
          <!-- Challenge sub-card -->
          <div class="bg-gray-100 p-2 flex flex-col items-center">
              <div class="text-gray-600 text-sm">
                <v-icon name="md-offlinebolt-sharp"/>
                Challenge in
              </div>
              <div class="p-1 ">
                {{ fmtDate(claim.open_until) }}
              </div>
              <button class="bg-gray-200 mb-[-15%] py-2 px-6 leading-none
                rounded shadow-sm group-hover:shadow-md border border-gray-300"
              >25 <v-icon name="ci-algo"/></button>  
          </div>
          <!-- Rejected subcard -->
          <div class="bg-gray-100 p-2 flex flex-col items-center">
              <div class="text-gray-600 text-sm">
                <v-icon name="md-cancel"/>
                If rejected
              </div>
              <div class="p-1 ">
                {{ fmtDate(claim.open_until) }}
              </div>
              <button class="bg-gray-200 mb-[-15%] py-2 px-6 leading-none
                rounded shadow-sm group-hover:shadow-md border border-gray-300"
              >25 <v-icon name="ci-algo"/></button>  
          </div>
          <!-- Accepted subcard -->
          <div class="bg-gray-100 p-2 flex flex-col items-center">
              <div class="text-gray-600 text-sm">
                <v-icon name="md-checkcircle"/>
                If accepted
              </div>
              <div class="p-1 ">
                {{ fmtDate(claim.open_until) }}
              </div>
              <button class="bg-gray-200 mb-[-15%] py-2 px-6 leading-none
                rounded shadow-sm group-hover:shadow-md border border-gray-300"
              >25 <v-icon name="ci-algo"/></button>  
          </div>
      </div>
      <!-- Bottom of the card, simple -->
  </div>
  
</template>

<script setup>
    import { reactive, ref } from 'vue';
    import { NOW, decided, Status, claimTitle, claimStatement, fmtDate } from '../sprig';
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