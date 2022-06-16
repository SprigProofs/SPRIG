import { createApp } from 'vue'
import * as VueRouter from "vue-router";
import App from './App.vue';
import './index.css'

// For ready made components from Element Plus: https://element-plus.org/en-US/component/button.html
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { Algo, Button, Price } from './components/small'
import Home from './components/pages/Home.vue'
import Search from './components/pages/SearchInput.vue'
import ProofAttemptPage from './components/pages/ProofAttemptPage.vue'
import InstancePage from './components/pages/InstancePage.vue'
import NewInstancePage from './components/pages/NewInstancePage.vue'
import UserPage from './components/pages/UserPage.vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdClearRound, MdCheckRound, MdMenu, MdModeedit, MdCancel, MdCheckcircle, MdOfflineboltSharp, MdKeyboarddoublearrowdown, MdKeyboarddoublearrowup, MdBolt, MdOfflinebolt, MdQuestionmarkRound, MdInfoRound, MdAccesstimeRound, MdPersonRound, FaMountain, MdLockclock, MdLockopenRound, MdPriorityhighRound, MdCloseRound, MdDownload, MdDownloading, MdExpandmoreRound, MdAddRound, MdLockoutline, HiSolidQuestionMarkCircle, MdVisibility, MdVisibilityoff, MdCopyall } from "oh-vue-icons/icons";
import { PiPikachu } from 'oh-vue-icons/icons'
import { CiAlgo } from 'oh-vue-icons/icons'

// Browse icons at https://oh-vue-icons.js.org/
// Don't forget to add the icon below too.
addIcons(
    MdClearRound,
    MdCheckRound,
    MdQuestionmarkRound,
    HiSolidQuestionMarkCircle,
    MdVisibility,
    MdVisibilityoff,
    MdCopyall,
    MdMenu,
    PiPikachu,
    MdModeedit,
    MdLockoutline,
    MdOfflineboltSharp,
    MdOfflinebolt,
    CiAlgo,
    MdKeyboarddoublearrowdown,
    MdKeyboarddoublearrowup,
    MdCancel,
    MdCheckcircle,
    MdBolt,
    MdInfoRound,
    MdAccesstimeRound,
    MdPersonRound,
    FaMountain,
    MdLockclock,
    MdLockopenRound,
    MdPriorityhighRound,
    MdCloseRound,
    MdDownloading,
    MdExpandmoreRound,
    MdAddRound,
);

addIcons({
    name: "sigma",
    width: 240,
    height: 240,
    minY: -220,
    minX: -20,
    d: "m 46.133628,-160 a 8.7508753,8.7508753 0 0 0 -7.120769,13.83593 l 40.11784,56.164067 -40.11784,56.164058 a 8.7508753,8.7508753 0 0 0 7.120769,13.835944 h 87.500002 a 8.7500002,8.7500002 0 0 0 8.75,-8.75 8.7500002,8.7500002 0 0 0 -8.75,-8.75 H 63.136884 l 33.867514,-47.41407 a 8.7508753,8.7508753 0 0 0 0,-10.171875 L 63.136884,-142.5 h 70.496746 a 8.7500002,8.7500002 0 0 0 8.75,-8.75 8.7500002,8.7500002 0 0 0 -8.75,-8.75 z",
});

const routes = [
    { path: '/', component: Home },
    { path: '/search', component: Search },
    { path: '/new', component: NewInstancePage },
    { path: '/i/:instanceHash/:hash', component: ProofAttemptPage, props: true, name: 'proofAttempt' },
    { path: '/i/:instanceHash', component: InstancePage, props: true, name: 'instance' },
    { path: '/u/:user', component: UserPage, props: true, name: 'user' },

]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

createApp(App)
    .component("v-icon", OhVueIcon)
    .component("Algo", Algo)
    .component("Price", Price)
    .component("Button", Button)
    .use(ElementPlus)
    .use(router)
    .mount('#app')
