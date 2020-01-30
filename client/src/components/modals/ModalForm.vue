<template>
  <Modal title="Nouveau vote" :open="$store.state.isOpenForm" :onClose="onCancel">
    <!-- Formik -->
    <Formik @on-submit="handleNewVote" submit-label="Créer" :initial-values="voteForm">
      <!-- alert-list -->
      <div class="alert-list">
        <div v-if="$v.$anyDirty && $v.voteForm.title.$error">
          <span v-if="!$v.voteForm.title.required">Le titre du vote est obligatoire</span>
        </div>
        <div v-if="$v.$anyDirty && $v.voteForm.desc.$error">
          <span v-if="!$v.voteForm.desc.required">La description du vote est obligatoire</span>
        </div>
      </div>
      <!-- form-group | title -->
      <div class="form-group">
        <label for="title">Titre</label>
        <Field
          type="text"
          name="title"
          class="form-control"
          placeholder="Titre du vote"
          v-model.trim="$v.voteForm.title.$model"
        />
      </div>
      <!-- form-group | desc -->
      <div class="form-group">
        <label for="desc">Description</label>
        <Field
          type="textarea"
          name="desc"
          class="form-control"
          placeholder="Description du vote..."
          v-model.trim="$v.voteForm.desc.$model"
        />
      </div>
      <!-- button | submit -->
      <template v-slot:submit-button>
        <div class="modal-footer">
        <button class="btn btn-outline-primary" v-on:click.prevent="onCancel">Annuler</button>
        <button type="submit" class="btn btn-primary">Créer</button>
        </div>
      </template>
    </Formik>
  </Modal>
</template>

<script>
import Modal from "./Modal.vue";
import Formik from "../forms/Formik.vue";
import Field from "../forms/Field.vue";
import { required } from "vuelidate/lib/validators";

export default {
  name: "ModalForm",
  components: {
    Modal,
    Formik,
    Field
  },
  data: () => ({
    // données du formulaire voteForm
    voteForm: {
      title: "",
      desc: ""
    }
  }),
  methods: {
    onCancel: function() {
      this.$store.state.isOpenForm = false;
    },
    handleNewVote: function() {
      const data = {
        title: this.voteForm.title,
        desc: this.voteForm.desc,
        author_id: this.$store.state.userActif.id
      };
      // Ajout d'un nouveau vote
      this.$store.dispatch("postVote", data).then(() => {
        this.onCancel();
      });
    }
  },
  validations: {
    voteForm: {
      title: { required },
      desc: { required }
    }
  }
};
</script>

<style>
.modal-footer {
  padding: 8px 0 0;
}
</style>