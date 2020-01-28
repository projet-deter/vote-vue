import Vue from "vue";
import Router from "vue-router";
import store from "../vuex/store";

import HeaderVue from "../components/partials/Header.vue";
import HomePageVue from "../components/pages/HomePage.vue";
import LoginPageVue from "../components/pages/LoginPage.vue";

import middlewarePipeline from "../middlewares/middlewarePipeline";
import auth from "../middlewares/auth";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: HeaderVue,
        default: HomePageVue
      },
      meta: {
        middleware: [auth]
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginPageVue
    }
  ]
});

router.beforeEach((to, from, next) => {
  const middleware = to.meta.middleware;
  if (!middleware) {
    return next();
  }

  const context = { to, from, next, store };
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  });
});

export default router;
