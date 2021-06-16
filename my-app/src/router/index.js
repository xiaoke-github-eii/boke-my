import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter); // 使用一个vue插件

const router = new VueRouter({
  // 配置
  routes, // 路由匹配规则
  mode: "history",
});
router.afterEach((to)=>{
  if(to.meta.title) {
    document.title = to.meta.title; 
  }
})
export default router;
