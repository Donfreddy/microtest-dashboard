import {createApp} from "vue";
import Toast from "vue-toastification";
import 'vue-toastification/dist/index.css';
import App from "./App.vue";
import router from "./router";
import '@/assets/styles/tailwind.css';
import {store} from "./store";

// Layouts
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import EmptyLayout from '@/layouts/EmptyLayout.vue';

const options = {
  position: "bottom-right",
  transition: "Vue-Toastification__fade",
  timeout: 3000,
  maxToasts: 10,
  hideProgressBar: true,
};

createApp(App)
  .component('default-layout', DashboardLayout)
  .component('empty-layout', EmptyLayout)
  .use(Toast, options)
  .use(store)
  .use(router)
  .mount("#app");
