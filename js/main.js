const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  methods:{
    created(){
      
    }
  }
}).mount('#app')