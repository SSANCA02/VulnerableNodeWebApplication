<template>
    <div class="container">
<!-- Services section -->
	<section id="what-we-do">
		<div class="container-fluid">
			<h2 class="section-title mb-2 h1"> - {{this.post.title}} -</h2>
			<p class="text-center text-muted mt-4 ml-5 mr-5 h5"> {{this.post.brief}}</p>
			<p class="text-center text-info mt-4 ml-5 mr-5 h5"> {{this.user.name}} {{this.user.surname}}</p>
            <div class="row mt-5 ml-5 mr-5 text-center">
				{{this.post.content}}
			</div>
		</div>	
	</section>
  </div>
</template>

<script>
import axios from "axios";
    export default {
        name: 'PostView',
        data () {
            return{
                id: this.$route.params.id,
                post: [],
                user: [],
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
            } catch (err) {
              console.log(err);
            }
          },
           async getUser() {
            try {
                
              const response = await axios.get(`http://localhost:5000/users/${this.post.user_id}`);
              this.user = response.data[0];
            } catch (err) {
              console.log(err);
            }
          },
        },
    }
</script>