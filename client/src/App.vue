<template>
  <div id="app">
    <router-link :to="{name: 'home'}">Home</router-link>
    <!-- <router-link :to="{name: 'votes'}">Votes</router-link> -->
    <!-- <router-link :to="{name: 'newVote'}">Voter</router-link> -->
    <!-- <router-link :to="{name: 'profil', params: {id: 1}}">Profile</router-link> -->
    <router-link :to="{name: 'login'}">Login</router-link>
    <router-view></router-view>
    <LoginVue/>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
