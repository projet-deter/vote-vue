import Vue from "vue";
import Vuex from "vuex";
import { http } from "../axios/http-common";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    error: "",
    // données d'authentification
    isAuth: false,
    accessToken: "",
    // données du userActif
    userActif: {},
    // liste des votes
    votes: [],
    // données des modals
    isOpenForm: false
  },
  actions: {
    login: (context, data) => {
      return new Promise((resolve, reject) => {
        http
          .post("login", data)
          .then(response => {
            context.state.error = "";
            // récupération des données du token et du userActif
            context.commit("setAuthData", response.data["Access_token"]);
            context.commit("setUserActifData", response.data["User_actif"]);
            resolve();
          })
          .catch(error => {
            context.state.error = error;
            reject();
          });
      });
    },
    logout: context => {
      context.commit("setAuthData", null);
      context.commit("setUserActifData", null);
    },
    getVotes: context => {
      http
        .get("votes")
        .then(response => {
          context.state.error = "";
          // création de la liste des votes
          context.commit("createVotes", response.data);
        })
        .catch(error => {
          context.state.error = error;
        });
    },
    postVote: (context, data) => {
      return new Promise((resolve, reject) => {
        http
          .post("votes", data)
          .then(response => {
            // ajout du nouveau vote dans la liste votes
            context.commit("addVote", response.data);
            resolve();
          })
          .catch(error => {
            context.state.error = error;
            reject();
          });
      });
    },
    deleteVote: (context, idVote) => {
      http
        .delete("votes/" + idVote)
        .then(() => {
          // on retire le vote de la liste votes
          context.commit("removeVote", idVote);
        })
        .catch(error => {
          context.state.error = error;
        });
    }
  },
  mutations: {
    setAuthData: (state, payload) => {
      // on rempli les données d'authentification
      state.isAuth = payload ? true : false;
      state.accessToken = payload;
    },
    setUserActifData: (state, payload) => {
      // on rempli les données du userActif
      state.userActif = payload ? 
      {
        id: payload["id"],
        uuid: payload["uuid"],
        email: payload["email"],
        firstname: payload["first_name"],
        lastname: payload["last_name"],
        birthdate: payload["birth_date"]
      } : {};
    },
    createVotes: (state, payload) => {
      // ajout de chaque Object vote dans la liste votes
      state.votes = payload.map(item => {
        const author = item["author"];
        return {
          id: item.id,
          title: item.title,
          desc: item.desc,
          author: {
            id: author["id"],
            uuid: author["uuid"],
            email: author["email"],
            firstname: author["first_name"],
            lastname: author["last_name"],
            birthdate: author["birth_date"]
          }
        };
      });
    },
    addVote: (state, payload) => {
      const author = payload["author"];
      // ajout du nouvel Object vote dans la liste votes
      state.votes.push({
        id: payload.id,
        title: payload.title,
        desc: payload.desc,
        author: {
          id: author["id"],
          uuid: author["uuid"],
          email: author["email"],
          firstname: author["first_name"],
          lastname: author["last_name"],
          birthdate: author["birth_date"]
        }
      });
    },
    removeVote: (state, payload) => {
      // suppression d'un Object vote de la liste votes
      state.votes = state.votes.filter(x => x.id === payload["ID_vote"]);
    }
  }
});

export default store;
