<template>
        <!-- Page Content -->
  <div class="container">

    <!-- Content Row -->
    <div class="row mt-5" >
      <div class="col-md-4 mb-5" v-for="user in users" :key="user.id">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">{{user.email}}</h2>
            <h5>{{user.name}}</h5>
            <h5>{{user.surname}}</h5>
            
          </div>
          <div class="card-footer">
            <a href="#" v-if="user.role!='suspended'" class="btn btn-danger btn-sm"  @click="suspendUser(user.iduser)">Suspend</a>
            <a href="#" v-if="user.role=='suspended'" class="btn btn-danger btn-sm"  @click="activateUser(user.iduser)">Activate</a>
            <a v-if="user.role=='suspended'" class="btn pull-right btn-warning btn-sm">Suspended</a>
            <a v-if="user.role=='admin'" class="btn pull-right btn-green btn-sm">Admin</a>
            <a v-if="user.role=='user'" class="btn pull-right btn-info btn-sm">User</a>
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
        name: 'Users',
        data () {
          return{
            users: [],
          }
        },
        created(){
          this.getUsers();
        },
        methods:{
          // Get All Products
          async getUsers() {
            try {
              const response = await axios.get(`http://localhost:5000/users`, {
              });
              this.users = response.data;
            } catch (err) {
              console.log(err);
            }
          },
          // Delete Post
          async suspendUser(id) {
            try {
              await axios.put(`http://localhost:5000/editUser/${id}`, {
                role: 'suspended',
              });
              this.getUsers();
            } catch (err) {
              console.log(err);
            }
          },
          async activateUser(id) {
            try {
              await axios.put(`http://localhost:5000/editUser/${id}`, {
                role: 'user',
              });
              this.getUsers();
            } catch (err) {
              console.log(err);
            }
          },
        },
        computed: {
            userLogged() {
            return Cookies.get("userLogged");
            }
        }
    }
</script>