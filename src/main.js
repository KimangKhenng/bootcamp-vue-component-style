import { createApp } from 'vue';

import App from '@/App.vue'
import "@/assets/styles/main.css";
import "@/assets/styles/main.css";
import '@/assets/tailwind.css'
import router from '@/route';

const app = createApp(App)
app.use(router)
app.mount('#app')
