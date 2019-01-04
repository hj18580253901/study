<template>
  <div class="foodBox">
    <div class="kind_btn" v-if="!(this.$route.path === '/vicinity/vicAll')">
      <swiper-con class="share_btn" :swiperData='dataList' :swiperOption = 'setShowBox' :whetherShow= 'false'></swiper-con>
    </div>
    <div class="food_con">
      <food-con :infoData='infoData'></food-con>
    </div>
  </div>
</template>
<script>
import FoodCon from '@src/components/FoodCon'
import SwiperCon from '@src/components/SwiperCon'
export default {
  name: 'shareFood',
  components: {
    FoodCon,
    SwiperCon
  },
  data: function () {
    return {
      dataList: [
        {text: '热门', id: 0},
        {text: '外卖', id: 1},
        {text: '甜点饮品', id: 2},
        {text: '小吃快餐', id: 3},
        {text: '火锅烧烤', id: 4},
        {text: '川湘菜', id: 5},
        {text: '日韩料理', id: 6},
        {text: '自助', id: 7}
      ],
      setShowBox: {
        slidesPerView: '5',
        spaceBetween: ''
      },
      infoData: [
        {id: 0, name: '店铺1', score: 5.0, every_price: 15, isRest: true, special_txt: '9.9传统煎饼单人套餐,9.9元传统手抓饼单人套餐', imgUrl: ''},
        {id: 1, name: '店铺店铺店铺2', score: 4.0, every_price: 15, isRest: false, special_txt: '9.9传统煎饼单人套餐,9.9元传统手抓饼单人套餐', imgUrl: ''}
      ]
    }
  },
  created: function () {
    const clientW = document.body.clientWidth - 40
    if (clientW < 313) {
      console.log(clientW - 40)
      this.setShowBox.spaceBetween = 10
    } else if (clientW >= 313) {
      this.setShowBox.spaceBetween = 20
    }
  }
}
</script>
<style lang='scss'>
  .foodBox{
    width:100%;
    height:100%;
    .kind_btn{
      width:100%;
      overflow:hidden;
      height:30px;
      line-height:30px;
      .share_btn{
        height:40px;
      }
    }
    .food_con{
      width:100%;
      height:300px;
    }
  }
</style>
