<template>
  <div id="app">
    <div class="top-bar-wrapper">
      <top-bar></top-bar>
    </div>
    <div id="warn-bar" class="t-c">
      <span>“柔持英语”升级为“鲸鱼小班英语”。「 rouchi.com 」将在5月1日切换至新官网，请尽快转移到新官网学习。</span>
      <a href="#" class="goNewWeb dis-in-b">进入新官网</a>
    </div>
    <div class="main-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopBar from './components/top-bar/Topbar'
export default {
  name: 'App',
  components: {
    TopBar
  },
  created () {
    console.log(this.Loading)
    this.Loading.open()
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  #warn-bar{
    width:100%;
    height:34px;
    background:#ffd41d;
    line-height:34px;
    color:#1a1a1a;
    .goNewWeb{
      width:120px;
      line-height:24px;
      border:1px solid #fe6d01;
      color:#fe6d01;
      border-radius:12px;
      cursor: pointer
    }
  }
  .main-wrapper{
    width:1200px;
    margin:0 auto;
  }
}
</style>
