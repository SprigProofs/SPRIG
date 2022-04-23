<script setup>

import SearchInput from './components/SearchInput.vue';
import ProofAttemptPage from './components/ProofAttemptPage.vue';
import Parameters from './components/Parameters.vue';
import Home from './components/Home.vue';
import NavBar from './components/NavBar.vue';
import { store } from './store';

</script>

<template>
  
  <div v-if="store.loaded">
    <NavBar />
    <router-view></router-view>
  </div>
  <div v-else class="w-screen h-screen flex items-center justify-around">
    <div class="flex flex-col items-center">
      <v-icon class="animate-bounce text-gray-700" name='md-downloading' scale='3'/>
      <div class="text-2xl pt-4">Loading...</div>
    </div>
  </div>
  
  <!-- <el-tabs class="px-8 py-4">
    <el-tab-pane label="Search" ><SearchInput/></el-tab-pane>
    <el-tab-pane label="Proof Attempt"><ProofAttemptPage/></el-tab-pane>
  </el-tabs> -->

</template>
