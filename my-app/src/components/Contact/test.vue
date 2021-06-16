<template>
  <div id="app">
   <div class="test-contact">
      <Contact  />
   </div>
 
  </div>
</template>

<script>

import Contact from "./" ;
export default {
  name: 'App',
  components: {
    Contact,
  } ,  

}
</script>

<style scoped >
 .test-contact {
   width: 400px;
   height: 400;
   background: black;
 }

</style>
