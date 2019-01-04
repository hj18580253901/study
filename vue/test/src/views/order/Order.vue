<template>
  <div class="myOrder">
    <div class="topBar t-c">我的订单</div>
    <ul class="order_tab">
      <li class='item' v-for="(item, key) in navArr" :key="key" @click="jumpDetail(item)">
        <i class="iconfont ico" :class="item.icon"></i>
        <p>{{item.text}}</p>
      </li>
    </ul>
    <div class="lately">
      <h3 class='title'>最近订单</h3>
      <router-link to='/order/complete/details'>
        <div class="latelyOrder" v-for='(item, key) in orderInfo' :key='key'>
          <div class="meiTuan_takeOut">
            <img class="meituanIco" src="/static/images/home/meituan.png" alt="">
            <span class="meituan_txt">美团外卖</span>
            <span class='fr ver-m'>已完成</span>
          </div>
          <div class="infoBox">
            <div class="shopInfo">
              <img class="shopPic" :src="item.imgUrl" alt="">
              <span class="f-w shop_name">{{item.name}}</span>
              <img class="forward" src="/static/images/home/before.png" alt="">
            </div>
            <p class="buy_time">下单时间：{{item.buy_time}}</p>
            <p class="buy_price">总价：￥{{item.total_price}}</p>
          </div>
          <div class="onceAgain t-c">再来一单</div>
        </div>
      </router-link>
    </div>
    <router-link to='/order/detail'><div class="viewAll">查看全部 ></div></router-link>
    <div class="someRecord">
      <h3 class='record_name'>我的收藏</h3>
      <div class="record_infoBox">
        <food-con :infoData='infoData'></food-con>
      </div>
    </div>
    <div class="someRecord">
      <h3 class='record_name'>我的浏览</h3>
      <div class="record_infoBox">
        <food-con :infoData='infoData'></food-con>
      </div>
    </div>
  </div>
</template>
<script>
import FoodCon from '@src/components/FoodCon'
export default {
  name: 'order',
  components: {
    FoodCon
  },
  data: function () {
    return {
      clickElTxt: '',
      navArr: [
        {
          id: 1,
          text: '代付款',
          icon: 'icon-icon-test'
        }, {
          id: 2,
          text: '待使用',
          icon: 'icon-daishiyong'
        }, {
          id: 3,
          text: '待评价',
          icon: 'icon-pingjia'
        }, {
          id: 4,
          text: '退款/售后',
          icon: 'icon-qianbi1'
        }, {
          id: 5,
          text: '全部',
          icon: 'icon-icon-test'
        }
      ],
      infoData: [
        {id: 0, name: '店铺1', score: 5.0, every_price: 15, isRest: true, special_txt: '9.9传统煎饼单人套餐,9.9元传统手抓饼单人套餐', imgUrl: '/static/images/home/shopPic1.jpg'}
      ],
      orderInfo: [
        {id: '1001', name: '柴米油盐(西门店)', buy_time: '2018-12-09 12:30', total_price: '20.00', imgUrl: '/static/images/home/shopPic1.jpg'}
      ]
    }
  },
  methods: {
    jumpDetail: function (e) {
      this.$router.push({path: '/order/detail', query: {id: e.id}})
    }
  }
}
</script>
<style lang="scss">
  .myOrder{
    background:#f6f7fa;
    padding:10px 0;
    width:100%;
    min-height:100%;
    .topBar{
      height:40px;
      line-height:40px;
      font-weight:600;
      font-size:16px;
    }
    ul.order_tab{
      display:flex;
      justify-content:space-between;
      height:80px;
      .item{
        flex:1;
        height:55px;
        font-size:12px;
        text-align:center;
        p{
          margin-top:10px;
        }
        .ico{
          color:#ff923e;
          font-size:30px;
          display:inline-block;
          width:30px;
          height:30px;
        }
        .special{
          font-size:31px;
        }
        .special2{
          display:inline-block;
          font-size:22px;
          padding:3px;
        }
      }
    }
    .lately{
      padding:0 20px;
      .title{
        font-size:14px;
        font-weight:600;
        line-height:30px;
      }
      .latelyOrder{
        height:210px;
        border:1px solid #ddd;
        background:#fff;
        padding:15px;
        border-radius:10px;
        margin-bottom:35px;
        box-shadow: 2px 20px 15px rgba(253, 240, 204, 0.4);
        .meiTuan_takeOut{
          line-height:30px;
          height:30px;
          .meituanIco{
            width:30px;
            height:30px;
          }
          span{
            vertical-align: middle
          }
        }
        .infoBox{
          margin-top:20px;
          .shopInfo{
            height:40px;
            .shopPic{
              width:40px;
              height:40px;
            }
            .shop_name{
              vertical-align: middle;
              margin:0 5px;
            }
            .forward{
              width:15px;
             vertical-align: middle
            }
          }
          p{
            margin-left:47px;
            font-size:14px;
            font-weight: 500;
            color:#959595;
            line-height:22px;
          }
        }
        .onceAgain{
          display:inline-block;
          width:110px;
          height:40px;
          line-height:40px;
          font-weight:500;
          border:1px solid #ddd;
          border-radius:20px;
          float:right;
        }
      }
    }
    .viewAll{
      font-size:15px;
      color:#5f699e;
      text-align:center;
      margin-bottom:15px;
    }
    .someRecord{
      padding:0 20px;
      .record_name{
        font-weight:600;
      }
      .record_infoBox{
        padding-top:20px;
      }
    }
  }

</style>
