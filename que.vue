<template>

  <div>
    
    <h1>choose the best Question</h1>
    <b-form-select v-model="selected" :options="options"></b-form-select>
    <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'what is the capital city of india' },
          { value: 'b', text: 'What’s the smallest country in the world?' },
         
        ]
      }
    }
  }
</script>