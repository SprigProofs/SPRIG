<template>
    <div>
        <header class="fixed h-12 z-10 shadow w-screen border-b border-black bg-white">
            <ul class="flex space-x-6 py-3 max-w-3xl w-fill mx-auto px-4 sm:px-6 lg:px-8 ">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/search">Explore</router-link></li>
                <li><router-link to="/new">New</router-link></li>
                <li><router-link :to="{ name: 'user', params: { name: store.user || 'Diego' }}">Contributions</router-link></li>
                <li><router-link to="/docs">Docs</router-link></li>
                <li class="flex-grow text-right">
                    <input class="text-right mr-4 px-1 py-0.5 -my-0.5 border-gray-400 border w-24"
                        type="text"
                        v-model="store.user">
                    <Price :amount="store.bank[store.user] || 0" />
                </li>
            </ul>
        </header>
        <div class="h-12">
            <!-- Placeholder -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { store } from '../../store';


</script>