<template>
    <div class="cart">
        <nav-bar class="cart-nav">
            <div slot="left"></div>
            <div slot="center">购物车</div>
        </nav-bar>

        <div>
            <table>
                <tr>
                    <th style="width:40px"><input type="checkbox" v-model='checkAll' @click="checkA()"></th>
                    <th style="width:60px">图书</th>
                    <th style="width:100px">名称</th>
                    <th style="width:60px">价格</th>
                    <th style="width:100px">购买数量</th>
                    <th style="width:60px">操作</th>
                </tr>
                <tr v-for="(item,i) in cartList">
                    <td><input style="width:30px;text-align:center" type="checkbox" v-model='item.check' @click='checkOne(i)'></td>
                    <td><img style="height:90px;width:60px;text-align:center" :src="require('@/assets/img/'+item.img+'.jpeg')" alt=""/></td>
                    <td style="width:120px;text-align:center">{{item.name}}</td>
                    <td style="width:60px;text-align:center">￥{{item.price}}</td>
                    <td style="width:100px;text-align:center">
                        <button @click="del(i)" :disabled="item.count<=1">-</button>
                        {{item.count}}
                        <button @click="add(i)">+</button>
                    </td>
                    <td style="width:60px;text-align:center">
                        <button @click="remove(i)">x</button>
                    </td>
                </tr>
            </table>
            <div class="totalP">
                <div>总价格：{{totalPrice}}</div>
                <button >提交订单</button>
            </div>
            
        </div>
        <!-- <div class="totalP">总价格：{{(item.price*item.count)}}</div> -->
       
    </div>
    
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default { 
    data(){
       return{
        cartList:[],
        checkAll:false
       }
    },
    computed:{
        totalPrice(){
            let money = 0;
            this.cartList.map((item,i)=>{
                //单选选中才计算
                if(item.check){
                    money += item.price*item.count
                }
            });

            return money;
        }
    },
    components:{
        NavBar
    },
    methods:{
       	//增加
        add(i){
            this.cartList[i].count++;
        },
        //减少
        del(i){
            console.log(i);
            this.cartList[i].count--;
        },
        //移除
        remove(i){
            this.cartList.splice(i,1)
        },
        //全选
        checkA(){
            //勾选时this.checkAll为false，未勾选是true
            if(this.checkAll){
                this.cartList.map((item,i) => {
                    item.check=false
                })
            }else{
                this.cartList.map((item,i) => {
                    item.check=true
                })
            }
        },
        //单选
        checkOne(i){
            this.cartList[i].check = !this.cartList[i].check
            //用map方法映射 把check状态放置到一个新数组
            let result = this.cartList.map((item,i)=>{
                return item.check
            })
            //利用every方法返回判断结果数组是否都是true 都是true就返回true
            let bool = result.every((item,i)=>{
                return item == true
            })
            if(bool){
                this.checkAll = true
            }else{
                this.checkAll = false
            }
        }
    },
    mounted(){
        this.cartList=this.$store.state.cart
        // console.log(this.$store.state.cartList);
    }
}
</script>
<style>
.cart-nav {
    background-color: #fff;
    color: #497749;
    display: flex;
    padding: 10px;
    font-weight: 600;
    border-bottom: 2px solid #f6f6f6;
  }
  .cartL{
      display: flex; 
      justify-content: space-around;
      margin: 15px;
  }
  .cartL div{
    margin: auto;
  }

  .totalP{
    /* background: #497749; */
    width: 100%;
    padding: 15px;
    display: flex;
    position: fixed;
    border-top: 2px solid #f6f6f6;
    bottom: 55px;
    font-size: 28px;
    color: #497749;
    font-weight: 500;
    justify-content: space-around;
  }
  .totalP button{
    display: flex;
    background-color: #497749;
    color: #fff;
    border-radius: 5rem;
    border: none;
    padding-inline: 15px;
  }
table button{
    width: 20px;
    border:solid 1px #497749;
}
</style>