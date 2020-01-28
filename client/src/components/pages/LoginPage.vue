<template>
  <div>
    <h1>Connexion</h1>
    <p class="error" v-if="error">{{error}}</p>
    <form>
      <div class="grid-row">
        <label for="email">Adresse e-mail</label>
        <input id="email" type="email" v-model="email" />
      </div>
      <div class="grid-row">
        <label for="password">Mot de passe</label>
        <input id="password" type="password" v-model="password" />
      </div>
    </form>
    <button v-on:click.prevent="login">Connexion</button>
  </div>
</template>

<script>
import { HTTP } from "../../http-constants";

export default {
  name: "Login",
  data: () => ({
    // données du formulaire
    email: "",
    password: "",
    // erreur
    error: ""
  }),
  methods: {
    login: function() {
      const data = {
        email: this.email,
        password: this.password
      };
      HTTP.post("login", data)
        .then(response => {
          this.error = "";
          // récupération des données du userActif
          this.$store.commit("login", response.data);
          // redirection vers la home page
          this.$router.push({ name: "home" });
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>

<style scoped>
.grid-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
.grid-row > label {
  font-weight: bold;
  font-size: 13px;
  color: #2c3e50;
  text-align: left;
}
.error {
  color: red;
}
</style>