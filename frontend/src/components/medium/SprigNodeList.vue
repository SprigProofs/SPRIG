<script setup lang="ts">

import {linkTo, type SprigObject} from '../../sprig';
import NodeEmbed from '../medium/NodeEmbed.vue';
import InstanceEmbed from '../medium/InstanceEmbed.vue';
import UserEmbed from '../medium/UserEmbed.vue';

const props = defineProps<{
    data: SprigObject[];
}>()

function embedType(data: SprigObject) {
    if (data.challenge || data.attempt) {
        return NodeEmbed;
    } else if (data.user) {
        return UserEmbed;
    } else {
        return InstanceEmbed;
    }
}

</script>

<template>
    <TransitionGroup tag="ol" class="space-y-6">
      <li v-for="result in data" :key="result.key" class="transition">
        <router-link :to="linkTo(result.attempt || result.challenge || result.instance || result.user)"
          class="card">
          <UserEmbed v-if="result.user" :name="result.user" />
          <component v-else :is="embedType(result)" :instance="result.instance" :hash="result.attempt?.hash || result.challenge?.hash"/>
        </router-link>
      </li>
    </TransitionGroup>
</template>