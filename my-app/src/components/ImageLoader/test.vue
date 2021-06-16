<template>
  <div id="app">
    <div class="test-container">
       <ImageLoader src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
                 placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100" 
                 @load = 'handLoad'
                 />
    </div>
   
  </div>
</template>
 
<script>


import ImageLoader from './' ; 
export default {
  name: 'App',
  components: {
    ImageLoader ,
  } , 

  methods:{
      handLoad(){
          console.log("完成");
      }
  }
  
}
</script>

<style>
.test-container {
  width: 500px;
  height: 400px;
  border: 2px solid;
  margin: 0 auto;
}
</style>
