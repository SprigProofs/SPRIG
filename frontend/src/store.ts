import { ElNotification } from 'element-plus';
import { api, dayjs, Parameters, ProofAttempt, Sprig, User } from "./sprig";
import { reactive, type Ref } from "vue";
import type { Account as AccountReach, Backend, Contract } from '@reach-sh/stdlib/ALGO';

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

        togglePopup.value = true;
        const amount = reach.parseCurrency(params.downstakes[params.rootHeight-1]);
        const [ctc, p] = blockchain.newSprig(
            acc,
            SPRIG_ADDRESS,
            blockchain.hashingAnswer(proof),
            blockchain.deadlineFromTime(params.timeForQuestions.asMilliseconds()),
            amount,
        )
        // Catch errors from the promis p
        let hasFailed = null;
        p.catch((e: { message: any; }) => {
            hasFailed = e;
            console.log("Error", e);
            ElNotification.error({ title: "Error", message: e.message });
            togglePopup.value = false;
        });
        // Wait for the contract to be created, then submit to the server
        while (hasFailed === null) {
            await wait(500)
            if (await ctc.views.author()[0] == "Some") {
                togglePopup.value = false;
                ElNotification({ title: "Contract created", message: await ctcInfo(ctc) });

                // Server
                const instance = await api.newInstance(language, params, acc.address, rootClaim, proof, await ctcInfo(ctc));
                ElNotification({ title: "Instance created!" })
                await store.reload();
                return instance;
            }
        }

        throw hasFailed;
    },
    async newProofAttempt(togglePopup: Ref<boolean>, instance: string, challenge: string, isMachineLevel: boolean, proof: string) {
        console.log("New proof attempt", instance, challenge, proof);
        // Blockchain
        const acc = await ensureWalletConnected();
        const inst = store.instances[instance];
        const chall = inst.challenges[challenge];
        const height = isMachineLevel ? 0 : chall.height - 1;
        const [ctc, p] = blockchain.answer(
            acc,
            SPRIG_ADDRESS,
            chall.author,
            blockchain.hashingAnswer(proof, chall.contract),
            blockchain.deadlineFromTime(inst.params.timeForQuestions),
            reach.parseCurrency(inst.params.upstakes[height]),
            reach.parseCurrency(inst.params.downstakes[height]),
            isMachineLevel,
            );
        // Catch errors from the promis p
        let hasFailed = null;
        p.catch((e: { message: any; }) => {
            hasFailed = e;
            console.log("Error", e);
            ElNotification.error({ title: "Error", message: e.message });
            togglePopup.value = false;
        });
        // Wait for the contract to be created
        while (hasFailed === null) {
            await wait(500)
            if (await ctc.views.author()[0] == "Some") {
                ElNotification({ title: "Contract created", message: await ctc.getContractAddress() });
                togglePopup.value = false;

                // Server
                const proofAttempt = await api.newProofAttempt(instance, challenge, isMachineLevel, proof, this.user, await ctcInfo(ctc));
                ElNotification({ title: "Proof attempt created!" })
                await store.reload();
                return proofAttempt;
            }
        }

        throw hasFailed;
    },
    getUser(name: string) {
        return new User(name, store.bank[name] || 0, store.instances);
    },
});

store.reload();

async function createContract(what: string,
    togglePopup: Ref<boolean>,
    blockchainInteract: (acc: Account) => [Contract, Promise<void>],
    serverInteract: (ctcAddress: string) => any) {
        // Blockchain
        const acc = await ensureWalletConnected();
        const [ctc, p] = blockchainInteract(acc);

        // Catch errors from the promise p
        let hasFailed = null;
        p.catch((e: { message: any; }) => {
            hasFailed = e;
            console.log("Error", e);
            ElNotification.error({ title: "Error", message: e.message });
            togglePopup.value = false;
        });
        // Wait for the contract to be created
        while (hasFailed === null) {
            await wait(500)
            if (await ctc.views.author()[0] == "Some") {
                ElNotification({ title: "Contract created", message: await ctc.getContractAddress() });
                togglePopup.value = false;

                // Server
                const obj = await serverInteract(await ctcInfo(ctc));
                ElNotification({ title: `${what} created!` })
                await store.reload();
                return obj;
            }
        }

        throw hasFailed;
}

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
            // ElNotification.info({ title: e.eventName, message: JSON.stringify(e) });
        });
        console.log("Set wallet fallback...", store.account)
        if (!"TestNet") {
            reach.setWalletFallback(reach.walletFallback({
                providerEnv: 'TestNet', MyAlgoConnect }));
            // reach.setWalletFallback(reach.walletFallback({
            //     providerEnv: 'TestNet', WalletConnect }));
            store.account = await reach.getDefaultAccount();
            console.log("Account:", store.account)
        } else {
            // Private devnet
            store.account = await reach.newTestAccount(reach.parseCurrency(5))
            // We make sure there is some money on the sprig address, otherwise it fails
            await reach.fundFromFaucet(SPRIG_ADDRESS, reach.parseCurrency(2))
        }
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

async function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function ctcInfo(ctc: Contract): Promise<string> {
    const info = await ctc.getInfo();
    return reach.bigNumberToNumber(info).toString();
}


// async function createContract(backend: Backend, initialData: any, togglePopup: Ref<boolean>): Promise<Contract> {
//     const account = await ensureWalletConnected();
//     const ctc = account.contract(backend);

//     // It is not clean to do this here, but I can't think of a better place.
//     togglePopup.value = true;
//     const ret = await ctc.p.Admin(initialData)
//     togglePopup.value = false;

//     const contractInfo = await ctc.getInfo();
//     console.log("Created contract:", ret, contractInfo);
//     account.updateBalance();  // Add await?
//     return ctc;
// }

// async function joinContract(ctcInfo) {
//     const account = await ensureWalletConnected();
//     const ctcNew = account.contract(backend, ctcInfo);
//     const secret = await ctcNew.a.Client.read_secret();
//     account.updateBalance();  // Add await?
//     return secret;
// }
