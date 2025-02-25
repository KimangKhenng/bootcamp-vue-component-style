import { createApp } from 'vue';

import App from '@/App.vue'
import "@/assets/styles/main.css";
import "@/assets/styles/main.css";
import '@/assets/tailwind.css'
import router from '@/route';
import { createPinia } from 'pinia'
import "preline/preline";
import i18n from '@/i18n/index.js';

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(i18n)
app.use(pinia)
app.mount('#app')
