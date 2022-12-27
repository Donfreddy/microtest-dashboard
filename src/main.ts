import {createApp} from "vue";
import Toasted from 'vue-toasted';
import App from "./App.vue";
import router from "./router";
import '@/assets/styles/tailwind.css';
import {store} from "./store";

// Layouts
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import EmptyLayout from '@/layouts/EmptyLayout.vue';

createApp(App)
  .component('default-layout', DashboardLayout)
  .component('empty-layout', EmptyLayout)
  .use(Toasted)
  .use(store)
  .use(router)
  .mount("#app");
