<template>
  <div class="left-nav">
    <div class="avatar">
      <Avatar
        url="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2667224596,2219050978&fm=26&gp=0.jpg"
        :height="100"
        :width="100"
      />
      <h2 class="title">我的博客呀</h2>
    </div>
    <Menu />
    <Contact />
    <p class="footer">
      杭ICP备17001719号
    </p>
  </div>
</template>

<script>
import Avatar from "../Avatar";
import Contact from "./Contact";
import Menu from "./Menu";

export default {
  components: {
    Avatar,
    Contact,
    Menu,
  },
};
</script>

<style scoped lang = "less">
@import "~@/styles/var.less";
.left-nav {
  width: 100%;
  height: 100%;
  background: @dark;
  border: 2px solid;
  margin: 0;
  padding: 20px 0;
  /* overflow-x: hidden; */
  /* overflow-y: auto; */
  /* position: relative; */
  .avatar {
    margin: 0 45px;
  
  }  
  .title {
    /* text-align: center; */
    color: #fff;
    font-size: 1.2em;
  }
  .footer {
  text-align: center;
  font-size: 12px;
}  
}
</style>