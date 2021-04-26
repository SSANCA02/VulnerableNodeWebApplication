<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
            <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <div class="container">
      <ul class="navbar-nav mr-auto">
        <nuxt-link class="nav-link" to="/"> <icon-base icon-name="Dashboard"><icon-dashboard /></icon-base> Home</nuxt-link>
      <nuxt-link class="nav-link" to="/about"> <icon-base icon-name="About"><icon-security /></icon-base> About</nuxt-link>
      <nuxt-link class="nav-link" to="/contact"> <icon-base icon-name="Contact"><icon-login /></icon-base> Contact</nuxt-link>
      </ul>
      
      <ul class="navbar-nav ml-auto">
          <client-only>
          <nuxt-link v-if="userLogged" class="nav-link" to="/users"> <icon-base icon-name="Register"><icon-dashboard /></icon-base>Users</nuxt-link>
          <nuxt-link v-if="userLogged" class="nav-link" to="/myposts"> <icon-base icon-name="My posts"><icon-projects /></icon-base>My posts</nuxt-link>
          <nuxt-link v-if="userLogged" class="nav-link" to="/createpost"> <icon-base icon-name="Create post"><icon-reports /></icon-base> Create post</nuxt-link>
          <nuxt-link v-if="userLogged" class="nav-link" to="/profile"> <icon-base icon-name="Profile"><icon-profile /></icon-base> My profile</nuxt-link>
          </client-only>
          <div v-if="userLogged">
            <a class="nav-link" @click="logout"> <icon-base icon-name="Login"><icon-login /></icon-base>Logout</a>
            
          </div>
          
          <template v-else> 
            <nuxt-link class="nav-link" to="/register"> <icon-base icon-name="Register"><icon-register /></icon-base> Register</nuxt-link>
            <nuxt-link class="nav-link" to="/login"> <icon-base icon-name="Login"><icon-login /></icon-base> Log In</nuxt-link>
          </template>
          
       </ul>
      
    </div>
  </nav>
  <img class="w-100"  href="/" :src="require(`@/static/banner1.jpg`)">

</div>
</template>

<script>
import { mapGetters } from "vuex";
import Cookies from "js-cookie";
import axios from "axios";

export default {
  data(){
    return {
      LOGO: {
        banner: 'logoPlexicus.png'
      },
      
    }
  }, 
  computed: {
   // ...mapGetters(["isAuthenticated", "loggedInUser"]),
    userLogged() {
      return Cookies.get("userLogged");
    }
  },
  mounted() {  
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    } 
  }, 
  methods: {
    async logout() {
      try {
        await axios.get("http://localhost:5000/logout",
        );
      } catch (error) {
        console.log(error);
      }
      
      Cookies.remove('userLogged');
      
      this.$router.push("/");
      this.$router.go();
      
    }
  } 
};
</script>