<template>
    <div class="container">
        <img v-if="unauthorized" class="mt-5 ml-auto center" href="/" :src="require(`@/static/401.jpg`)">
        <div class="row mt-5" >
       <div class="col-md-4 mb-5" v-for="message in messages" :key="message.idcomment">
        <div class="card h-100">
          <div class="card-body">
            <h2 class="card-title">{{message.name}}</h2>
            <h5>{{message.email}}</h5>
            <h5>{{message.created_at.substring(0,10)}}</h5>
            <h5>{{message.created_at.substring(11,16)}}</h5>
            <h5>{{message.comment}}</h5>
          </div>
        </div>
       </div>
       </div>
</div>
</template>

<script>

//import axios from "axios";
import axios from "axios";

    export default {
        name: 'Contact',
        data () {
          return{
              messages: [],
              unauthorized: false,
          }
        },
        created(){
          this.getMessages();
        },
        methods:{
          // Get All Products
          async getMessages() {
              this.unauthorized= false;
            try {
              const response = await axios.get(`http://localhost:5000/messages`, {
              });
              this.messages = response.data;
            } catch (err) {
                if(err.response.status === 401){
                    this.unauthorized= true;
                }else{
                    console.log(err);
                }
              }
            }
          },
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap');


body{
    background: #f5f5f5;
}
.font-opensans{
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 3.2rem;
}

.contact-form{
    border-radius:1rem;
     box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    margin-top: 5%;
    margin-bottom: 5%;
    width: 70%;
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

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>


