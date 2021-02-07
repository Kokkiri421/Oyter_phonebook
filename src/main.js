import PrimeVue from 'primevue/config';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import '@/assets/main.scss';
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';



createApp(App).use(store).use(router).use(PrimeVue,{ripple: true}).mount('#app')
