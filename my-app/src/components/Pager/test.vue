<template>
  <div id="app">

     <Pager :total = "302" :limit = '10' :visibleNumber = '10' :current = "current"  @pagerChange="pagerChange" />
      <Pager :total = "30" :limit = '8' :visibleNumber = '6' :current = "current"  @pagerChange="pagerChange" />
       <Pager :total = "502" :limit = '6' :visibleNumber = '12' :current = "current"  @pagerChange="pagerChange" />
  </div>
</template>

<script>

import Pager from './';
export default {
  name: 'App',
  components: {
    Pager
  } , 
  data(){
       return {
         current : 1
       }
  } ,
  
  methods:{
     pagerChange(newpage) {
        this.current = newpage
     } 
          
  }
}
</script>

<style>

</style>
