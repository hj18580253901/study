<template>
  <div class="content">
    <top-search class="top"></top-search>
    <swiper-con class="banner" :swiperData='dataList' :swiperOption = 'setParameter' :whetherShow= 'true'></swiper-con>
    <menue-box class="menueBox" :someData="menueData" wth='20%'></menue-box>
    <div class="discount">
      <div class="more"></div>
      <div class="showBox">
        <swiper-con class="innerShowBix" :swiperData='ShowBoxData' :swiperOption = 'setShowBox' :whetherShow= 'true'></swiper-con>
      </div>
     </div>
     <div class="recommend">
       <div class="top"></div>
       <div class="bot_flexCon">
         <div class="item"></div>
         <div class="item"></div>
       </div>
     </div>
     <div class="ad"></div>
     <div class="guessYouLike">
       <div class="tit">— 猜你喜欢 —</div>
       <div class="guess_main">
        <div class="guess_item" v-for="(item,key) in shopData" :key='key'>
          <img  class="shopImg" :src="item.imgUrl" alt="">
          <div class="shopInfo">
            <h2 class="shopName">{{item.name}}</h2>
            <p class="time">{{item.needTime}}分钟送达</p>
            <p class="start_price">起送价￥{{item.min_pri}}|配送费{{item.deli_pri}}元<span class="num">月售{{item.month_sale}}</span></p>
            <p class="prompt">新用户立减17元，首次使用美团支付最高再减3元</p>
          </div>
        </div>
       </div>
     </div>
  </div>
</template>
<script>
import SwiperCon from '@src/components/SwiperCon'
import MenueBox from '@src/components/MenueBox'
import TopSearch from '@src/components/TopSearch'
export default {
  name: 'index',
  components: {
    SwiperCon,
    MenueBox,
    TopSearch
  },
  data: function () {
    return {
      searchName: '嘉禾一品粥(外卖满40减21)',
      cityName: '',
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
      dataList: [
        {imgUrl: '/static/images/home/banner1.jpg'},
        {imgUrl: '/static/images/home/banner2.jpg'},
        {imgUrl: '/static/images/home/banner3.jpg'}
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
      ShowBoxData: [
        {imgUrl: '/static/images/home/showBox_img1.jpg'},
        {imgUrl: '/static/images/home/showBox_img1.jpg'},
        {imgUrl: '/static/images/home/showBox_img1.jpg'},
        {imgUrl: '/static/images/home/showBox_img1.jpg'},
        {imgUrl: '/static/images/home/showBox_img1.jpg'},
        {imgUrl: '/static/images/home/showBox_img1.jpg'}
      ],
      setShowBox: {
        slidesPerView: 3,
        spaceBetween: 5
      },
      shopData: [
        {
          id: '0',
          imgUrl: '/static/images/home/food.png',
          name: '早餐店1（西门店）',
          needTime: '40',
          min_pri: '20',
          deli_pri: '3',
          month_sale: '3327'
        },
        {
          id: '1',
          name: '早餐店2',
          imgUrl: '/static/images/home/shopPic1.jpg',
          needTime: '30',
          min_pri: '20',
          deli_pri: '3',
          month_sale: '3327'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
  .content{
    .weather{
      width:100%;
      height:40px;
      .wea_l{
        float:left;
        width:40%;
        height:40px;
        line-height:40px;
        .sun{
          font-size:30px!important;
        }
        .temper{
          display:inline-block;
          font-size:29px;
          font-weight:600;
          margin-left:5px;
          color:#666666;
        }
        .txt_des{
          display:inline-block;
          vertical-align:top;
          font-size:12px;
          .item{
            display:block;
            height:20px;
            line-height:20px;
            text-align:left;
          }
        }
      }
    }
    .top{
      width:100%;
      height:60px;
    }
    .banner{
      background:#abcdef;
      width:100%;
      height:100px;
    }
    .menueBox{
      width:100%;
      background:#fff;
      padding:15px 20px;
    }
    .discount{
      width:100%;
      height:190px;
      padding:20px;
      margin:10px 0;
      background:#fff;
      display:flex;
      justify-content:space-around;
      .more{
        width:80px;
        height:150px;
        margin-right:10px;
        border-radius:8px;
        background:#fc7258;
      }
      .showBox{
        flex:3;
        height:150px;
        overflow:hidden;
      }
      .innerShowBix{
        height:150px;
      }
    }
    .recommend{
      width:100%;
      height:330px;
      background:#fff;
      padding:10px 20px;
      .top{
        height:150px;
        background:#f0efef;
        border-radius:5px;
      }
      .bot_flexCon{
        width:100%;
        heigth:150px;
        margin-top:10px;
        display:flex;
        justify-content:space-around;
        .item{
          flex:1;
          height:150px;
          border-radius:5px;
          background:#f0efef;
          &:first-child{
            margin-right:10px;
          }
        }
      }
    }
    .ad{
      width:100%;
      height:120px;
      padding:0 20px;
      background:#abcdef;
      margin:10px 0;
    }
    .guessYouLike{
      width:100%;
      height:auto;
      background:#fff;
      .tit{
        height:60px;
        line-height:60px;
        text-align:center;
        color:#a8a8a8;
        font-size:14px;
        border-bottom:1px solid #e2e1e1;
      }
      .guess_main{
        .guess_item{
          height:140px;
          padding:20px 10px;
          display:flex;
          justify-content: space-around;
          border-bottom:1px solid #e2e1e1;
         .shopImg{
            width:90px;
            height:90px;
            border:1px solid #ddd;
            vertical-align:middle;
            margin-right:10px;
         }
         .shopInfo{
            flex:1;
            height:90px;
            vertical-align:middle;
            .shopName{
              font-size:13px;
              font-weight:600;
              margin-bottom:10px;
            }
            .time,.start_price{
              font-size:14px;
              color:#959595;
              line-height:25px;
              text-overflow:ellipses;
              .num{
                display:inline-block;
                float:right;
                margin-right:15px;
              }
            }
            .prompt{
              font-size:12px;
              display:inline-block;
              padding:2px 5px;
              border-radius:5px;
              border:1px solid red;
              margin-top:5px;
              line-height:15px;
              color:red;
              text-overflow:ellipses;
            }
         }
        }
      }
    }
  }
</style>
