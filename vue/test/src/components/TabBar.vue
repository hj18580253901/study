<template>
  <div class="tabbar_box">
    <div class="tabBarMain">  
      <router-link class="item" to="/index"><i class="iconfont icon-shouye1"></i><span>首页</span></router-link>
      <router-link class="item" to="/vicinity"><i class="iconfont icon-fujinhui"></i> <span>附近</span></router-link>
      <router-link class="item" to="/find"><i class="iconfont icon-n5appqz"></i><span>发现</span></router-link>
      <router-link class="item" to="/order"><i class="iconfont icon-dingdan-l"></i><span>订单</span> </router-link>
      <router-link class="item" to="/owner"><i class="iconfont icon-wode"></i><span>我的</span> </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabBar'
}
</script>
<style lang="scss">
  @import '~@src/assets/style/font.scss' ;
  .tabbar_box{
    z-index:1111;
    background:#ebe8e8;
    position:fixed;
    bottom:0;
    left:0;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    width:100%;
    height:60px;
    border:1px slid red;
    .tabBarMain{
      width:100%;
      height:60px;
      display:flex;
      justify-content:space-around;
    }
    .item{
      padding:9px 15px;
      display:inline-block;
      flex:1;
      text-align:center;
      span{
        display:block;
        line-height:25px;
        color:#666666;
      }
    }
    .is-active{
      .iconfont{
        color:#0bb4b7!important;
        background:#0bb4b7;
      }
      span{
        color:#0bb4b7!important;
      }
    }
  }
</style>
