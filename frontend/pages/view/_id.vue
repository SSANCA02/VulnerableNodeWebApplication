<template>
    <div class="container">
    <img v-if="unauthorized" class="mt-5 mb-5 ml-auto center" href="/" :src="require(`@/static/401.jpg`)">
<!-- Services section -->
	<section v-if="!unauthorized" id="what-we-do">
		<div class="container-fluid">
			<h2 class="section-title mb-2 h1"> - {{this.post.title}} -</h2>
			<p class="text-center text-muted mt-4 ml-5 mr-5 h5"> {{this.post.brief}}</p>
			<p class="text-center text-info mt-4 ml-5 mr-5 h5"> {{this.user.name}} {{this.user.surname}}</p>
      <div class="row mt-5 ml-5 mr-5 text-center">
				<p v-html="this.post.content"></p>
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
                unauthorized: false
            }
        },
        created(){
        /* create middleware and check if the post is public 
         axios.post(`http://localhost:5000/public or is author`)
          .then((response) =>{ */
            this.getPost();
        /*  })
          .catch((error) => {
            if (error.response.status === 401) {
              this.unauthorized=true;
            } else {
              this.getPost();
            }
          })*/
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
              const response = await axios.post(`http://localhost:5000/userbyid`, {
                  id: this.post.user_id,
               });
              this.user = response.data[0];
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