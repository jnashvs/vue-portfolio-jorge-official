import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "jquery";
import "popper.js";
import "bootstrap";
import "./assets/app.scss";
import "./assets/app.js";


//************ importa td componentes k nta bai usa ************* */
Vue.component("Navbar", require("./components/Layouts/Navbar.vue").default);
Vue.component("Footer", require("./components/Layouts/Footer.vue").default);
Vue.component("modal", require("./components/_modal.vue").default);
Vue.component("New", require("./components/New.vue").default);


/********** pop over component */

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
