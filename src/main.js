import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { VueCsvImportPlugin } from "vue-csv-import";

const app = createApp(App);

app.use(router).use(VueCsvImportPlugin);

app.mount("#app");
