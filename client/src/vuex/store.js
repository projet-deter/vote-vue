import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // données d'authentification
    isAuth: false,
    accessToken: "",
    // données du userActif
    userActif: {
      uuid: "",
      email: "",
      firstname: "",
      lastname: "",
      birthdate: ""
    }
    // votes: []
  },
  mutations: {
    login: (state, payload) => {
      // on rempli les données d'authentification
      state.isAuth = true;
      state.accessToken = payload["Access_token"];
      // on rempli les données du userActif
      state.userActif.uuid = payload["User_actif"]["uuid"];
      state.userActif.email = payload["User_actif"]["email"];
      state.userActif.firstname = payload["User_actif"]["first_name"];
      state.userActif.lastname = payload["User_actif"]["last_name"];
      state.userActif.birthdate = payload["User_actif"]["birth_date"];
    },
    logout: state => {
      // on détruit les données d'authentification
      state.isAuth = false;
      state.accessToken = "";
      // on vide les données du userActif
      state.userActif.uuid = "";
      state.userActif.email = "";
      state.userActif.firstname = "";
      state.userActif.lastname = "";
      state.userActif.birthdate = "";
    }
  }
  // getters: {
  //   auth(state) {
  //     return state.isAuth
  //   }
  // }
});

export default store;
