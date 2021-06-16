<template>
  <div v-loading = "isLoading" class="home-container" ref="homeContainer" @wheel = "handleWheel" >
    <ul class="carouse-container" :style="{ marginTop, }" @transitionend = "handleTransitionend" >
      <li v-for="item in banners" :key="item.id">
        <Carouselitem :carousel="item"></Carouselitem>
      </li>
    </ul>
    <div v-show="index >= 1" class="icon icon-up" @click="switchTo(index-1)">
      <Icon type="arrowUp" />
    </div>
    <div v-show="index < banners.length -1" class="icon icon-down" @click="switchTo(index+1)" >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li  @click="switchTo(i)" :class="{active: i === index }" v-for="(item , i ) in banners" :key="item.id"></li>
    </ul>
    
  </div>
</template>

<script>
import { getBanners } from "@/api/banner";
import Carouselitem from "./Carouselitem.vue";
import Icon from "@/components/Icon"; 

export default {
  components: {
    Carouselitem,
    Icon,
   
  },
  data() {
    return {
      banners: [],
      index: 1 , // 当前显示的是第几张轮播图
      containerHeight:0  , // 整个容器的高度 
      switching: false ,  // 是否正在翻页
      isLoading : true 
    };
  },
  async created() {
    this.banners = await getBanners();
    console.log(this.banners);
    this.isLoading = false;
  },
  computed:{
    marginTop(){
     return -this.index*this.containerHeight + 'px'
    }
  } ,
  mounted(){
      this.containerHeight = this.$refs.homeContainer.clientHeight; 
      window.addEventListener("resize",this.handleResize)
  } ,
  destoryed(){
      window.removeEventListener("resize",this.handleResize)
  } ,
  
  methods : {
    switchTo(nowIndex){
      this.index =  nowIndex ;
    } ,
    handleWheel(e){
        if(this.switching ) {
          return ;
        }
       
        if (e.deltaY < -5 && this.index >0) {
          this.switching = true ; 
          this.index--;
        } else if (e.deltaY > 5 && this.index < this.banners.length - 1) {
           this.switching = true ; 
          this.index++ ;
        }
    },
    handleTransitionend(){
      this.switching = false ;
    } ,
    handleResize(){
       this.containerHeight = this.$refs.homeContainer.clientHeight;
    }
  } 
};
</script>

<style scoped lang = "less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  overflow: hidden;
  background: @dark;
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  position: relative;
  ul {
    margin: 0;
    list-style: none;
  }
}                               
.carouse-container {
  width: 100%;
  height: 100%; 
  transition: 500ms;
   li {
     height: 100%;
     width: 100%;
   }
}
.icon {
  /* position: fixed; */
  font-size: 30px;
  color: @gray;
  cursor: pointer;
  transform: translateX(-50%);
  .self-center();
  &.icon-up {
    top: 25px; 
    animation: jump-up 2s infinite;
  } 
  &.icon-down {
    top: auto;
    bottom: 25px;
    animation: jump-down 2s infinite;
  } 

  @keyframes jump-up { 
    0% {
      transform: translate(-50%,10px);
    } 
    50% {
      transform: translate(-50%,-10px);
    } 
    100% {
      transform: translate(-50%,10px);
    }
    
  }
    @keyframes jump-down { 
    0% {
      transform: translate(-50%,-10px);
    } 
    50% {
      transform: translate(-50%,10px);
    } 
    100% {
      transform: translate(-50%,-10px);
    }
    
  }
} 
.indicator {
  margin: 0 ;
  padding: 0 ;
  .self-center() ;
  transform: translateY(-50%);
  left: auto;
  right: 20px;
}
 .indicator li {
   width: 8px;
   height: 8px;
   border-radius: 50%;
   /* background: @dark; */
   border: 1px solid #fff;
   cursor: pointer;
   margin-top: 6px;
   &.active {
     background: #fff;
   }
 }
</style>