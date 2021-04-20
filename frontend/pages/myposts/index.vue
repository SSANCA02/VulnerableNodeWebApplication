<template>
        <!-- Page Content -->
  <div class="container">

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
            <a href="#" class="btn btn-green btn-sm" @click="$router.push({path:'/myposts/'+post.idpost})">See full post</a>
            <a href="#" class="btn btn-warning btn-sm" @click="$router.push({path:'/myposts/edit/'+post.idpost})">Edit</a> 
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
        name: 'Content',
        data () {
          return{
            posts: [],
          }
        },
        created(){
          this.getPosts();
        },
        methods:{
          // Get All Products
          async getPosts() {
            try {
              const response = await axios.post(`http://localhost:5000/myposts`, {
                id: this.userLogged[0],
              });
              this.posts = response.data;
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
        computed: {
            userLogged() {
              console.log(Cookies.get("userLogged"));
            return Cookies.get("userLogged");
            }
        }
    }
</script>