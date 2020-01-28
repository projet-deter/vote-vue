<template>
  <modal
    title="Nouveau vote"
    :open="$store.state.isOpenForm"
    :onClose="onCancel"
    :onSubmit="addVote"
  >
    <div class="grid-row">
      <label for="title">Title</label>
      <input id="title" v-model="title" />
    </div>
    <div class="grid-row">
      <label for="desc">Description</label>
      <input id="desc" v-model="desc" />
    </div>
  </modal>
</template>

<script>
import { http } from "../../axios/http-common";
import ModalVue from "./Modal.vue";

export default {
  name: "ModalVoteForm",
  components: {
    modal: ModalVue
  },
  data: () => ({
    // données du formulaire
    title: "",
    desc: ""
  }),
  methods: {
    onCancel: function() {
      this.$store.state.isOpenForm = false;
    },
    addVote: function() {
      const data = {
        title: this.title,
        desc: this.desc,
        author_id: this.$store.state.userActif.id
      };
      http
        .post("votes", data)
        .then(response => {
          this.$store.commit("postVote", response.data);
          this.onCancel();
        })
        .catch(error => {
          this.$store.state.error = error;
        });
    }
  }
};
</script>

<style>
</style>