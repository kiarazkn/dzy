<template>
  <div id="app">
    

    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
 import MainTabBar from 'components/content/mainTabbar/MainTabBar'
 

  export default {
    data(){
      return {
        showBack:false
      }
    },
    created(){
      //判断当前是否为首页，如果是首页，showBack改为false，否则为true
      this.showBack = this.$router.path !== '/home'
    },
    methods:{
      goBack(){
        //后退一个访问页面
        this.$router.go(-1)
      }
    },
    //监听路由变化判断是否是首页
    watch:{
      '$router.path'(newVal){
        this.showBack = newVal !== '/home'
      }
    },
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
