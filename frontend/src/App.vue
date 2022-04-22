<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import SearchInput from './components/SearchInput.vue';
import ProofAttemptPage from './components/ProofAttemptPage.vue';
import Parameters from './components/Parameters.vue';
import Home from './components/Home.vue';
import NavBar from './components/NavBar.vue';
</script>

<template>
  
  <div>
    <NavBar />
    <router-view></router-view>
  </div>
  
  <!-- <el-tabs class="px-8 py-4">
    <el-tab-pane label="Search" ><SearchInput/></el-tab-pane>
    <el-tab-pane label="Proof Attempt"><ProofAttemptPage/></el-tab-pane>
  </el-tabs> -->

</template>
