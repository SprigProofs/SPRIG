<template>
    <div class="py-16">
      <div class="text-center">
        <p class="text-sm font-semibold text-indigo-600 uppercase tracking-wide">404 error</p>
        <h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found.</h1>
        <p class="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
        <div class="mt-6">
          <button @click="router.go(-1)" class="text-base font-medium text-indigo-600 hover:text-indigo-500">Go back<span
              aria-hidden="true"> &rarr;</span></button>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>