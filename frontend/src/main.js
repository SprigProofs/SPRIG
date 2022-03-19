import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdMenu } from "oh-vue-icons/icons";
// Browse icons at https://oh-vue-icons.js.org/
// Don't forget to add the icon below too.
addIcons(MdMenu);




createApp(App)
    .component("v-icon", OhVueIcon)
    .mount('#app')
