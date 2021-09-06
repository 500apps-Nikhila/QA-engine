<template>
  <div class="app">
  <b-container>
  <b-row class="justify-content-md-center" cols="10">
  <b-col style="margin-top:25vh:" cols="6">
  <h1>Login Form</h1>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
    >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="password" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
     <p><router-link to='/questions'>go to page</router-link></p>
     <router-view></router-view>
      <b-button type="reset" variant="danger">Reset</b-button>
      <Questions></Questions>
    </b-form>
    </b-col>
    </b-row>
    </b-container>
   
  </div>

</template>

<script>
import details from './details.json'
import Questions from './question.vue'

  export default {
      name:'Form',
components:{
  Questions
},
      
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
      show:true,
      con:false
      
      }
    },
    methods: {
     // goback()
     // {
       // window.history.length> 1 ? this.$router.go(-1):this.$router.push('/')
     // },
      onSubmit(event) {
          console.log("details",details,"-------------------")
        event.preventDefault()
       // let ref = {"username" : this.form.email,"password" : this.form.password}
      // var success = details.includes(ref);
        // if(success){
           let flag=false;
        details.forEach((detail)=>{
          if(this.form.email==detail.username&& this.form.password==detail.password)
          flag=true
                //this.$router.push({name : Questions})
        
            
        console.log("details",details,this.form)
         
        });
        if(flag){ alert(" login successful")
        this.$router.push({path:'/questions'})}
      //this.$router.push({name : Questions})}
        else  alert("please login again")
        
        },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
