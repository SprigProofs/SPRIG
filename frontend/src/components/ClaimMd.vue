<template>
  
  <div class="w-full border rounded-sm p-4 shadow-sm hover:shadow-md">
      <!-- First row -->
      <div class="flex flex-row justify-between">
        <!-- Top left -->
        <div class="space-x-4">
            <StatusTag class="" :status="claim.status" />
            <span class="text-gray-500 italic text-sm">#{{ claim.hash }}</span>
        </div>
        <!-- Top right -->
        <div>
            <div v-if="claim.open_until > NOW && !decided(claim.status)"
                class="inline-block">
                Closes in {{ openUntil() }}
            </div>
            <div class="text-gray-600 text-sm inline-block">
                <v-icon name="md-modeedit"/>
                by cozyfractal {{ 2 }} days ago
            </div>
        </div>
      </div>
     <h3 class="text-lg pt-4">{{ title() }}</h3>
      <code class="text-sm">
      {{ statement() }}
      </code>

      <div class="border-t -mx-4 -mb-4 mt-4 grid-cols-4 grid">
          <div class="bg-gray-100 p-2">
              <v-icon name="md-modeedit" class="text-gray-500"/>
              by author<br> {{ openUntil() }} ago
          </div>
          <div class="bg-gray-100">2</div>
          <div class="bg-gray-100">3</div>
          <div class="bg-gray-100">4</div>
      </div>
  </div>
  
</template>

<script setup>
    import { NOW, decided } from '../sprig';
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

    function openUntil() {
        const dt = props.claim.open_until - NOW
        const hours = Math.floor(dt / 6)
        const minutes = dt % 6 * 9
        const hour_text = hours > 1 ? "hours" : "hour"
        const min_text = minutes > 1 ? "mins" : "min"
        var parts = ""
        if (hours > 0) {
            parts += hours + " " + hour_text + " "
        }
        if (minutes > 0) {
            parts += minutes + " " + min_text
        }
        return parts
    }
</script>