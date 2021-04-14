<template>
  <section class="container is-max-desktop">
    <div class="columns is-mobile is-centered">
      <div class="column is-half">
        <h1 class="title is-1">Register</h1>

        <b-field label="Name">
          <b-input v-model="name"></b-input>
        </b-field>

        <b-field label="Password">
          <b-input type="password" v-model="password" password-reveal>
          </b-input>
        </b-field>

        <div class="buttons">
          <b-button type="is-primary">Register</b-button>
        </div>
        <router-link to="/">Already registered? go to login</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      name: null
    };
  }
};
</script>
