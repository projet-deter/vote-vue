<template>
  <div class="card">
    <div class="card-name">{{vote.title}}</div>
    <div class="card-content">{{vote.desc}}</div>
    <div class="card-footer">
      <p>{{vote.author.firstname}} {{vote.author.lastname}}</p>
      <a
        v-on:click.prevent="deleteVote(vote.id)"
        v-if="vote.author.id === $store.state.userActif.id"
      >Delete</a>
    </div>
  </div>
</template>

<script>
import { http } from "../../axios/http-common";

export default {
  name: "CardVote",
  props: {
    vote: Object
  },
  methods: {
    deleteVote: function(idVote) {
      http.delete("votes/" + idVote)
        .then(() => {
          // on retire le vote du store (liste votes)
          this.$store.commit("deleteVote");
        })
        .catch(error => {
          this.$store.state.error = error;
        });
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