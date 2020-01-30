<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="left-container">
      <p class="navbar-brand">Bienvenue {{ $store.state.userActif.firstname }}</p>
    </div>
    <div class="right-container">
      <!-- <router-link :to="{name: 'home'}" v-if="$store.state.isAuth">Accueil</router-link> -->
      <button
        type="button"
        class="btn btn-outline-danger btn-sm"
        v-on:click.prevent="logout"
        v-if="$store.state.isAuth"
      >
        <!-- <span class="glyphicon glyphicon-log-out"></span> -->
        Deconnexion
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout: function() {
      // on détruit les infos de connexion
      this.$store.dispatch("logout");
      // redirection vers la login page
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style scoped>
.navbar {
  display: inline-flex;
  width: 100%;
}
.left-container,
.right-container {
  width: 50%;
}
.left-container > .navbar-brand {
  margin: 0;
}
.right-container {
  text-align: end;
}
</style>