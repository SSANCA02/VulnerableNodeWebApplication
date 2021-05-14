<template>
        <!-- Page Content -->
  <div class="container">
    <img v-if="unauthorized" class="mt-5 ml-auto center" href="/" :src="require(`@/static/401.jpg`)">
    <!-- Content Row -->
    <div class="row mt-5" >
      <div class="col-md-4 mb-5" v-for="post in posts" :key="post.id">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">{{post.title}}</h2>
            <h5>{{post.brief}}</h5>
            <p class="card-text">{{post.content.substring(0,120)+"..."}}</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-green btn-sm" @click="$router.push({path:'../view/'+post.idpost})">See full post</a>
            <a href="#" class="btn btn-warning btn-sm" @click="$router.push({path:'../edit/'+post.idpost})">Edit</a> 
            <a href="#" class="btn btn-danger btn-sm" @click="deletePost(post.idpost)">Delete</a> 
            <a href="#" v-if="post.status==1" class="btn pull-right btn-danger btn-sm">Private</a>
            <a href="#" v-if="post.status==0" class="btn pull-right btn-info btn-sm">Public</a>
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

import Cookies from "js-cookie";
// import axios
import axios from "axios";

    export default {
        name: 'MyPosts',
        data () {
          return{
            posts: [],
            unauthorized: false,
          }
        },
        created(){
          axios.post(`http://localhost:5000/myposts`)
          .then((response) =>{
            this.getPosts();
          })
          .catch((error) => {
            if (error.response.status === 401) {
              this.unauthorized=true;
            } else {
              this.getPosts();
            }
          })
            
        },
        methods:{
          // Get All Products
          async getPosts() {
            try {
              const response = await axios.post(`http://localhost:5000/myposts`);
              this.posts = response.data;
             // }
            } catch (err) {
                console.log(err);
            }
          },
          // Delete Post
          async deletePost(id) {
            try {
              await axios.delete(`http://localhost:5000/post/${id}`);
              this.getPosts();
            } catch (err) {
              console.log(err);
            }
          },
        },
    }
</script>


<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>