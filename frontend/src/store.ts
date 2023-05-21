import { ElNotification } from 'element-plus';
import { api, dayjs, Parameters, ProofAttempt, Sprig, User, isLocalhost, logFail } from "./sprig";
import { reactive, type Ref } from "vue";
import type { Account as AccountReach, Backend, Contract } from '@reach-sh/stdlib/ALGO';

const USE_TESTNET = 1;

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
    async reload() {
        console.log('reload');
        store.fail = false;
        return api.fetchAllInstances()
            .then((instances) => {
            store.instances = instances;
            store.loaded = true;
        }, () => {
            store.fail = true;
            store.loaded = false;
        });
    },
    async challenge(togglePopup: Ref<boolean>, instance: string, challenge: string) {
        console.log("Challenge", instance, challenge);
        const creation = dayjs();

        return await createContract(
            "Challenge",
            togglePopup,
            // @ts-ignore
            (acc) => {
                const inst = store.instances[instance];
                const chall = inst.challenges[challenge];
                const parent = inst.proofs[chall.parent];
                return blockchain.challenge(
                    acc,
                    blockchain.SPRIG_ADDRESSES,
                    blockchain.hashingChallenge(parent.contract, parent.challenges.indexOf(challenge)),
                    creation.add(inst.params.timeForAnswers).valueOf(),
                    reach.parseCurrency(inst.params.downstakes[chall.height]),
                );
            },
            (ctcAddress) => api.challenge(instance, challenge, store.account.address, ctcAddress, creation),
        );
    },
    async newInstance(togglePopup: Ref<boolean>, language: string, params: Parameters, rootClaim: string, proof: string) {
        console.log("New instance", language, params, rootClaim, proof);
        const creation = dayjs();

        // Blockchain
        return await createContract(
            "Instance",
            togglePopup,
            // @ts-ignore
            (acc) => blockchain.newSprig(
                acc,
                blockchain.SPRIG_ADDRESSES,
                blockchain.hashingAnswer(proof),
                creation.add(params.timeForQuestions).valueOf(),
                reach.parseCurrency(params.downstakes[params.rootHeight - 1]),
            ),
            (ctcAddress) => api.newInstance(language, params, store.account.address, rootClaim, proof, ctcAddress, creation),
        );
    },
    async newProofAttempt(togglePopup: Ref<boolean>, instance: string, challenge: string, isMachineLevel: boolean, proof: string) {
        console.log("New proof attempt", instance, challenge, proof);
        const creation = dayjs();

        return await createContract(
            "Proof attempt",
            togglePopup,
            // @ts-ignore
            (acc) => {
                const inst = store.instances[instance];
                const chall = inst.challenges[challenge];
                const height = isMachineLevel ? 0 : chall.height - 1;
                return blockchain.answer(
                    acc,
                    blockchain.SPRIG_ADDRESSES,
                    chall.author,
                    blockchain.hashingAnswer(proof, chall.contract),
                    creation.add(inst.params.timeForQuestions).valueOf(),
                    reach.parseCurrency(inst.params.upstakes[height]),
                    reach.parseCurrency(inst.params.downstakes[height]),
                    isMachineLevel,
                );
            },
            (ctcAddress) => api.newProofAttempt(instance, challenge,
                isMachineLevel, proof, store.account.address, ctcAddress, creation),
        );
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

    togglePopup.value = true;
    const [ctc, p] = blockchainInteract(acc);

    // Catch errors from the promise p
    let hasFailed = null;
    p.catch((e: { message: any; }) => {
        hasFailed = e;
        logFail("Error while creating contract", e.message, e)
        togglePopup.value = false;
    });
    // Wait for the contract to be created
    while (hasFailed === null) {
        await wait(500);
        // @ts-ignore // author is not defined on the type, but always is in practice
        const a = await ctc.views.author();
        if (a[0] == "Some") {
            const ctcID = await ctcInfo(ctc);
            ElNotification({ title: "Smartcontract created", message: "ID: " + ctcID + "\nWait until most backend acknowledge it.", duration: 10000 });
            togglePopup.value = false;

            // Server
            const obj = await serverInteract(ctcID);
            ElNotification({ title: `${what} acknowledged!` });
            await store.reload();
            return obj;
        }
    }

    throw hasFailed;
}

// Blockchain

import * as blockchain from '../reach/lib.mjs';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';

export const reach = blockchain.stdlib;

export async function ensureWalletConnected() {
    console.log("Wallet connecting...", store.account);
    if (!store.account) {
        // @ts-ignore
        delete window.algorand;
        reach.setCustomHttpEventHandler(async (e) => {
            console.log("HTTP Event", e);
            // ElNotification.info({ title: e.eventName, message: JSON.stringify(e) });
        });
        console.log("Set wallet fallback...", store.account);
        if (!isLocalhost || USE_TESTNET) {
            reach.setWalletFallback(reach.walletFallback({
                providerEnv: 'TestNet', MyAlgoConnect
            }));
            // reach.setWalletFallback(reach.walletFallback({
            //     providerEnv: 'TestNet', WalletConnect }));
            store.account = await reach.getDefaultAccount();
            console.log("Account:", store.account);
        } else {
            // Private devnet
            store.account = await reach.newTestAccount(reach.parseCurrency(5));
            // We make sure there is some money on the sprig address, otherwise it fails
            blockchain.SPRIG_ADDRESSES.forEach(async (a) => {
                await reach.fundFromFaucet(a, reach.parseCurrency(2));
            });
        }
        ElNotification.info({ title: "Wallet connected", message: store.account.address });

        // Adding more properties for convenience
        const address = reach.formatAddress(store.account);
        store.account.address = address;
        store.account.shortAddress = address.slice(0, 4) + '..' + address.slice(-4);
        store.account.updateBalance = async () => {
            const bal = await reach.balanceOf(store.account);
            store.account.balance = +reach.formatCurrency(bal, 4);
        };
        await store.account.updateBalance();
    }
    return store.account;
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
