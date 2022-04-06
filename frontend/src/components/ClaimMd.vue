<template>
  
  <div class="w-full border rounded-sm shadow-sm hover:shadow-md group">
      <!-- First part of the card -->
      <div class="p-4">
        <!-- First row -->
        <div class="flex flex-row justify-between ">
            <!-- Top left -->
            <div class="space-x-2">
                <StatusTag class="" :status="claim.status" />
                <span class="text-gray-500 italic text-sm font-mono">#{{ claim.hash }}</span>
            </div>
            <!-- Top right -->
            <div class="leading-none flex items-center">
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
            {{ title() }}
            <span class="text-sm text-gray-700">by cozyfractal</span>
            </h3> 
        <code class="text-sm">
          {{ statement() }}
        </code>
      </div>
      <!-- Bottom of the card, if unchallenged -->
      <div v-if="claim.status === Status.UNCHALLENGED"
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
            <h4 class="text-gray-900 font-bold"><v-icon scale="0.75" name="md-cancel"/> If proved false</h4>
            {{ fmtDate(claim.last_modification) }}
        </div>
        <div>
            <h4 class="text-gray-900 font-bold"><v-icon scale="0.75" name="md-checkcircle"/> If proved true</h4>
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
  </div>
  
</template>

<script setup>
    import { NOW, decided, Status } from '../sprig';
    import StatusTag from './StatusTag.vue';

    const props = defineProps({
        claim: {
            type: Object,
            required: true,
        },
    })

    function title() {
        return props.claim.statement.split(":", 1)[0]
    }

    function statement() {
        return props.claim.statement.split(":=", 1)[0]
            .substring(props.claim.statement.indexOf(":") + 1)
    }

    function fmtDate(time) {
        const past = time <= NOW
        const dt = Math.abs(time - NOW)
        const hours = Math.floor(dt / 6)
        const minutes = dt % 6 * 9
        const hour_text = hours > 1 ? "hours" : "hour"
        const min_text = minutes > 1 ? "mins" : "min"
        var parts = ""
        if (hours > 0) {
            parts += hours + " " + hour_text + " "
        }
        if (minutes > 0) {
            parts += minutes + " " + min_text + " "
        }

        if (past) {
            return parts + "ago"
        } else {
            return parts
        }

    }

</script>