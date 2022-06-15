import { api, Parameters, Sprig } from "./sprig";
import { reactive } from "vue";

export const store = reactive<{
    instances: Record<string, Sprig>,
    bank: Record<string, number>,
    loaded: boolean,
    fail: boolean,
    user: string
    reload: () => Promise<void>,
    challenge: (instance: string, challenge: string) => void,
    newInstance: (language: string, params: Parameters, rootClaim: string, proof: string) => Promise<Sprig>,
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
        api.challenge(instance, challenge, store.user).then(() => {
            store.reload();
        })
    },
    async newInstance(language: string, params: Parameters, rootClaim: string, proof: string) {
        console.log("New instance", language, params, rootClaim, proof);
        return api.newInstance(language, params, this.user, rootClaim, proof).then(async (instance) => {
            await store.reload();
            return instance;
        })
    }
});

store.reload();
