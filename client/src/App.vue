<template>
  <div id="app">
    <router-link :to="{name: 'home'}" v-if="$store.state.userActif.uuid">Accueil</router-link>
    <a v-on:click.prevent="logout" v-if="$store.state.userActif.uuid">Déconnexion</a>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    logout: function() {
      // on détruit les infos de connexion
      this.$store.commit("logout");
      // redirection vers la login page
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
