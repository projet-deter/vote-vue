import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // données du userActif
    userActif: {
      uuid: "",
      email: "",
      firstname: "",
      lastname: "",
      birthdate: ""
    },
    accessToken: ""

    // votes: []
  },
  mutations: {
    login: (state, payload) => {
      // on rempli les données du userActif
      state.userActif.uuid = payload["User_actif"]["uuid"];
      state.userActif.email = payload["User_actif"]["email"];
      state.userActif.firstname = payload["User_actif"]["first_name"];
      state.userActif.lastname = payload["User_actif"]["last_name"];
      state.userActif.birthdate = payload["User_actif"]["birth_date"];
      // on récupère l'accessToken
      state.accessToken = payload["Access_token"];
    },
    logout: state => {
      // on vide les données du userActif
      state.userActif.uuid = "";
      state.userActif.email = "";
      state.userActif.firstname = "";
      state.userActif.lastname = "";
      state.userActif.birthdate = "";
      // on détruit l'accessToken
      state.accessToken = "";
    }
  }
});
