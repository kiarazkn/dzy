<template>
    <div>
        <div class="home-nav">
            <div slot="left">图书</div>
            <div slot="center">服饰</div>
            <div slot="right">电子</div>
        </div>
        
        <div class="search-entry">
            <div class="search-input">
                <div class="search-input-button">
                    
                </div>    
                <input class="search-inp" type="search" readonly placeholder="搜索书名、作者、分类、ISBN" >
            </div>
        </div>
        
            <table width="100%">
                <tr style="height=100px">
                    <router-link to="/detail">
                    <td class="y" align="center" @click="good1">
                        <img :src="require('@/assets/img/'+$store.state.goods[0].img+'.jpeg')" alt="" />
                        <h3 class="title">{{$store.state.goods[0].name}}</h3> 
                    </td>
                    </router-link>
                    <router-link to="/detail">
                    <td class="y" align="center" @click="good2">
                        <img :src="require('@/assets/img/'+$store.state.goods[1].img+'.jpeg')" alt="" />
                        <h3 class="title">{{$store.state.goods[1].name}}</h3> 
                    </td>
                    </router-link>
                </tr>
                <tr style="height=100px">
                    <router-link to="/detail">
                    <td class="y" align="center" @click="good3">
                        <img :src="require('@/assets/img/'+$store.state.goods[2].img+'.jpeg')" alt="" />
                        <h3 class="title">{{$store.state.goods[2].name}}</h3> 
                    </td>
                    </router-link>
                    <router-link to="/detail">
                    <td class="y" align="center" @click="good4">
                        <img :src="require('@/assets/img/'+$store.state.goods[3].img+'.jpeg')" alt="" />
                        <h3 class="title">{{$store.state.goods[3].name}}</h3> 
                    </td>
                    </router-link>
                </tr>
                <tr style="height=167px">
                    <router-link to="/detail">
                    <td class="y" align="center" @click="good5">
                        <img :src="require('@/assets/img/'+$store.state.goods[4].img+'.jpeg')" alt="" />
                        <h3 class="title">{{$store.state.goods[4].name}}</h3> 
                    </td>
                    </router-link>
                    <router-link to="/detail">
                    <td class="y" align="center" @click="good6">
                        <img :src="require('@/assets/img/'+$store.state.goods[5].img+'.jpeg')" alt="" />
                        <h3 class="title">{{$store.state.goods[5].name}}</h3> 
                    </td>
                    </router-link>
                </tr>
            </table>
        
        <router-view></router-view>
    </div>
</template>

<script>


export default {  
    name:"home",
    methods:{
       good1(){
        let count=0;
        this.$store.commit('addGood',count)
       },
        good2(){
        let count=1;
        this.$store.commit('addGood',count)
       },
        good3(){
        let count=2;
        this.$store.commit('addGood',count)
       },
        good4(){
        let count=3;
        this.$store.commit('addGood',count)
       },
        good5(){
       let count=4;
        this.$store.commit('addGood',count)
       },
        good6(){
       let count=5;
        this.$store.commit('addGood',count)
       },
       
    }
}


</script>
<style>
.home-nav {
    /* background-color: var(--color-tint); */
    background-color: #fff;
    color: #497749;
    display: flex;
    padding: 10px;
    font-weight: 600;
    border-bottom: 2px solid #f6f6f6;
    justify-content: space-around;
}
table{
    margin-left: 14px;
}
tr {
    display: block;
 /*将tr设置为块体元素*/ 
    margin: 2px 10px; 
 /*设置tr间距为2px*/ 
 }
.y{
    margin: 0;
    width: 108px;
}
td img{
    width: 108px;
    height: 149px;
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    background-color: rgb(247, 247, 247);
}

.title{
    width: 153px;
    height: 21px;
    font-size: 15px;
    font-weight: 600;
    color: #000;
}
.search-entry{
    margin-left: 42px;
    margin-top: 5px;
    width: 345px;
    height: 42px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 20px 15px 15px;
    background: rgb(255, 255, 255);
}
.search-input{
    width: 303px;
    height: 42px;
    position: relative;
    display: inline-block;
    width: 100%;
}
.search-input-button{
    position: absolute;
    top: 42%;
    padding: 6px;
    color: rgb(170, 170, 170);
    transform: translateY(-50%);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    
}
.search-input input{
    width: 266px;
    font-size: 14px;
    padding-top: 9px;
    padding-bottom: 9px;
    border-radius: 4px;
    background-color: rgb(247, 247, 247);
    border: none;
    text-align: center;
}
</style>