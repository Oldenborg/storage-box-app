<template>
  <section class="container is-max-desktop">
    <div class="columns is-mobile is-centered">
      <div class="column is-half">
        <h1 class="title is-1">Secure area</h1>

        <div class="buttons">
          <b-button type="is-primary" @click="logout">Logout</b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { auth } from "@/firebase";
export default {
  name: "SecureArea",
  data() {
    return {
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
    logout() {
      auth
        .signOut()
        .then(() => {
          this.$router.push("/");
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
