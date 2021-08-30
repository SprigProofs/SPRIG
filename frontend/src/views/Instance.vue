<template>
  <div v-if="loading" class="text-center m-auto">loading...</div>
  <div v-else>
    <div class="bg-white shadow p-4">
      <h1 class="text-lg font-bold">Instance #{{ hash }}</h1>
      Language: {{ sprig.language_data.__class__ }} <br />
      Claimer: {{ sprig.proof_attempts[0][0].claimer }} <br />
      Status: <StatusDisplay :status="sprig.claims[0].status" /> <br />
      Started at: {{ sprig.proof_attempts[0][0].time }}
    </div>

    <div class="m-4">
      <RecursiveClaimList :sprig="sprig" :hash="hash" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { api, Sprig } from "@/sprig";
import StatusDisplay from "@/components/StatusDisplay.vue";
import RecursiveClaimList from "@/components/RecursiveClaimList.vue";

export default defineComponent({
  name: "Instance",
  components: { RecursiveClaimList, StatusDisplay },
  data() {
    // We please the type system
    let s: Sprig = {
      claims: {},
      constraints: {},
      proof_attempts: {},
      language_data: { __class__: "none" },
    };
    return {
      sprig: s,
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
