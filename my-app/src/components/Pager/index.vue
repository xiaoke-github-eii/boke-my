<template>
  <div class="pager-container">
    <a @click="handclick(1)" :class="{disabled:current === 1}" >|&lt;&lt;</a>
    <a @click="handclick(current - 1)">|&lt;&lt;</a>
    <a v-for="(n, i) in numbers" :key="i" :class="{active:current === n}"  @click="handclick(n)" > {{ n }} </a>
    <a @click="handclick(current + 1)" >|&gt;&gt;</a>
    <a @click="handclick(pageNumber)" :class="{disabled:current === pageNumber}">|&gt;&gt;</a>
  </div>
</template>


<style lang="less" scoped>
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    color: @primary;
    margin: 0 6px;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    // 总页数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    getMin() {
      console.log(this.visibleNumber);
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    getMax() {
      let max = this.getMin + this.visibleNumber -1 ;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    numbers() {
      let nums = [];
      for (let i = this.getMin; i <= this.getMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods:{
        handclick(newpage){
           if(newpage < 1 ) {
               newpage = 1
           } 
           if(newpage > this.pageNumber) {
               newpage = this.pageNumber
           } 
           if(newpage === this.current) {
               return
           }
           // 抛出一个事件 
           this.$emit('pagerChange',newpage)
        }
  }
};
</script>
