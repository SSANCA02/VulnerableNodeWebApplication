<template>
  <div>
   <Navbar/>
   <Nuxt />
    <Footer/>
  </div>
</template>

<script>

import Navbar from '~/components/Navbar';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>

body{
    background: #f5f5f5;
}
</style>
