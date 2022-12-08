import { ElNotification } from 'element-plus';
import { api, dayjs, Parameters, ProofAttempt, Sprig, User } from "./sprig";
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
        const inst = store.instances[instance];
        const chall = inst.challenges[challenge];
        const parent = inst.proofs[chall.parent];
        const ctc = await blockchain.challenge(
            await ensureWalletConnected(),
            SPRIG_ADDRESS,
            blockchain.hashingChallenge(parent.contract, parent.challenges.indexOf(challenge)),
            dayjs().add(inst.params.timeForAnswers).unix(),
            inst.params.downstakes[chall.height],
            );
        // Server
        await api.challenge(instance, challenge, store.user, await ctc.getContractAddress())
        await store.reload();
    },
    async newInstance(togglePopup: Ref<boolean>, language: string, params: Parameters, rootClaim: string, proof: string) {
        console.log("New instance", language, params, rootClaim, proof);
        // Blockchain
        const acc = await ensureWalletConnected();
        const now = dayjs();
        // const amount = (params.downstakes[params.rootHeight-1]);
        const amount = reach.parseCurrency(params.downstakes[params.rootHeight-1]);
        console.log("Amount", amount);
        togglePopup.value = true;
        const ctc = await blockchain.newSprig(
            acc,
            SPRIG_ADDRESS,
            blockchain.hashingAnswer(proof),
            blockchain.deadlineFromTime(params.timeForQuestions.asMilliseconds()),
            amount,
        )
        ElNotification({ title: "Contract created", message: await ctc.getContractAddress() });
        togglePopup.value = false;
        // Server
        const instance = await api.newInstance(language, params, this.user, rootClaim, proof, await ctc.getContractAddress());
        ElNotification({ title: "Proof submitted!" })
        await store.reload();
        return instance;
    },
    async newProofAttempt(togglePopup: Ref<boolean>, instance: string, challenge: string, isMachineLevel: boolean, proof: string) {
        console.log("New proof attempt", instance, challenge, proof);
        // Blockchain
        const inst = store.instances[instance];
        const chall = inst.challenges[challenge];
        const height = isMachineLevel ? 0 : chall.height - 1;
        const ctc = await blockchain.answer(
            await ensureWalletConnected(),
            SPRIG_ADDRESS,
            chall.author,
            blockchain.hashingAnswer(proof, chall.contract),
            dayjs().add(inst.params.timeForQuestions).unix(),
            inst.params.upstakes[height],
            inst.params.downstakes[height],
            isMachineLevel,
            );
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

import * as blockchain from '../reach/lib.mjs';
import { ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';

export const reach = blockchain.stdlib
const SPRIG_ADDRESS = 'GQPTXRWAHCQCML7G6DNPMGJ5BE7AUXYLEPPMVJPP67KPASTF2MKIVWFSKQ';

export async function ensureWalletConnected() {
    console.log("Wallet connecting...", store.account)
    if (!store.account) {
        // @ts-ignore
        delete window.algorand;
        reach.setCustomHttpEventHandler(async (e) => {
            console.log("HTTP Event", e);
            ElNotification.info({ title: e.eventName, message: JSON.stringify(e) });
        });
        console.log("Set wallet fallback...", store.account)
        reach.setWalletFallback(reach.walletFallback({
            providerEnv: 'TestNet', MyAlgoConnect }));
        // reach.setWalletFallback(reach.walletFallback({
        //     providerEnv: 'TestNet', WalletConnect }));
        store.account = await reach.getDefaultAccount();
        console.log("Account:", store.account)
        ElNotification.info({ title: "Wallet connected", message: store.account.address });

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


async function createContract(backend, initialData, togglePopup: Ref<boolean>): Promise<Contract> {
    const account = await ensureWalletConnected();
    const ctc = account.contract(backend);

    // It is not clean to do this here, but I can't think of a better place.
    togglePopup.value = true;
    const ret = await ctc.p.Admin(initialData)
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
