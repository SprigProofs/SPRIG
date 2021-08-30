<template>
  <div v-if="loading" class="text-center m-auto">
    loading...
  </div>
  <div v-else class="bg-green-200 p-2">
    <h1 class="text-lg font-bold">Instance #{{ hash }}</h1>
    Language: {{ sprig.language_data.__class__ }} <br>
    Claimer: {{ sprig.proof_attempts[0][0].claimer }} <br />
    Status: <StatusDisplay :status="sprig.claims[0].status"/> <br />
    Started at: {{ sprig.proof_attempts[0][0].time }}
  </div>
<!--  {{ sprig }}-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { api, Sprig } from "@/sprig";
import StatusDisplay from "@/components/StatusDisplay.vue";

export default defineComponent({
  name: "Instance",
  components: { StatusDisplay },
  data(): { sprig?: Sprig; hash: string; loading: boolean } {
    return {
      hash: this.$route.params.instance,
      loading: false,
    };
  },
  created(): void {
    this.loading = true;
    api.fetchInstance(this.hash, (data) => {
      this.sprig = data;
      this.loading = false;
    });
  },
});
</script>
