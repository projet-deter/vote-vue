<template>
  <div>
    <button v-on:click.prevent="openModalForm">Ajouter</button>
    <p v-if="!$store.state.votes.length">Pas de vote</p>
    <div class="votes-container" v-if="$store.state.votes.length">
      <card-vote v-for="vote in $store.state.votes" v-bind:key="vote.id" v-bind:vote="vote" />
    </div>
    <modal-form />
  </div>
</template>

<script>
import CardVoteVue from "../cards/CardVote.vue";
import ModalVoteFormVue from "../modals/ModalVoteForm.vue";

export default {
  name: "HomePage",
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
      // récupération de la liste des votes
      this.$store.dispatch("getVotes");
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