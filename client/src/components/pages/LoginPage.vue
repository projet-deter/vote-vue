<template>
  <div>
    <h1>Connexion</h1>
    <!-- Formik -->
    <Formik class="form" @on-submit="handleLogin" submit-label="Connexion" :initial-values="loginForm">
      <!-- alert-list -->
      <div class="alert-list">
        <div v-if="$store.state.error">Adresse e-mail ou mot de passe invalide</div>
        <div v-if="$v.$anyDirty && $v.loginForm.email.$error">
          <span v-if="!$v.loginForm.email.required">L'adresse e-mail est obligatoire</span>
          <span v-else-if="!$v.loginForm.email.email">Ce champ doit être une adresse e-mail valide</span>
        </div>
        <div v-if="$v.$anyDirty && $v.loginForm.password.$error">
          <span v-if="!$v.loginForm.password.required">Le mot de passe est obligatoire</span>
        </div>
      </div>
      <!-- form-group | email -->
      <div class="form-group">
        <label for="email">Adresse e-mail</label>
        <Field
          type="email"
          name="email"
          class="form-control"
          placeholder="exemple@domaine.fr"
          v-model.trim="$v.loginForm.email.$model"
        />
      </div>
      <!-- form-group | password -->
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <Field
          type="password"
          name="password"
          class="form-control"
          placeholder="motdepasse"
          v-model.trim="$v.loginForm.password.$model"
        />
      </div>
      <!-- button | submit -->
      <template v-slot:submit-button>
        <button type="submit" class="btn btn-primary">Connexion</button>
      </template>
    </Formik>
  </div>
</template>

<script>
import Formik from "../forms/Formik.vue";
import Field from "../forms/Field.vue";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "LoginPage",
  components: {
    Formik,
    Field
  },
  data: () => ({
    // données du formulaire loginForm
    loginForm: {
      email: "",
      password: ""
    }
  }),
  methods: {
    handleLogin: function() {
      const data = {
        email: this.loginForm.email,
        password: this.loginForm.password
      };
      this.$store.dispatch("login", data).then(() => {
        // redirection vers la home page
        this.$router.push({ name: "home" });
      });
    }
  },
  validations: {
    loginForm: {
      email: { required, email },
      password: { required }
    }
  }
};
</script>

<style scoped>
h1 {
  margin: 20px 0;
  text-align: center;
}
.form {
  margin: auto;
  width: 400px;
}
button {
  float: right;
}
</style>