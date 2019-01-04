<template>
  <div id="app">
    <div class="main">
      <router-view></router-view>
    </div>
    <tab-bar v-if='somePathShow'></tab-bar>
  </div>
</template>
<script>
import TabBar from './components/TabBar'
export default {
  name: 'App',
  components: {
    TabBar
  },
  computed: {
    somePathShow: function () {
      var arrPath = ['/index', '/vicinity', '/vicinity/shareFood', '/vicinity/life', '/vicinity/play', '/vicinity/hotel', '/vicinity/vicAll', '/find', '/order', '/owner', '/vicinity/shareFood/hot']
      var path = this.$route.path
      var result = arrPath.indexOf(path)
      return result !== -1
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .main{
    width:100vw;
    background:#f4f4f4;
    min-height:100vh;
    overflow:hidden;
    font-size:14px;
    margin-bottom:60px;
  }
  .is-active .iconfont{
    color:#0bb4b7!important;
  }
}
</style>
