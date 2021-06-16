import Vue from 'vue';
import  "./mock" ;
import App from './App.vue';
import "./styles/global.less";
import router from "./router";
import showMessage from "./utils/showMessage";
import vLoading from "./directive/loading"
import store from "./store";

Vue.prototype.$showMessage = showMessage; 
Vue.directive('loading',vLoading);
// import "./api/banner"; 

new Vue({
  router ,
  store,
  render: h => h(App),
}).$mount('#app')

// import * as blogApi from "./api/blog" ;

// blogApi.getBlogs(2,10,3).then((r)=>{
//   // console.log("boke",r)
// }) ;
// blogApi.getBlogType().then((r)=>{
//   // console.log(r,"type");
// })

