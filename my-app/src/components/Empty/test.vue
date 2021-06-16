<template>
  <div id="app">
   <div class="test-empty">
      <Empty :text = "'无数据'" />
   </div>
 
  </div>
</template>

<script>

import Empty from "./" ;
export default {
  name: 'App',
  components: {
    Empty,
  } ,  

}
</script>

<style scoped>

.test-empty {
    width: 500px;
    height: 500px; 
    margin: 0 auto;
    position: relative; 
    border: 1px solid;
}

</style>
