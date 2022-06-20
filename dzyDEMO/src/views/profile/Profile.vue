<template>
    <div>
        <div class="warp">
            <div class="actions">
                <div class="bi-chevron-down"></div>
            </div>
            <div class="wrap-shadow">
                <div class="basic-info">
                    <div class="avater">
                        <span class="root huge">
                            <img src="@/assets/img/m.jpeg" alt="">
                        </span>
                    </div>
                    <div class="name">yy</div>
                </div>
                <div class="z">
                    <div class="mo">钱包</div>
                    <div class="mo">订单</div>
                    <div class="mo">买过的书</div>
                    <div class="mo">设置</div>
                </div>  
                <div class="x">
                    <router-link to="/dynamic">
                        <div class="zz">动态</div>
                    </router-link>
                    <router-link to="/book">
                        <div class="zz">书架</div>
                    </router-link> 
                
                </div> 
            </div> 
        </div>
        <router-view></router-view> 
    </div>
</template>

<script>
export default {  
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
.warp{
    position: relative;
    height: 305px;
}
.actions{
    position: absolute;
    top: 20px;
    right: 30px;
    color: rgb(255, 255, 255);
    z-index: 3;
}
.wrap-shadow{
    background: rgb(172, 175, 202);
    position: relative;
}
.basic-info{
    height: 124px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    padding: 32px 0px 19px;
}
.avater{
    width: 80px;
    height: 80px;
    text-align: center;
}
.huge{
    width: 80px;
    height: 80px;
    border: 2px solid rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 8px 0px;
}
.root{
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    width: 80px;
    height: 80px;
    background: rgb(242, 242, 242);
    border: 1px solid rgb(242, 242, 242);
    border-radius: 99px;
    overflow: hidden;
}
.avater img{
    display: block;
    width: 80px;
    height: 80px;
}
.name{
    margin: 8px 15px;
    font-size: 20px;
    font-weight: 400;
    color: rgb(255, 255, 255);
}
.z{
    width: 375px;
    display: flex;
    color: rgb(255, 255, 255);
    border-top: 0.5px solid rgba(255, 255, 255, 0.6);
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.6);
    margin-top: 45px;
}
.mo{
    width: 94px;
    height: 70px;
    text-align: center;
    color: rgb(255, 255, 255);
    line-height: 70px;
}
.x{
    display: flex;
    font-size: 16px;
    height: 57px;
    line-height: 57px;
    justify-content: space-around;
}
.zz{
    color: rgb(255, 255, 255);
}
</style>