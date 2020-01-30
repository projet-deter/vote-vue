<template>
  <div class="card">
    <div class="card-name">{{vote.title}}</div>
    <div class="card-content">{{vote.desc}}</div>
    <div class="card-footer">
      <p>{{vote.author.firstname}} {{vote.author.lastname}}</p>
      <a
        v-on:click.prevent="handleDeleteVote(vote.id)"
        v-if="vote.author.id === $store.state.userActif.id"
      >Delete</a>
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
  margin: 0 auto;
  padding: 5px 3px;
  width: 80%;
  border: solid 1px #2c3e50;
}
.card:first-child {
  margin-top: 10px;
}
.card-name {
  width: 100%;
  font-size: 16px;
  text-align: left;
  color: #2c3e50;
}
p {
  margin: 0;
}
</style>