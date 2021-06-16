<template>
  
  <Layout>
    <template v-slot:head > toubu</template>
    中间内容区域 
    <template #footer > 尾部插槽 </template>
  </Layout>

</template>

<script> 
import Layout from "./layout" ;
export default {
  components: { Layout },

}
</script>

<style>

</style>