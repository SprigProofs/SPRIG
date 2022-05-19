import { api, Sprig } from "./sprig";
import { reactive } from "vue";

export const store = reactive<{
    instances: Record<string, Sprig>,
    bank: Record<string, number>,
    loaded: boolean,
    fail: boolean,
    user: string
    reload: () => void,
    challenge: (instance: string, challenge: string) => void,
}>({
    instances: {},
    bank: {},
    loaded: false,
    fail: false,
    user: 'Diego',
    reload() {
        console.log('reload');
        store.fail = false;
        Promise.all(
            [api.fetchAllInstances(), api.fetchBank()]
        ).then(([instances, bank]) => {
            store.instances = instances;
            store.bank = bank;
            store.loaded = true;
        }, () => {
            store.fail = true;
            store.loaded = false;
        })
        api.fetchAllInstances().then(data => {
            store.instances = data;
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
    }
});

store.reload();
