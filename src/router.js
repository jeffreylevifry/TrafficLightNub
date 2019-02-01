import Vue from "vue";
import Router from "vue-router";
import LoginComponent from "./views/login.vue";
import SecureComponent from "./views/secure.vue";
import FrontEnd from "./views/frontEnd.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: {
        name: "login"
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginComponent
    },
    {
      path: "/frontEnd",
      name: "frontEnd",
      component: FrontEnd
    },
    {
      path: "/secure",
      name: "secure",
      component: SecureComponent
    }
  ]
});
