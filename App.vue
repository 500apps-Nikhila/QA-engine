<template>
  <div id="app">
    <hr>
 <router-view></router-view>
  

    <Login/>
    
    <addBlog></addBlog>
    <que></que>
  </div>
</template>
<script>
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
   Login,
   
  }
}
</script>