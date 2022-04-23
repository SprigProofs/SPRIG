import { api, Sprig } from "./sprig";
import { reactive } from "vue";

export const store = reactive<{instances: Record<string, Sprig>, loaded: boolean}>({
    instances: {},
    loaded: false,
});

api.fetchAllInstances(data => {
    store.instances = data;
    store.loaded = true;
})
