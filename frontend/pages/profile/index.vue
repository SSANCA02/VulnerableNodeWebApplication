<template>
    <div class="container contact-form">
            <div class="contact-image">
                <img :src="require(`@/static/profile12.png`)" alt="rocket_contact"/>
            </div>
            <form class="d-flex align-items-center flex-column"  @submit.prevent="changePassword">
                <h3>- My profile -</h3>
                <p v-if="error" class="text-center btn-lg btn-block btn-danger mb-5">Passwords don't match or they are too short (less than 5 characters).</p>
                <p v-if="youarein" class="text-center btn-lg btn-block btn-success mb-5">Password changed!</p>
                        <div class="form-group w-50">
                            <label  class="form-control" value="" ><span class="badge  orange-dark mr-4">Name</span>{{this.user.name}} </label>
                        </div>
                        <div class="form-group w-50">
                            <label  class="form-control" value="" ><span class="badge  orange-dark mr-4">Surname</span>{{this.user.surname}} </label>
                        </div>
                        <div class="form-group w-50">
                            <label  class="form-control" value="" ><span class="badge  orange-dark mr-4">Email</span>{{this.user.email}} </label>
                        </div>
                        <div class="form-group w-50">
                            <label  class="form-control btn-group h-50" value="" ><span class="badge orange-dark mr-4 mt-2 h-25">New password</span><input type="password" v-model="password" class="form-control" placeholder="New password"/> </label>
                        </div>
                        <div class="form-group w-50">
                            <label  class="form-control btn-group h-50" value="" ><span class="badge orange-dark mr-4 mt-2 h-25">Repeat password</span><input type="password" v-model="password2" class="form-control" placeholder="Repeat new password"/> </label>
                        </div>
                        <div class="form-group w-50">
                            <input type="submit" name="btnSubmit" class="btnContact" value="Change password" />
                        </div>
            </form>
</div>
</template>

<script>
import Cookies from "js-cookie";
// import axios
import axios from "axios";

    export default {
        name: 'MyProfile',
        data () {
          return{
            user: [],
            password: '',
            password2: '',
            error: false,
            youarein:false
          }
        },
        created(){
          this.getUser();
        },
        methods:{
          // Get user info
          async getUser() {
            try {
                
              const response = await axios.get(`http://localhost:5000/users/${this.userLogged[0]}`);
              this.user = response.data[0];
            } catch (err) {
              console.log(err);
            }
          },
          async changePassword(){

            if(this.password == this.password2 && this.password.trim()!='' && this.password.length>5){
            this.error=false;
             
              try {
              await axios.put(`http://localhost:5000/editPassword/${this.userLogged[0]}`, {
                  password: this.password,
              });
                
               this.youarein = true;
            } catch (err) {
              console.log(err);
            }
               
            }else{
                this.error=true;
            }
          }
        },
        computed: {
            userLogged() {
            return Cookies.get("userLogged");
            }
        }
    }
</script>

<style>
body{
    background: #f5f5f5;
}
.orange-dark{
    color: white;
    background:rgb(241, 137, 0);
    font-size: 0.9rem;
}
.contact-form{
    border-radius:1rem;
     box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    margin-top: 5%;
    margin-bottom: 5%;
    width: 70%;
    text-align: center;
}
.contact-form .form-control{
    border-radius:1rem;
    
}
.contact-image{
    text-align: center;
}
.contact-image img{
    border-radius: 6rem;
    width: 11%;
    margin-top: -3%;
}
.contact-form form{
    padding: 14%;
}
.contact-form form .row{
    margin-bottom: -7%;
}
.contact-form h3{
    margin-bottom: 8%;
    margin-top: -15%;
    font-size: 3rem;
    text-align: center;
    font-family: 'Open Sans Condensed', sans-serif;
}
.contact-form .btnContact {
    width: 100%;
    border: none;
    border-radius: 1rem;
    padding: 1.7%;
    background:  rgba(90, 173, 52, 0.959);
    font-weight: 600;
    color: #fff;
    cursor: pointer;
}
.btnContactSubmit
{
    width: 50%;
    border-radius: 1rem;
    padding: 1.5%;
    color: #fff;
    background-color: #0062cc;
    border: none;
    cursor: pointer;
}
</style>