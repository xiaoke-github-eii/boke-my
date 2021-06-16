<template>
  <div class="image-loader-container">
    <img v-if="!everythingDone" class="placeholder" :src="placeholder" alt="" />
    <img :src="src" 
          alt="" 
          @load="handLoad"  
          :style="{ opacity: getOpacity , transition: `${duration}ms` }"
          />
  </div>
</template>

<script>
export default {
  data() {
    return {
      originLoaded: false, //  原图是否加载完成  控制透明度
      everythingDone: false, // 是否一切都尘埃落定了
    };
  },

  props: {
    src: {
      type: String,
      require: true,
    },
    placeholder: {
      type: String,
      require: true,
    },
    duration: {
      type: Number,
      require: false,
      default: 3000,
    },
  },
  computed:{
        getOpacity(){
          return   this.originLoaded ?  1 : 0 ;
        } 
        
  }  ,
  methods: {
    handLoad() {
        this.originLoaded = true ;
        setTimeout(()=>{
            this.everythingDone = true ;
            this.$emit("load");
        },this.duration)
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }

  .placeholder {
    filter: blur(2vw);
  }
}
</style>