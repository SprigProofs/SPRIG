<template>
    <div>
        <header class="fixed h-12 z-10 shadow w-screen border-b border-black bg-white">
            <ul class="flex space-x-6 items-center h-full max-w-3xl w-fill mx-auto px-4 sm:px-6 lg:px-8 ">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/search">Explore</router-link></li>
                <li><router-link to="/new">New</router-link></li>
                <li><router-link :to="{ name: 'user', params: { name: store.user || 'Diego' }}">Contributions</router-link></li>
                <li><router-link to="/docs">Docs</router-link></li>
                <li class="flex-grow text-right">
                    <Button v-if="store.account === null"
                        @click="connectWallet()"
                        color="orange" filled
                        class="bg-gradient-to-br from-orange-500 to-pink-500"
                        >Connect Wallet</Button>
                    <div v-else class="space-x-2">
                        <Tooltip>
                            <template #reference>
                                <span class="text-gray-700 font-mono">
                                {{ shortAddress }}
                                </span>
                            </template>
                            <span class="text-gray-700 font-mono">
                            {{ reach.formatAddress(store.account) }} </span>
                        </Tooltip>
                        <Price :amount="balance"/>
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
import { store } from '../../store';

import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';
import { computed, ref } from 'vue';
import { Tooltip } from '../small';

const reach = loadStdlib('ALGO');

function connectWallet() {
    delete window.algorand;
    reach.setWalletFallback(reach.walletFallback({
        providerEnv: 'TestNet', WalletConnect }));
    reach.getDefaultAccount().then((acc) => {
        store.account = acc;
        console.log("Account:", acc);
    }).catch((err) => {
        console.log("Error:", err);
    });
}

const balance = ref(0);
setInterval(() => {
    if (store.account !== null) {
        reach.balanceOf(store.account).then((bal) => {
            balance.value = +reach.formatCurrency(bal, 4);
        });
    }
}, 1000);

const shortAddress = computed(() => {
    if (store.account === null) {
        return '';
    }
    return reach.formatAddress(store.account).slice(0, 4) + '..'
        + reach.formatAddress(store.account).slice(-4);
});

</script>