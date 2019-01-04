<template>
  <div class='find_page'>
    <div class='find_top t-c f-w'>发现</div>
    <div class="find_main">
      <div class="nav_box">
        <swiper-con :swiperData='dataList' :swiperOption = 'setShowBox' :whetherShow= 'false' class='nav_item'></swiper-con>
      </div>
      <finditem-one :checkMode='true' :isSpecial='false' infoData='infoData'></finditem-one><!--一个大视屏模式-->
      <finditem-one :checkMode='false' :isSpecial='false'></finditem-one><!--三张图片模式-->
      <finditem-one :checkMode='false' :isSpecial='true'></finditem-one><!--右侧一张图片模式-->
    </div>
  </div>
</template>
<script>
import SwiperCon from '@src/components/SwiperCon'
import FinditemOne from '@src/components/FinditemOne'
export default {
  name: 'find',
  components: {
    SwiperCon,
    FinditemOne
  },
  data: function () {
    return {
      dataList: [
        {text: '精选', id: 0},
        {text: '关注', id: 1},
        {text: '爱美食', id: 2},
        {text: '出去浪', id: 3},
        {text: '健康生活', id: 4},
        {text: '变漂亮', id: 5},
        {text: '约电影', id: 6}
      ],
      setShowBox: {
        slidesPerView: 5,
        spaceBetween: 30
      },
      infoData: [
        {id: '0', title: '俯瞰欧洲小巴黎，里加的旅行体验', kinds: 'Travel', people: 329}
      ]
    }
  }
}
</script>
<style lang="scss">
  .find_page{
    width:100%;
    .find_top{
      height:45px;
      line-height:45px;
      border-bottom:1px solid #ddd;
      font-size:16px;
    }
    .find_main{
      background:#fff;
      .nav_box{
        width:100%;
        height:41px;
        padding:0 20px;
        overflow:hidden;
        border-bottom:1px solid #eee;
        .nav_item{
          height:41px;
          line-height:41px;
        }
      }
    }
  }
</style>
