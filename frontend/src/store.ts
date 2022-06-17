import { api, Parameters, ProofAttempt, Sprig } from "./sprig";
import { reactive } from "vue";

export const store = reactive<{
    instances: Record<string, Sprig>,
    bank: Record<string, number>,
    loaded: boolean,
    fail: boolean,
    user: string
    reload: () => Promise<void>,
    challenge: (instance: string, challenge: string) => Promise<void>,
    newInstance: (language: string, params: Parameters, rootClaim: string, proof: string) => Promise<Sprig>,
    newProofAttempt: (instance: string, challenge: string, isMachineLevel: boolean, proof: string) => Promise<ProofAttempt>,
}>({
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
    challenge(instance: string, challenge: string) {
        console.log("Challenge", instance, challenge, this.user);
        return api.challenge(instance, challenge, store.user).then(() => {
            store.reload();
        })
    },
    async newInstance(language: string, params: Parameters, rootClaim: string, proof: string) {
        console.log("New instance", language, params, rootClaim, proof);
        return api.newInstance(language, params, this.user, rootClaim, proof).then(async (instance) => {
            await store.reload();
            return instance;
        })
    },
    async newProofAttempt(instance: string, challenge: string, isMachineLevel: boolean, proof: string) {
        console.log("New proof attempt", instance, challenge, proof);
        return api.newProofAttempt(instance, challenge, isMachineLevel, proof, this.user).then(async (proofAttempt) => {
            await store.reload();
            return proofAttempt;
        })
    }
});

store.reload();
