import { api, Sprig } from "./sprig";
import { reactive } from "vue";

export const store = reactive<{
    instances: Record<string, Sprig>, 
    loaded: boolean,
    fail: boolean,
    reload: () => void,
}>({ 
    instances: {}, 
    loaded: false, 
    fail: false,
    reload() {
        store.fail = false;
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

