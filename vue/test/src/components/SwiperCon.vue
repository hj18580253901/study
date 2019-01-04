<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for='(item,index) in swiperData' :key='index' :class="{textslide: !whetherShow}" ><img :src="item.imgUrl" v-if='whetherShow' alt="" width='100%'><span v-if='!whetherShow' @click='handle(item)' :class="{find_pNav: isBotBorder === item.id, share_btnAct: isBocBag === item.id}">{{item.text}}</span></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'SwiperCon',
  props: ['swiperData', 'swiperOption', 'isSlideActive', 'whetherShow', 'wid'],
  components: {
    swiper,
    swiperSlide
  },
  data: function () {
    return {
      isBotBorder: '',
      isBocBag: '',
      path: ['/vicinity/shareFood', '/vicinity/life', '/vicinity/play', '/vicinity/hotel', '/vicinity/vicAll', '/vicinity/shareFood/hot']
    }
  },
  created () {
    if (this.$route.path === '/find') {
      this.isBotBorder = 0
    } else if (this.path.indexOf(this.$route.path) !== -1) {
      this.isBocBag = 0
    }
  },
  methods: {
    handle: function (e) {
      var id = e.id
      if (this.$route.path === '/find') {
        this.isBotBorder = id
      } else if (this.path.indexOf(this.$route.path) !== -1) {
        this.isBocBag = id
      }
    }
  }
}
</script>
<style lang="scss">
  @import "swiper/dist/css/swiper.min.css";
  .swiper-pagination .active{
    background: #f8f8f8;
  }
  .slide_box{
    width:80px!important;
  }
  .textslide{
    width:auto!important;
    img{
      display:block;
    }
  }
  .share_btnAct{
    padding:4px 5px;
    background:#f6c4c4;
    color:red;
    border-radius: 10px;
  }
  .find_pNav{
    padding:5px 0;
    border-bottom: 3px solid #25d2c0;
  }
</style>
