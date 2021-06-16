<template>
   <div class="site-aside">
   <SiteAside />
   </div>
   
</template>

<script>
import SiteAside from './index.vue'
export default {
   components: {
       SiteAside
   }

}
</script>

<style scoped>
 .site-aside {
    margin: 0 ;
    padding: 0;
    width: 250px;
    height: 600px;
 }

</style>