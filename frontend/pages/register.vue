<template>
  <section class="section mx-auto color-and-others w-50">
    <div class="container div-is-20 ">
      
          <h2 class="title-welcome has-text-centered font-opensans">Register!</h2>

          <Notification v-if="success" type="success" :message="success" />
          <Notification v-if="error" type="danger" :message="error" />

          <form  v-if="!success" method="post" @submit.prevent="register">

            <div class="field">
              <label class="label">Username</label>

              <div class="control">
                <input type="text" class="input form-control" name="username" v-model="username" required>
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>

              <div class="control">
                <input type="email" class="input form-control" name="email" v-model="email" required>
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>

              <div class="control">
                <input type="password" class="input form-control" name="password" v-model="password" required>
              </div>
            </div>

            <div class="control">
              <button type="submit" class="btn btn-info btn-block mt-3">Register</button>
            </div>
          </form>

          <div class="has-text-centered" style="margin-top: 20px">
            Already got an account? <nuxt-link to="/login">Login</nuxt-link>
          </div>
        </div>
  </section>
</template>

<script>
// import axios
import axios from "axios";
import Notification from "~/components/Notification";

export default {
  components: {
    Notification,
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      success: null,
      error: null,
    };
  },
  methods: {
    async register() {
      this.error = null;
      try {
        this.$axios.setToken(false);
        await axios.post("http://localhost:5000/user", {
                password: this.password,
                name: this.name,
                surname: this.surname,
                role: 'user',
                email: this.email
              });
        this.success = `Registration successful. \
        Please log in.`;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style >

@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap');

.font-opensans{
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 4.6rem !important;
}

.color-and-others{
  background-color: white !important; 
  text-align: center;
}
</style>