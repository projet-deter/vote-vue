<template>
  <div class="card">
    <div class="card-body">
      <span class="card-title">{{vote.title}}</span>
      <span>{{vote.desc}}</span>
    </div>
    <div class="card-footer">
      <div class="left-container">
        <p>{{vote.author.firstname}} {{vote.author.lastname}}</p>
      </div>
      <div class="right-container">
        <button
          type="button"
          class="btn btn-outline-danger btn-sm"
          v-on:click.prevent="handleDeleteVote(vote.id)"
          v-if="vote.author.id === $store.state.userActif.id"
        >
          <!-- <span class="glyphicon glyphicon-trash"></span> -->
          Supprimer
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardVote",
  props: {
    vote: Object
  },
  methods: {
    handleDeleteVote: function(idVote) {
      // suppression d'un vote (qui appartient au userActif)
      this.$store.dispatch("deleteVote", idVote);
    }
  }
};
</script>

<style>
.card {
  margin: 0 auto 10px;
  width: 80%;
}
.card-body {
  display: grid;
}
.card-body > .card-title {
  font-weight: bold;
}
.card-footer {
  display: inline-flex;
}
.card-footer > .left-container,
.card-footer > .right-container {
  width: 50%;
}
.card-footer > .left-container > p {
  margin: 0;
}
.card-footer > .right-container {
  text-align: end;
}
.card-footer > .right-container > button {
  margin: 0;
}
</style>