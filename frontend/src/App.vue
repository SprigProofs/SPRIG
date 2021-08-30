<template>
  <div class="p-4 bg-green-400 flex justify-between">
    <router-link to="/" class="font-bold">Sprig</router-link>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
  <router-view/>
</template>