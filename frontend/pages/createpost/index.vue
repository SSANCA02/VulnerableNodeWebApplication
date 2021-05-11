<template>
<div>
    <img v-if="!userLogged" class="mt-5 mb-5 center centerun" href="/" :src="require(`@/static/401.jpg`)">
    <div v-if="userLogged" class="container contact-form">
            <div class="contact-image">
                <img :src="require(`@/static/publication.png`)" alt="rocket_contact"/>
            </div>
            <form method="post">
                <h3>- Add Publication -</h3>
                <p v-if="error" class="text-center btn-lg btn-block btn-danger mb-5">Something went wrong.</p>
                 <p v-if="error2" class="text-center btn-lg btn-block btn-danger mb-5">There are empty inputs!</p>
                <p v-if="youarein" class="text-center btn-lg btn-block btn-success mb-5">Post published!</p>
                    <div class="form-group">
                        <div class="form-group">
                            <input type="text" name="txtTitle" v-model="title" class="form-control" placeholder="Title" value="" />
                        </div>
                        <div class="form-group">
                            <input type="text" name="txtBrief" v-model="brief" class="form-control" placeholder="Brief" value="" />
                        </div>
                        <div class="form-group">
                              <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" id="0" v-model="picked" name="example" value="0">
                                <label class="custom-control-label" for="0">Public</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" class="custom-control-input" id="1" v-model="picked" name="example" value="1">
                                <label class="custom-control-label" for="1">Private</label>
                            </div> 
                        </div>
                        <p> You can use HTML tags in the body of your post!</p>
                        <div class="form-group">
                            <textarea name="txtContent"  v-model="content" class="form-control" placeholder="Content" style="width: 100%; height: 450px;"></textarea>
                        </div>

                        
                        
                        <div class="form-group">
                            <input type="button"  @click="submitPost" name="btnSubmit" class="btnContact" value="Submit post" />
                        </div>
                    </div>
                
            </form>
</div>
</div>
</template>


<script>

//import axios from "axios";
import axios from "axios";
import Cookies from "js-cookie";

    export default {
        name: 'CreatePost',
        data () {
            return{
                error: false,
                error2: false,
                youarein: false,
                title: '',
                brief: '',
                content: '',
                picked: '',
                file: '',
                currentDateWithFormat: '',
            }
        },
        methods: {
            
            async submitPost() {

                if (this.title.trim() != '' && this.brief.trim() != '' && this.content.trim() != '' && this.picked != ''){
                    this.currentDateWithFormat = this.callFunction();
                    
                    const formData = new FormData();
                    formData.append('file', this.file);
                    try {
                        await axios.post("http://localhost:5000/post", {
                        title: this.title,
                        brief: this.brief,
                        content: this.content,
                        created_at: this.currentDateWithFormat,
                        status: this.picked,
                        user_id: this.userLogged[0]
                        });
                        this.title = "";
                        this.brief = "";
                        this.content = "";

                    } catch (err) {
                        this.error= true,
                        console.log(err);
                    } 
                    this.youarein= true;
                }else{
                    this.error2= true;
                    console.log(this.picked);
                }
            },
            callFunction() {
                var currentDateWithFormat = new Date().toJSON().split('T')[0] + ' ' + new Date().toJSON().split('T')[1].split('.')[0]
                return currentDateWithFormat;
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

.centerun {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>