<template>
  <section class="container is-max-desktop">
    <div class="columns is-mobile is-centered">
      <div class="column is-half">
        <h1 class="title is-1">Register</h1>

        <b-field label="Name">
          <b-input v-model="email"></b-input>
        </b-field>

        <b-field label="Password">
          <b-input type="password" v-model="password" password-reveal>
          </b-input>
        </b-field>

        <div class="buttons">
          <b-button type="is-primary" @click="submitRegister"
            >Register</b-button
          >
        </div>

        <router-link to="/">Already registered? go to login</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { auth } from "@/firebase";

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      errorCode: null,
      errorMessage: null
    };
  },
  computed: {
    err() {
      return `${this.errorCode}: ${this.errorMessage}`;
    }
  },
  methods: {
    submitRegister() {
      if (!this.email || !this.password) return;

      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push("secure-area");
        })
        .catch(error => {
          this.errorCode = error.code;
          this.errorMessage = error.message;

          this.$buefy.toast.open({
            duration: 5000,
            message: this.err,
            position: "is-bottom-right",
            type: "is-danger"
          });
        });
    }
  }
};
</script>
