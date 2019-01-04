<template>
  <div class="account_main clearfix">
    <div class="left fl">
      <router-link class="side_nav" to="order">我的订单</router-link>
      <router-link class="side_nav" to='class'>我的课时</router-link>
      <router-link class="side_nav" to='wallet'>我的钱包</router-link>
    </div>
    <div class="right fl">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default{
  name: 'account'
}
</script>
<style lang='scss'>
  .account_main{
    margin-top:15px;
    .left{
      width:220px;
      padding:20px;
      background:#fff;
      .side_nav{
        display:block;
        color:#666;
        font-size:16px;
        text-align:center;
        margin:30px 0;
        &.active{
          color:#333;
          font-weight:600;
        }
      }
    }
    .right{
      width:960px;
      margin-left:15px;
    }
  }
</style>
