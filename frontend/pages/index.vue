<template>
    <!-- Page Content -->
  <div class="container">

    <!-- Heading Row -->
    <div class="row align-items-center my-5">
      <div class="col-lg-7">
        <img class="img-fluid rounded mb-4 mb-lg-0 zoom" :src="require(`@/static/nature1.jpg`)" alt="">
      </div>
      <!-- /.col-lg-8 -->
      <div  class="col-lg-5">
        <h1 class="font-weight-light font-opensans">{{ postsreverse.title}}</h1>
        <p >{{ postsreverse.brief}}</p>
         <a class="btn btn-green" href="#" @click="$router.push({path:'/myposts/' + posts.slice().reverse()[0].idpost })">See full post</a>
        
      </div>
      <!-- /.col-md-4 -->
    </div>
    <!-- /.row -->

    <!-- Call to Action Well -->
    <div class="card  my-gradient text-white  my-5 py-4 text-center">
      <div class="card-body ">
        <p class="text-white text-center m-0">Do you want to be part of our community and publish your own publications?  <nuxt-link class="nav-link navbar-nav" to="/login"> Log In</nuxt-link></p>
      </div>
    </div>

    <!-- Content Row -->
    <div class="row" >
      <div class="col-md-4 mb-5" v-for="post in posts.slice().reverse()" :key="post.id">
        <div v-if="post.status==0" class="card h-100">
          <div class="card-body">
            <h2 class="card-title">{{post.title}}</h2>
            <h5>{{post.brief}}</h5>
            <p class="card-text">{{post.content.substring(0,120)+"..."}}</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-green btn-sm"  @click="$router.push({path:'/myposts/' + post.idpost })">See full post</a>
          </div>
        </div>
      </div>
      <!-- /.col-md-4 -->
      

    </div>
    <!-- /.row -->
 
  </div>
  <!-- /.container -->
  
</template>

<script>
// import axios
import axios from "axios";

    export default {
        name: 'Content',
        data () {
          return{
            posts: [],
            postsreverse: [],
          }
        },
        created(){
          this.getPosts();
        },
        methods:{
          // Get All Products
          async getPosts() {
            try {
              const response = await axios.get("http://localhost:5000/postspublic");
              this.posts = response.data;
              this.postsreverse = this.posts.slice().reverse()[0];
            } catch (err) {
              console.log(err);
            }
          },
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap');

.font-opensans{
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 3.2rem;
}

.zoom {
  transition: .5s ease;
  object-fit: cover;
  width: 900px;
  height: 280px;
}
.btn-green{
  background:  rgba(145, 192, 16, 0.959);
  color: white;
}

.container:hover .zoom {
  opacity: 0.8;
}

.navbar-nav {
  color: orange !important;
  }

.my-gradient{
  background-color: grey;
   background-image: linear-gradient(to right, rgba(93, 86, 86, 0), rgb(56, 51, 51));
}
  
</style>