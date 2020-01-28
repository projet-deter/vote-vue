<template>
  <div>
    <h1>Accueil</h1>
    <p>Bienvenue {{ $store.state.userActif.firstname }}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>

</style>