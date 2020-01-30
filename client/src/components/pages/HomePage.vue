<template>
  <div class="home-body">
    <button type="button" class="btn btn-primary btn-md" v-on:click.prevent="openModalForm">Ajouter</button>
    <p v-if="!$store.state.votes.length">Pas de vote</p>
    <div class="votes-list" v-if="$store.state.votes.length">
      <CardVote v-for="vote in $store.state.votes" v-bind:key="vote.id" v-bind:vote="vote" />
    </div>
    <ModalForm />
  </div>
</template>

<script>
import CardVote from "../cards/CardVote.vue";
import ModalForm from "../modals/ModalForm.vue";

export default {
  name: "HomePage",
  components: {
    ModalForm,
    CardVote
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
.home-body {
  display: grid;
  margin: 0 20px;
}
button {
  margin: 10px 0;
  width: fit-content;
  justify-self: right;
}
.votes-list {
  padding: 0 20px;
}
</style>