<template>
  <ul class="contact-container">
      <li v-for=" item in arrList" :key="item.id" ><Icon :type="item.type" /> 
      <span>{{ item.text }}</span>
      <div v-show="item.img" class="img-container" >
          <img :src="item.src" alt="">
      </div>
      </li>
  </ul>
</template>

<script>
import Icon from "../Icon";
export default {
     components: {
         Icon ,
     } ,
     data(){
         return{
             arrList:[{
                 type:"github" ,
                 text:"xiaoke-" ,
                 img: false ,
                 id : '1'
             },{
                 type:"mail" ,
                 text:"xiaoke-@qq.com" ,
                 img: false ,
                 id: "2"
             },{
                 type:"qq" ,
                 text:"1205316037" ,
                 img: true ,
                 src:"http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png" ,
                 id: "3"
             },{
                 type:"weixin" ,
                 text:"xiaoke-vx" ,
                 img: true ,
                 src:"http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
                 id:"4"
             }] ,
         }
     } 
 

}
</script>

<style scoped lang = "less"> 
 @import "~@/styles/var.less";
 /* @import "~@styles/global.less"; */
 .contact-container {
     width: 100%;
     height: 100%;
     padding: 0;
     margin: 0; 
     .iconfont  {
         font-size: 18px;
         padding: 0 5px;
     }
     li {
         width: 100%;
         color : @gray ; 
         cursor: pointer;
         list-style: none;
         padding: 15px 5px;
         position: relative;
     } 
     .img-container {
         display: none;
     } 
     li:hover {
         color: @primary;

     }
       li:hover .img-container {
        display: block;
        position: absolute;
        left: 25px;
        bottom: 35px;
        transform: scaleY(1);
     }
    
 } 

 img {
     width: 100px;
     height: 100px;
 }

</style>