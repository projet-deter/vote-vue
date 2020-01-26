import VueRouter from "vue-router";
// import HeaderVue from "../components/Partial/HeaderVue";
import HomePageVue from "../components/Page/HomePage.vue";
import LoginPageVue from "../components/Page/LoginPage.vue";
// import VoteListVue from "../components/Vote/VoteListVue";
// import VoteDetailsVue from "../components/Vote/VoteDetailsVue";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePageVue
    },
    {
      path: "/login",
      name: "login",
      component: LoginPageVue
    }
    // {
    //   path: "/votes",
    //   name: "vote",
    //   components: {
    //     header: HeaderVue,
    //     default: VoteListVue
    //   },
    //   children: [
    //     {
    //       path: "/:id",
    //       components: {
    //         header: VoteDetailsVue
    //       }
    //     }
    //   ]
    // }
  ]
});
