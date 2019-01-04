<template>
  <div class="food_index">
    <div class="top">
      <div class="return" @click='returnClick'><img class="img_return" src="/static/images/home/return.png" alt=""></div>
      <div class="search"><span>输入商家名、品类或商圈</span></div>
      <div class="address"><i class="iconfont icon-ditu addImg"></i></div>
    </div>
    <swiper-con class="banner" :swiperData='dataList' :swiperOption = 'setParameter'></swiper-con>
    <menue-box class="menueBox" :someData="menueData" wth='20%'></menue-box>
  </div>
</template>
<script>
import SwiperCon from '@src/components/SwiperCon'
import MenueBox from '@src/components/MenueBox'
import {mixin} from '@src/resource/setMixin'
export default {
  name: 'food',
  mixins: [mixin],
  components: {
    SwiperCon,
    MenueBox
  },
  data: function () {
    return {
      menueData: [
        {imgUrl: '/static/images/home/food.png', title: '美食', page_path: 'food'},
        {imgUrl: '/static/images/home/food.png', title: '美食', page_path: 'food'},
        {imgUrl: '/static/images/home/food.png', title: '美食', page_path: 'food'},
        {imgUrl: '/static/images/home/food.png', title: '美食', page_path: 'food'},
        {imgUrl: '/static/images/home/food.png', title: '美食', page_path: 'food'},
        {imgUrl: '/static/images/home/food.png', title: '美食', page_path: 'food'},
        {imgUrl: '/static/images/home/food.png', title: '美食', page_path: 'food'},
        {imgUrl: '/static/images/home/food.png', title: '美食', page_path: 'food'},
        {imgUrl: '/static/images/home/food.png', title: '美食', page_path: 'food'},
        {imgUrl: '/static/images/home/food.png', title: '美食', page_path: 'food'}
      ],
      setParameter: {
        autoplay: {
          delay: '2000'
        },
        pagination: {
          el: '.swiper-pagination',
          bulletActiveClass: 'active'
        }
      },
      dataList: [
        {imgUrl: ''},
        {imgUrl: ''},
        {imgUrl: ''},
        {imgUrl: ''}
      ]
    }
  }
}
</script>
<style lang='scss'>
 @import '~@src/assets/style/font.scss' ;
.food_index{
  .top{
    width:100%;
    height:60px;
    background:#fff;
    display:flex;
    justify-content: space-around;
    .return{
      flex:1;
      line-height:60px;
      .img_return{
        width:30px;
        height:30px;
        margin-left:15px;
      }
    }
    .search{
      flex:4;
      height:40px;
      margin:10px 0;
      line-height:40px;
      text-indent: 50px;
      background:#eee;
      border-radius: 20px;
      border:1px solid #eee;
      span{
        color:#848585;
      }
    }
    .address{
      flex:1;
      line-height: 60px;
      text-indent: 15px;
    }
  }
  .banner{
    background:#abcdef;
    width:100%;
    height:100px;
  }
  .menueBox{
    padding:20px;
  }
}
</style>
