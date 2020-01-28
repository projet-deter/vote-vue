<template>
  <div class="menu">
    <div class="left-container">
      <p>Bienvenue {{ $store.state.userActif.firstname }}</p>
    </div>
    <div class="right-container">
      <router-link :to="{name: 'home'}" v-if="$store.state.isAuth">Accueil</router-link>
      <a v-on:click.prevent="logout" v-if="$store.state.isAuth">Déconnexion</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
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

<style scoped>
.menu {
  display: inline-flex;
  width: 100%;
  background-color: lightgrey;
}
.left-container {
  width: 50%;
  font-weight: bold;
  font-size: 13px;
}
.right-container {
  width: 50%;
}
</style>