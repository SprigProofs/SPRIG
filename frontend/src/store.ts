import { api, Parameters, ProofAttempt, Sprig, User } from "./sprig";
import { reactive, type Ref } from "vue";
import type { Account as AccountReach, Contract } from '@reach-sh/stdlib/ALGO';

interface Account extends AccountReach {
    balance: number;
    address: string;
    shortAddress: string;
    updateBalance: () => Promise<void>;
}
interface Store {
    instances: Record<string, Sprig>;
    bank: Record<string, number>;
    loaded: boolean;
    fail: boolean;
    user: string;
    account?: Account;
    reload: () => Promise<void>;
    challenge: (togglePopup: Ref<boolean>, instance: string, challenge: string) => Promise<void>;
    newInstance: (togglePopup: Ref<boolean>, language: string, params: Parameters, rootClaim: string, proof: string) => Promise<Sprig>;
    newProofAttempt: (togglePopup: Ref<boolean>, instance: string, challenge: string, isMachineLevel: boolean, proof: string) => Promise<ProofAttempt>;
    getUser: (name: string) => User;
}

export const store: Store = reactive<Store>({
    instances: {},
    bank: {},
    loaded: false,
    fail: false,
    user: 'Diego',
    async reload() {
        console.log('reload');
        store.fail = false;
        return Promise.all(
            [api.fetchAllInstances(), api.fetchBank()]
        ).then(([instances, bank]) => {
            store.instances = instances;
            store.bank = bank;
            store.loaded = true;
        }, () => {
            store.fail = true;
            store.loaded = false;
        })
    },
    async challenge(togglePopup: Ref<boolean>, instance: string, challenge: string) {
        console.log("Challenge", instance, challenge, this.user);
        // Blockchain
        const ctc = await createContract(69, togglePopup);
        // Server
        await api.challenge(instance, challenge, store.user, await ctc.getContractAddress())
        await store.reload();
    },
    async newInstance(togglePopup: Ref<boolean>, language: string, params: Parameters, rootClaim: string, proof: string) {
        console.log("New instance", language, params, rootClaim, proof);
        // Blockchain
        const ctc = await createContract(1234, togglePopup);
        // Server
        const instance = await api.newInstance(language, params, this.user, rootClaim, proof, await ctc.getContractAddress());
        await store.reload();
        return instance;
    },
    async newProofAttempt(togglePopup: Ref<boolean>, instance: string, challenge: string, isMachineLevel: boolean, proof: string) {
        console.log("New proof attempt", instance, challenge, proof);
        // Blockchain
        const ctc = await createContract(42, togglePopup);
        // Server
        const proofAttempt = await api.newProofAttempt(instance, challenge, isMachineLevel, proof, this.user, await ctc.getContractAddress());
        await store.reload();
        return proofAttempt;
    },
    getUser(name: string) {
        return new User(name, store.bank[name] || 0, store.instances);
    },
});

store.reload();


// Blockchain

import * as backend from './reach/build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';
import type { BigNumber } from "ethers";

const reach = loadStdlib('ALGO');

export async function ensureWalletConnected() {
    if (!store.account) {
        delete window.algorand;
        reach.setWalletFallback(reach.walletFallback({
            providerEnv: 'TestNet', WalletConnect }));
        store.account = await reach.getDefaultAccount();
        console.log("Connected account:", store.account);

        // Adding more properties for convenience
        const address = reach.formatAddress(store.account)
        store.account.address = address;
        store.account.shortAddress = address.slice(0, 4) + '..' + address.slice(-4);
        store.account.updateBalance = async () => {
            const bal = await reach.balanceOf(store.account);
            store.account.balance = +reach.formatCurrency(bal, 4);
        }
        await store.account.updateBalance();
    }
    return store.account
}

// async function createAccount() {
//     const account = await reach.newTestAccount(reach.parseCurrency(1000))
//     console.log("Created account:", account);
//     store.account = account;
// }


async function createContract(secret: number, togglePopup: Ref<boolean>): Promise<Contract> {
    const account = await ensureWalletConnected();
    const ctc = account.contract(backend);

    // It is not clean to do this here, but I can't think of a better place.
    togglePopup.value = true;
    const ret = await ctc.p.Admin({ secret })
    togglePopup.value = false;

    const contractInfo = await ctc.getInfo();
    console.log("Created contract:", ret, contractInfo);
    account.updateBalance();  // Add await?
    return ctc;
}

// async function joinContract(ctcInfo) {
//     const account = await ensureWalletConnected();
//     const ctcNew = account.contract(backend, ctcInfo);
//     const secret = await ctcNew.a.Client.read_secret();
//     account.updateBalance();  // Add await?
//     return secret;
// }
