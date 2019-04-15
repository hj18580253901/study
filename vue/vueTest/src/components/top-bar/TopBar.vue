<template>
  <div class='topBar'>
  <div class="page top-bar-wraper rel">
    <div class="logo fl"></div>
    <div class="nav fl" v-if='$route.path !== "/login" && $route.path !== "/register"'>
      <router-link :to='{path: "/study-center"}' class="inline-block nav-link">学习中心</router-link>
      <router-link to='/pyp/schedule' class="inline-block nav-link">国际小学全科班</router-link>
      <router-link to='/pulic-class' class="inline-block nav-link">公开课</router-link>
      <router-link to='/account' class="inline-block nav-link">我的账户</router-link>
      <router-link to='/download' class="inline-block nav-link">软件下载</router-link>
    </div>
    <div class="abs out" @click='handler' v-if='$route.path !== "/login" && $route.path !== "/register"'>退出</div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'TopBar',
  methods: {
    handler: function () {
      console.log(this.$route.path)
      this.$router.replace('/login')
    }
  }
}
</script>

<style lang="scss">
  .topBar{
    width:100%;
    height:70px;
    background:#1067d7;
    .top-bar-wraper{
      max-width:1200px;
      height:70px;
      line-height:70px;
      margin:0 auto;
      .logo{
        width:98px;
        height:72px;
        background:url(../../assets/images/logo.436e3bc.svg) no-repeat center;
        background-size:98px 72px;
        cursor:pointer;
      }
      .nav{
        height:70px;
        margin-left:60px;
        .nav-link{
          width: 140px;
          color:#fff;
          font-size:16px;
          text-align:center;
          courser:pointer;
          transition: background-color 0.3s, font-size 0.1s;
          &.active{
            font-weight:600;
            font-size:18px;
            background:#0056c6;
          }
        }
      }
      .out{
        width:65px;
        height:26px;
        border:1px solid #fff;
        border-radius:13px;
        color:#fff;
        font-size:16px;
        top:20px;
        right:0;
        line-height:26px;
        text-align:center;
      }
    }
  }
</style>
