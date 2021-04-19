<template>
    <div class="container contact-form">
            <div class="contact-image">
                <img :src="require(`@/static/paperplane.png`)" alt="rocket_contact"/>
            </div>
            <form method="post">
                <h3 class=" font-opensans">- Drop Us a Message -</h3>
                 <p v-if="error" class="text-center btn-lg btn-block btn-danger mb-5">Something went wrong.</p>
                <p v-if="error2" class="text-center btn-lg btn-block btn-danger mb-5">Please fill in the fields.</p>
                <p v-if="youarein" class="text-center btn-lg btn-block btn-success mb-5">Message sent, thank you!</p>
               <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="txtName"  v-model="name" class="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtEmail"  v-model="email" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="button"  @click="submitMessage" name="btnSubmit" class="btnContact" value="Send Message" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <textarea name="txtMsg"  v-model="contentofmessage" class="form-control" placeholder="Your Message *" style="width: 100%; height: 150px;"></textarea>
                        </div>
                    </div>
                </div>
            </form>
</div>
</template>

<script>

//import axios from "axios";
import axios from "axios";

    export default {
        name: 'Contact',
        data () {
          return{
            error: false,
            error2: false,
            youarein: false,
            name: '',
            email: '',
            created_at: '',
            contentofmessage: '',
          }
        },
        methods: {
            async submitMessage() {
                if (this.name.trim() != '' && this.contentofmessage.trim() != '' && this.email.trim() != ''){
                    this.currentDateWithFormat = this.callFunction();
                    console.log(this.currentDateWithFormat)
                    
                    try {
                        await axios.post("http://localhost:5000/message", {
                        name: this.name,
                        comment: this.contentofmessage,
                        email: this.email,
                        created_at: this.currentDateWithFormat,
                        status: 0,
                        });
                        this.name = "";
                        this.email = "";
                        this.created_at = "";
                        this.contentofmessage = "";

                    } catch (err) {
                        this.error= true,
                        console.log(err);
                    } 
                    this.youarein= true;
                }else{
                    this.error2=true;
                }
            },
            callFunction() {
                var currentDateWithFormat = new Date().toJSON().split('T')[0] + ' ' + new Date().toJSON().split('T')[1].split('.')[0]
                console.log(currentDateWithFormat);
                return currentDateWithFormat;
            }
        }
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
</style>