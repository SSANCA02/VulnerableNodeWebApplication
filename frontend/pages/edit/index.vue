<template>
<div class="container contact-form">
            <div class="contact-image">
                <img :src="require(`@/static/edit.png`)" alt="rocket_contact"/>
            </div>
            <form method="post">
                <h3>- Edit Publication -</h3>
                <p v-if="error" class="text-center btn-lg btn-block btn-danger mb-5">Something went wrong.</p>
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
                        
                        <div class="form-group">
                            <textarea name="txtContent"  v-model="content" class="form-control" placeholder="Content" style="width: 100%; height: 450px;"></textarea>
                        </div>

                        <div class="form-group">
                            <input type="button"  @click="updatePost" name="btnSubmit" class="btnContact" value="Update post" />
                        </div>
                    </div>
                
            </form>
</div>
</template>

<script>
import axios from "axios";
    export default {
        name: 'PostEditView',
        data () {
            return{
                id: this.$route.params.id,
                post: [],
                user: [],
                error: false,
                youarein: false,
                title: '',
                brief: '',
                content: '',
                picked: '',
            }
        },
        created(){
          this.getPost();
        },
         methods:{
          // Get user info
          async getPost() {
            try {
              const response = await axios.get(`http://localhost:5000/myposts/${this.id}`);
              this.post = response.data;
              this.getUser();
              this.title=this.post.title;
              this.brief=this.post.brief;
              this.content= this.post.content;
              this.picked= this.post.status;
              console.log(this.picked);
            } catch (err) {
              console.log(err);
            }
          },
           async getUser() {
            try {
                
              const response = await axios.get(`http://localhost:5000/users/${this.post.user_id}`);
              this.user = response.data;
            } catch (err) {
              console.log(err);
            }
          },
          async updatePost() {
                try {
                    await axios.put(`http://localhost:5000/post/${this.id}`, {
                    title: this.title,
                    brief: this.brief,
                    content: this.content,
                    status: this.picked,
                    });
                } catch (err) {
                    this.error= true,
                    console.log(err);
                } 
                 this.youarein= true;
            },
        },
    }
</script>