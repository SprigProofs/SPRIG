
<template>
    <div class="p-4 flex flex-col items-center space-y-8">
        <h1 class="text-3xl font-bold"> Web3 Tests </h1>

        <div class="w-full">
            <h2>Account address</h2>
            <!-- Create account button -->
            <Button @click="connectWallet()">Connect Wallet</Button>
            <Button @click="createAccount()">Create account</Button>
            <template v-if="account">
                <div>{{ reach.formatAddress(account) }}</div>
                <div>
                    <Price :amount="balance"/>
                    <button @click="getBalance()">refresh</button>
                </div>
            </template>
        </div>

        <!-- Switch between create and join contract with ID number-->
        <div v-if="account"
            class="flex space-x-4">
            <div>
                <input v-model="secret" type="number" placeholder="Secret to store"/>
                <Button @click="createContract()">Create contract & store</Button>
            </div>
            <!-- ID number of contract to join -->
            <div>
                <input v-model="contractId" type="number" placeholder="Contract ID"/>
                <Button @click="joinContract()">Join contract</Button>
            </div>
        </div>

        <div v-if="contractId != -1">
            <h2>Contract information</h2>
            <p>{{ contractId }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Button, Price } from '../small';
import _ from 'lodash';
import { reactive, ref, computed } from 'vue';

// This doesn't correspond to the simple contract that was
// designed to work with the frontend. It's just to make it compile without removing all the code.
import * as backend from '../../../../reach/build/challenge.main.mjs';

import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';

const reach = loadStdlib('ALGO');


const account = ref(null);
const balance = ref(-1);
const contractId = ref(-1);
const secret = ref(42);

function getBalance() {
    reach.balanceOf(account.value).then((bal) => {
        balance.value = +reach.formatCurrency(bal, 4);
    });
};

function connectWallet() {
    reach.setWalletFallback(reach.walletFallback({
      providerEnv: 'TestNet', WalletConnect }));

    // reach.setWalletFallback(reach.walletFallback({
    //   providerEnv: 'TestNet', WalletConnect: MakePeraConnect(PeraWalletConnect) }));

    reach.getDefaultAccount().then((acc) => {
        account.value = acc;
        getBalance();
        console.log("Account:", acc);
    });
}

function createAccount() {
    reach.newTestAccount(reach.parseCurrency(1000))
        .then(acc => {
            account.value = acc;
        });
    // const secret = await ask.ask(`What is your account secret?`, (x => x))
    // acc = await stdlib.newAccountFromSecret(secret);
}


function createContract() {
    const ctc = account.value.contract(backend);
    ctc.p.Admin({ secret: secret.value })
    getBalance()
    ctc.getInfo().then(ci => {
        contractId.value = ci;
        console.log(ci)
    });
}

function joinContract() {
    const ctc = account.value.contract(backend, contractId.value);
    ctc.a.Client.read_secret().then((s) => {
        secret.value = s;
        getBalance();
    })
}


</script>