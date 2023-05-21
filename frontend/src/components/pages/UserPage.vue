<script setup lang="ts">
import { store } from '../../store';
import TripleGraph from '../medium/TripleGraph.vue';
import { Challenge, ProofAttempt, User, linkTo } from '../../sprig';
import NodeEmbed from '../medium/NodeEmbed.vue';

const props = defineProps<{
  name: string,
}>();

const user: User = store.getUser(props.name);

type Contribution = ProofAttempt | Challenge;
const contributions = (user.attempts as Contribution[]).concat(user.challenges);
contributions.sort((a, b) => -a.createdAt.diff(b.createdAt));
</script>

<template>
  <div class="p-8 max-w-3xl w-full self-center">
    <h2 class="mb-2 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
      {{ name }}
    </h2>
    <p class="text-sm text-gray-500">
      <span>Total gains </span>
      <Price :amount="user.balance" class="text-gray-700" />
    </p>

    <h3 class="small-title mt-4">Proof attempts</h3>
    <TripleGraph class="h-64" :data="user.attempts" />

    <h3 class="small-title mt-4">Challenges</h3>
    <TripleGraph class="h-64" :data="user.challenges" />

    <h3 class="small-title mt-6 mb-4">{{ name }}'s contributions</h3>
    <ul v-if="contributions.length > 0" class="space-y-4">
      <li v-for="c in contributions">
        <router-link :to="linkTo(c)" class="card">
          <NodeEmbed :hash="c.hash" :instance="store.instances[c.instanceHash]" :key="c.uid()" />
        </router-link>
      </li>
    </ul>

    <el-empty v-else description="Nothing to show here. Try to submit or challenge a proof!">
      <router-link to="/new">
        <Button icon="md-add-round" color="blue">New SPRIG instance</Button>
      </router-link>
    </el-empty>

  </div>
</template>