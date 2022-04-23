import { api } from "./sprig";
import { reactive } from "vue";

export const store = reactive({
    instances: {},
    loaded: false,
});

api.fetchAllInstances(data => {
    store.instances = data;
    store.loaded = true;
})
