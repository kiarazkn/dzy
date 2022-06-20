<template>
  <div>
    <div class="detail-nav">
      <div @click="goBack" v-show="showBack">
        <span class="bi-chevron-left" icon="back">返回</span>
      </div>
      
    </div>
    <Detail ></Detail>
    <router-view></router-view>

  </div>
</template>

<script>
import Detail from '@/components/detail/Detail.vue'
export default {
  data() {
    return {
      showBack: false,
    };
  },
  components:{
    Detail
  },
  created() {
    //判断当前是否为首页，如果是首页，showBack改为false，否则为true
    this.showBack = this.$router.path !== "/home";
  },
  //监听路由变化判断是否是首页
  watch: {
    "$router.path"(newVal) {
      this.showBack = newVal !== "/home";
    }
  },
  methods: {
    goBack() {
      //后退一个访问页面
      this.$router.go(-1);
    }
  }
  
};
</script>

<style>

.detail-nav {
  background-color: #fff;
  color: #497749;
  display: flex;
  padding: 10px;
  font-weight: 600;
  border-bottom: 1px solid #f6f6f6;
  justify-content: space-between;
  
}

</style>