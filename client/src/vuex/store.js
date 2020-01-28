import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // données d'authentification
    isAuth: false,
    accessToken: "",
    // données du userActif
    userActif: {},
    // liste des votes
    votes: []
  },
  mutations: {
    login: (state, payload) => {
      // on rempli les données d'authentification
      state.isAuth = true;
      state.accessToken = payload["Access_token"];
      // on rempli les données du userActif
      state.userActif.id = payload["User_actif"]["id"];
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
      state.userActif = {};
    },
    getAllVotes: (state, payload) => {
      state.votes = payload.map(item => {
        return {
          id: item.id,
          title: item.title,
          desc: item.desc,
          author: {
            id: item["author"]["id"],
            uuid: item["author"]["uuid"],
            email: item["author"]["email"],
            firstname: item["author"]["first_name"],
            lastname: item["author"]["last_name"],
            birthdate: item["author"]["birth_date"]
          }
        };
      });
    },
    deleteVote: (state, payload) => {
      state.votes = state.votes.filter(x => x.id === payload['ID_vote']);
    }
  }
});

export default store;
