<script setup lang="ts">

import { nextTick, watch } from 'vue';
import NavBar from './components/medium/NavBar.vue';
import { store } from './store';

watch(store, () => nextTick( () => {
  if (store.fail) {
    document.getElementById('tryAgainButton').focus();
  }
}))
</script>

<template>
  <div v-if="store.loaded" class="h-full flex flex-col">
    <NavBar />
    <!-- The key makes that the view re-renders every time the route changes.
    It is not very efficient as the default is to re-use components, but I did
    not manage to make the component update itself on route change. This welcomes improvements. -->
    <router-view :key="$route.path" class="flex-grow"/>
  </div>
  <div v-else-if="store.fail" class="w-screen h-screen flex items-center justify-around">
    <div class="flex flex-col items-center">
      <v-icon name="pi-pikachu" scale="4" />
      <h1 class="text-3xl">Oops!</h1>
      <h2 class="tracking-tight text-slate-600">We cannot access sprig data.</h2>
      <button class="absolute bottom-4 py-2 px-6 rounded hover:underline bg-gradient-to-br shadow from-amber-200 to-orange-300 hover:-hue-rotate-15 transition duration-300 text-sm font-semibol"
        @click="store.reload()" autofocus id="tryAgainButton" >try again</button>
    </div>
  </div>
  <div v-else class="w-screen h-screen flex items-center justify-around">
    <div class="flex flex-col items-center">
      <v-icon class="animate-bounce text-gray-700" name='md-downloading' scale='3'/>
      <div class="text-2xl pt-4">Loading...</div>
    </div>
  </div>

</template>
