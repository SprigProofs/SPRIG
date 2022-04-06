import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdMenu, MdModeedit, MdCancel, MdCheckcircle, MdOfflineboltSharp, MdKeyboarddoublearrowdown, MdKeyboarddoublearrowup, MdBolt, MdOfflinebolt } from "oh-vue-icons/icons";
import { PiPikachu } from 'oh-vue-icons/icons' 
import { CiAlgo } from 'oh-vue-icons/icons' 
// Browse icons at https://oh-vue-icons.js.org/
// Don't forget to add the icon below too.
addIcons(
    MdMenu, 
    PiPikachu, 
    MdModeedit, 
    MdOfflineboltSharp, 
    MdOfflinebolt,
    CiAlgo, 
    MdKeyboarddoublearrowdown, 
    MdKeyboarddoublearrowup,
    MdCancel,
    MdCheckcircle,
    MdBolt,
);


createApp(App)
    .component("v-icon", OhVueIcon)
    .mount('#app')
