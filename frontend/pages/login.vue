<template>
  <section class="section mx-auto color-and-others w-50">
    <div class="container div-is-20">
     
          <h2 class="title-welcome has-text-centered font-opensans">Welcome back!</h2>

          
          <Notification v-if="error" type="danger" :message="error" />

          <form method="post" @submit.prevent="login">

            <div class="field">
              <label class="label">Email</label>

              
               <input type="email" class="input form-control" name="email" v-model="email">
              
            </div>

            <div class="field">
              <label class="label">Password</label>

              <input type="password" class="input form-control" name="password" v-model="password">
             
               <div class="controlcheckbox">
                <label for="rempassword" class="checkbox"> <input type="checkbox" id="rempassword" name="remember" value="rempassword"> Remember password</label>
              </div>
            </div>

            <div class="control">
              <button type="submit" class="btn btn-info btn-block">Log In</button>
            </div>
          </form>

          <div class="has-text-centered" style="margin-top: 20px">
            <p>
              Don't have an account? <nuxt-link to="/register">Register</nuxt-link>
            </p>
          </div>

    </div>
  </section>
</template>

<script>
// import axios
import axios from "axios";
import Notification from "~/components/Notification";
//import Cookies from "js-cookie";

export default {
  components: {
    Notification,
  },
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      this.error = null;
      try {
        const response = await axios.post("http://localhost:5000/login", { 
                password: this.password,
                email: this.email
              });
        
        console.log(response.data[0].role);/*
        if(response.data[0].role== 'suspended'){
                this.suspend= true;
        }else{
          if (response){
            this.$router.push("/");
            this.youarein= true;
            const user = response.data[0].iduser
            Cookies.set("userLogged",(user));
          }
          this.$router.go("/");
        } */
      } catch (err) {
        console.log(err);
      }
    },
  },/*
  computed: {
    userLogged() {
      return (Cookies.get("userLogged"));
     }
  }*/
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap');

.font-opensans{
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 3.2rem;
}
.color-and-others{
  background-color: white !important; 
  text-align: center;
}
</style>