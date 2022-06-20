<template>
  <div id="app">
      <!-- 3.使用组件-->
      <tab-bar>
        <tab-bar-item path="/home"> 
          <div slot="item-icon" class="bi-house"></div>
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category"> 
          <div slot="item-icon" class="bi-shop-window"></div>
          <div slot="item-text">卖东西</div>
        </tab-bar-item>
        <tab-bar-item path="/cart"> 
         <div slot="item-icon" class="bi-cart2"></div>
          <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile"> 
          <div slot="item-icon" class=" bi-person"></div>
          <div slot="item-text">我的</div>
        </tab-bar-item>
      </tab-bar>
 
    </div>
</template>

<script>
  //1.导入组件
  import Bootstrap from "assets/font/bootstrap-icons.css"
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
    //2.注册组件
    components:{
      TabBar,
      TabBarItem
    }
  };
</script>
<style>

</style>