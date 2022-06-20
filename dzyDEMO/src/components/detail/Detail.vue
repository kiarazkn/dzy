<template>
<div>
     <div class="d_top">
      <img :src="require('@/assets/img/'+$store.state.goods[$store.state.i].img+'.jpeg')" alt="" />
    </div>
     
    <div class="d_message1" style="margin: 15px;">
      <p style="font-size:20px;margin-bottom:15px">{{$store.state.goods[$store.state.i].name}}</p>
      <ul style="list-style-type: none;font-size:13px">

        <li>
          <span>原价</span>
          <span>：</span>￥{{$store.state.goods[$store.state.i].price}}
        </li>
        <li>
          <span>作者</span>
          <span>：</span>{{$store.state.goods[$store.state.i].author}}
        </li>
        <li>
          <span>出版社</span>
          <span>：</span>{{$store.state.goods[$store.state.i].press}}
        </li>
        <li>
          <span>出版</span>
          <span>：</span>{{$store.state.goods[$store.state.i].Ptime}}
        </li>
        <li>
          <span>装帧</span>
          <span>：</span>{{$store.state.goods[$store.state.i].dress}}
        </li>
      </ul>
    </div>
    <div class="d_star">
      <img style="height:70%" :src="require('@/assets/img/图片'+$store.state.goods[$store.state.i].img+'-1.png')" alt="" />
    </div>
    <div class="d_message2" style="margin: 15px;">
      <p style="font-size:18px;margin-bottom:7px">简介和目录</p>
      <div class="wrapper">
        <input id="exp1" class="exp" type="checkbox" />
        <div class="text">
          <label class="btn" for="exp1"></label>
            {{$store.state.goods[$store.state.i].brief}}
        </div>
      </div>
    </div>
    
    <div class="d_message3" style="margin: 15px;">
      <p style="font-size:18px;margin-bottom:10px">32条鱼友评论</p>
      <div style="width:100%;font-size:14px;">
         {{$store.state.goods[$store.state.i].comment}}
      </div>
    </div>

    <div class="d_other">
      <img style="height:30%;margin-bottom:50px" :src="require('@/assets/img/图片'+$store.state.goods[$store.state.i].img+'-2.png')" alt="" />
    </div>

    <div class="btnCart" @click="addToCart()">
      <router-link to="/cart">
      <button style="margin-left:10px;line-height:35px;width:150px;height:35px;position:fixed;bottom:70px;right:50px;z-index: 9999;">加入购物车</button>
      </router-link>
    </div>
</div>
</template>

<script>
export default {
  name:'Detail',
  methods:{
    addToCart(){
      let counts = this.$store.state.goods[this.$store.state.i];
      this.$store.commit('addCart',counts)
    }
  }
}

</script>

<style>
.btnCart button{
  display: flex;
  background-color: #497749;
  color: #fff;
  border-radius: 5rem;
  border: none;
  padding-left: 35px;
}
.d_top {
  background-color: rgba(4, 34, 88, 0.411);
}
.d_top img {
  height: 130px;
  margin-left: 37%;
  margin-top: 16px;
  margin-bottom: 15px;
}
.d_message1 li {
  margin-top: 7px;
}
.d_message1 li span {
  color: #aaaaaa;
  margin-right: 5px;
}
.wrapper {
  display: flex;
  margin: auto;
  margin-bottom: 30px;
  width: 100%;
  overflow: hidden;
  padding: 5px;
}
.text {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  position: relative;
  line-height: 1.5;
  max-height: 4.5em;
  transition: 0.3s max-height;
}
.text::before {
  content: "";
  height: calc(100% - 26px);
  float: right;
}
.text::after {
  content: "";
  width: 999vw;
  height: 999vw;
  position: absolute;
  box-shadow: inset calc(100px - 999vw) calc(30px - 999vw) 0 0 #fff;
  margin-left: -100px;
}
.btn {
  position: relative;
  float: right;
  clear: both;
  margin-left: 20px;
  font-size: 12px;
  padding: 0 8px;
  background: #497749;
  line-height: 24px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;

}
.btn::after {
  content: "展开";
}
.exp {
  display: none;
}
.exp:checked + .text {
  max-height: none;
}
.exp:checked + .text::after {
  visibility: hidden;
}
.exp:checked + .text .btn::before {
  visibility: hidden;
}
.exp:checked + .text .btn::after {
  content: "收起";
}
.btn::before {
  content: "...";
  position: absolute;
  left: -5px;
  color: #333;
  transform: translateX(-100%);
}
</style>