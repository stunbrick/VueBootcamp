import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from "./includes/validation.js";
import { auth } from "./includes/firebase.js";
import Icon from "./directives/icon";
import i18n from "@/includes/i18n.js";
import { registerSW} from "virtual:pwa-register";
import GlobalComponents from "./includes/_global";
import progressBar from "./includes/progress-bar";
import "nprogress/nprogress.css";


registerSW({ immediate: true });

progressBar(router);

let app;
auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)

        app.use(createPinia())
        app.use(router)
        app.use(VeeValidatePlugin);
        app.directive("icon", Icon);
        app.use(GlobalComponents);
        app.use(i18n);

        app.mount('#app')
    }
})

