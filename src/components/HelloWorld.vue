<template>
  <div class="hello">
   
  </div>
</template>

<script>
import axios from "axios"
import "../mock"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    // axios.post("/goodlist",{page:4,pageSize:10}).then(res=>{
    //   console.log(res.data,"res")
    // })
    axios.post("/carousel",{count:5}).then(res=>{
      console.log(res.data,"res")
    })
  }
}
</script>

<style scoped>

</style>
