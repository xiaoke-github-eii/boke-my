<template>
  <div class="contain">
    <div class="head" style="background: red">
      <slot name="head"></slot>
    </div>
    <div class="container" style="background:green">
      <slot></slot>
    </div>
    <div class="footer" style="background:yellow">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
 .head ,.container , .footer {
     height: 30px; 
 }
</style>