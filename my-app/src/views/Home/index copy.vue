<template>
  <div class="home-container" ref="container">
    <h1>首页</h1>
  </div>
</template>

<script>
import {getBanners} from "@/api/banner"
export default {
  data(){
       return{
         banner:[]
       } 
  } ,
  async created(){
      this.banner = await getBanners(); 
      console.log(getBanners(),"dd");
      console.log(this.banner);
  },
  methods: {

  },
};
</script>

<style scoped>
.home-container {
  background: lightblue;
  width: 300px;
  height: 500px;
  border: 1px solid;
  margin: 50px auto;
}
</style>
