<template>
  <div>
    <button v-on:click.prevent="openModalForm">Ajouter</button>
    <p v-if="!$store.state.votes.length">Pas de vote</p>
    <div class="votes-container" v-if="$store.state.votes.length">
      <card-vote
        v-for="vote in $store.state.votes"
        v-bind:key="vote.id"
        v-bind:vote="vote"
      />
    </div>
  </div>
</template>

<script>
import { http } from "../../axios/http-common";
import CardVote from "../partials/CardVote.vue";

export default {
  name: "Home",
  components: {
    "card-vote": CardVote
  },
  data: () => ({
    error: null
  }),
  created() {
    this.fetchVotes();
  },
  methods: {
    fetchVotes: function() {
      http.get("votes")
        .then(response => {
          this.error = "";
          // récupération de la liste des votes
          this.$store.commit("getAllVotes", response.data);
        })
        .catch(error => {
          this.error = error;
        });
    },
    openModalForm: function() {}
  }
};
</script>

<style>
</style>