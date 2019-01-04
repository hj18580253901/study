<template>
  <div class="vicinityP">
    <top-search isInputClass='true'></top-search>
    <carousel-switch></carousel-switch>
    <div class='topTab'>
      <router-link class="item"  v-for='(item, key) in topTabArr' :key='key' :to='item.path'>{{item.text}}</router-link>
    </div>
    <div class="vic_main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import TopSearch from '@src/components/TopSearch'
import CarouselSwitch from '@src/components/CarouselSwitch'
export default {
  name: 'vicinity',
  components: {
    TopSearch,
    CarouselSwitch
  },
  data: function () {
    return {
      topTabArr: [
        {text: '享美食', path: '/vicinity/shareFood'},
        {text: '惠生活', path: '/vicinity/life'},
        {text: '爱玩乐', path: '/vicinity/play'},
        {text: '住酒店', path: '/vicinity/hotel'},
        {text: '全部', path: '/vicinity/vicAll'}
      ]
    }
  }
}
</script>
<style lang="scss">
  .vicinityP{
    background:#fff;
    .special{
      border-bottom:1px solid #ddd;
    }
    .topTab{
      height:35px;
      padding:0 20px;
      display:flex;
      justify-content:space-around;
      .item{
        flex:1;
        line-height:35px;
        text-align:center;
        font-size:14px;
        position:relative;
        &:after{
          content:'';
          display:inline-block;
          width:20px;
          border:1px solid red;
          position:absolute;
          bottom:0;
          left:50%-14;
          display:none;
        }
      }
      .is-active{
        font-size:16px;
        color:red;
        font-weight:600;
        &:after{
          display:block;
        }
      }
    }
    .vic_main{
      width:100%;
      padding:10px 20px;
      margin-bottom:60px;
    }
  }
</style>
