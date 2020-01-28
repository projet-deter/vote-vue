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
    <modal-form />
  </div>
</template>

<script>
import { http } from "../../axios/http-common";
import CardVoteVue from "../cards/CardVote.vue";
import ModalVoteFormVue from '../modals/ModalVoteForm.vue';

export default {
  name: "Home",
  components: {
    "modal-form": ModalVoteFormVue,
    "card-vote": CardVoteVue
  },
  data: () => ({
    voteActif: {}
  }),
  created() {
    this.fetchVotes();
  },
  updated() {
    this.fetchVotes();
  },
  methods: {
    fetchVotes: function() {
      http.get("votes")
        .then(response => {
          this.$store.state.error = "";
          // récupération de la liste des votes
          this.$store.commit("getAllVotes", response.data);
        })
        .catch(error => {
          this.$store.state.error = error;
        });
    },
    openModalForm: function() {
      // on ouvre la modal
      this.$store.state.isOpenForm = true;
    }
  }
};
</script>

<style>
</style>