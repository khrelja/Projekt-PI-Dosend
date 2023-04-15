import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Flipcard from "./components/Flipcard.vue";
import Croppa from "vue-croppa";

const app = createApp(App);
app.use(router);
app.use(Croppa);
app.mount("#app");

/* croppa ne radi. niti najsimple kod za ga koristit nego daje neki error da component nema template */
