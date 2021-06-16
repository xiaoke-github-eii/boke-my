<template>
  <div class="menu-container">
    
      <router-link v-for="item in menuList" :key="item.type" :to="item.link" :exact="item.exact" >
        <li >
          <Icon :type="item.type"></Icon>
          <span>{{ item.text }}</span>
        </li>
      </router-link>
    
  </div>
</template>

<script>
import Icon from "../../Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      menuList: [
        {
          type: "home",
          text: "首页",
          link: "/", 
          exact:true
        },
        {
          type: "blog",
          text: "文章",
          link: "/article",
          exact: false
        },
        {
          type: "about",
          text: "关于我",
          link: "/about", 
          exact:true
        },
        {
          type: "code",
          text: "项目&效果",
          link: "/project",
          exact:true
        },
        {
          type: "chat",
          text: "留言板",
          link: "/message",
          exact:true
        },
      ],
    };
  },
  
};
</script>

<style scoped lang = "less" >
@import "~@/styles/var.less";
.menu-container {
  width: 100%;
  color: @gray;
  margin: 24px 0;
  a {
    text-decoration: none;
    color: @gray;
    display: block;
    width: 100%;
  }
  a.router-link-active {
    background: #2d2d2d;
  }
  li {
    margin-left: 40px;
    /* margin:  0 auto; */
    .iconfont {
      font-size: 12px;
      text-align: center;
      padding: 0 5px;
      &:hover {
        color: white;
      }
    }
    span {
      font-size: 15px;
      text-align: center;
      height: 35px;
      line-height: 35px;
      color: @gray;
      &:hover {
        color: white;
      }
    }
    list-style: none;
    cursor: pointer;
  }
}
</style>