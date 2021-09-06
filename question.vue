<template>
  <div>  
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
 
 <b-form-group
        id="input-group-1"
        label="what is the capital city of india?"
        label-for="input-1"
    >
        <b-form-input
          id="input-1"
          v-model="form.answer"
        placeholder="Enter answer"
          required
        ></b-form-input>
      </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
                  <b-button type="reset" variant="danger">Reset</b-button>

</b-form>
  </div>
</template>

<script>

import details from './details.json'


  export default {
    data() {
      return {
          
        form:{
        answer:'',
      },
            show:true,
      con:false

    }
  },
  methods:{
  onSubmit(event) {
          console.log("details",details,"-------------------")
        event.preventDefault()
                   let flag=false;
        details.forEach((detail)=>{
          if(this.form.answer===detail.answer)
         // alert("correct")
         // else 
          //alert("wron")
          flag=true
                //this.$router.push({name : Questions})
        
            
        console.log("details",details,this.form)
         
       });
        if(flag) alert(" correct answer")
        //this.$router.push({name : Questions})}
       else  alert("wrong answer")
        
    
  }
  },
  onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.answer = ''
        
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
  }
</script>