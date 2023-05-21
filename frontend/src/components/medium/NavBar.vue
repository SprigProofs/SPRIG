<template>
    <div>
        <header class="fixed h-12 z-10 shadow w-screen border-b border-black bg-white">
            <ul class="flex space-x-6 items-center h-full max-w-3xl w-fill mx-auto px-4 sm:px-6 lg:px-8 ">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/search">Explore</router-link></li>
                <li><router-link to="/new">New</router-link></li>
                <li v-if="store.account?.address"><router-link :to="{ name: 'user', params: { name: store.account.address }}">Contributions</router-link></li>
                <li><router-link to="/docs">Docs</router-link></li>
                <li class="flex-grow text-right">
                    <Button v-if="!store.account"
                        @click="ensureWalletConnected()"
                        color="orange" filled
                        class="bg-gradient-to-br from-orange-500 to-pink-500"
                        >Connect Wallet</Button>
                    <div v-else-if="store.account.address" class="space-x-2">
                        <User :name="store.account.address" />
                        <Price :amount="store.account.balance"/>
                    </div>
                </li>
            </ul>
        </header>
        <div class="h-12">
            <!-- Placeholder -->
        </div>
    </div>
</template>

<script setup lang="ts">
import User from '../medium/User.vue';
import { store, ensureWalletConnected, reach } from '../../store';
import { Tooltip } from '../small';

</script>