<template>
  <div>
    <app-login></app-login>
    <app-question></app-question>
  </div>
</template>

<script>
import login from './components'
//import question from './components/question.vue'



export default {

  components: {
    'app-login' : login,
   //'app-question':question
  }
}
</script>

<style>


</style>
