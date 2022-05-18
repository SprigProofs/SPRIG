import { api, Sprig } from "./sprig";
import { reactive } from "vue";

export const store = reactive<{
    instances: Record<string, Sprig>,
    bank: Record<string, number>,
    loaded: boolean,
    fail: boolean,
    reload: () => void,
}>({
    instances: {},
    bank: {},
    loaded: false,
    fail: false,
    reload() {
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
    }
});

store.reload();
