<template>
  <div class="orderDetail">
    <div class="detail_top">
      <img  class="return" @click='returnClick' src="/static/images/home/return.png" alt="">
      <span class="text_myOrder f-w">我的订单</span>
    </div>
    <ul class="detail_nav">
      <li class="item" v-for='(item, key) in navArr' :class="{active: item.isShow}" :key='key' @click= 'handle(item)'>{{item.text}}</li>
    </ul>
    <div class="detail_main">
      <div class="con_null" style='display:none'>
        <div class="null_txt">
          <h3 class="null_title f-w">暂无订单</h3>
          <p class="null_prompt">可以去看看有哪些想买的</p>
          <button class='lookAround t-c'>随便逛逛</button>
        </div>
      </div>
      <div class="cont_box">
        <ul class="cont_item" v-for='(item, key) in infoData' :key='key'>
          <li class='item_l'><img class="left_pic" :src="item.imgUrl" alt=""></li>
          <li class="item_m">
            <h2 class="name">{{item.name}}</h2>
            <p class='time'>下单时间：{{item.buy_time}}</p>
            <p class="price">总价：￥{{item.total_price}}</p>
          </li>
          <li class="item_r">
            <p class='complete'>已完成</p>
            <button class="onceAgain">再来一单</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {mixin} from '@src/resource/setMixin'
export default {
  name: 'orderDetail',
  mixins: [mixin],
  data: function () {
    return {
      id: '',
      navArr: [
        {
          id: 5,
          text: '全部',
          isShow: false

        },
        {
          id: 1,
          text: '代付款',
          isShow: false
        },
        {
          id: 3,
          text: '待评价',
          isShow: false
        },
        {
          id: 2,
          text: '待使用',
          isShow: false
        },
        {
          id: 4,
          text: '退款/售后',
          isShow: false
        }
      ],
      infoData: [
        {id: '1001', name: '店铺店铺1', buy_time: '2018-12-19 12:00', total_price: '24.50', imgUrl: '/static/images/home/shopPic1.jpg'}
      ]
    }
  },
  created: function () {
    let queryId = this.$route.query.id
    if (queryId) this.id = queryId
    this.id = 0
    console.log(this.id)
  },
  methods: {
    handle: function (e) {
      this.navArr.forEach((item, index) => {
        if (item.isShow === true) {
          item.isShow = false
          return ''
        }
      })
      e.isShow = true
    }
  },
  mounted: function () {
    this.navArr.forEach((item, index) => {
      if (item.id === this.id) {
        item.isShow = true
        return ''
      }
    })
    this.navArr[this.id].isShow = true
  }
}
</script>
<style lang='scss'>
  .orderDetail{
    width:100%;
    height:100%;
    overflow:hidden;
    .detail_top{
      padding:0 20px;
      height:45px;
      line-height:45px;
      border-bottom:1px solid #ddd;
     .return{
        width:25px;
        height:25px;
        margin-right:20px;
      }
      .text_myOrder{
        display:inline-block;
        position:relative;
        &:after{
          display:block;
          content:'';
          border:5px solid transparent;
          border-left:5px solid #333;
          position:absolute;
          right:-15px;
          bottom:10px;
          transform:rotate(45deg);
        }
      }
    }
    .detail_nav{
      display:flex;
      justify-content: space-between;
      margin-bottom:15px;
      background:#fff;
      .item{
        flex:1;
        height:45px;
        line-height:45px;
        font-weight:500;
        text-align:center;
      }
      .active{
        border-bottom:2px solid #32b9aa;
        color:#32b9aa;
      }
    }
    .detail_main{
      min-height:calc(100vh - 90px);
      .con_null{
        width:100%;
        height:calc(100vh - 90px);
        background:url('/static/images/home/orderDetail_null_bg.png') no-repeat 50% 20%;
        background-size:30%;
        position:relative;
        .null_txt{
          width:50%;
          height:120px;
          position:absolute;
          top:50%;
          left:50%;
          transform:translate3d(-50%, -50%, 0);
          text-align: center;
          .null_prompt{
            font-size:13px;
            margin:15px 0 20px 0;
            color:#888;
          }
          .lookAround{
            width:90px;
            height:30px;
            height:30px;
            font-size:13px;
            border:1px solid #47d3c6;
            border-radius: 5px;
            color:#47d3c6;
            background:none;
          }
        }
      }
      .cont_box{
        background:#fff;
        width:100%;
        min-height:calc(100vh - 90px);
        margin-top:15px;
        .cont_item{
          width:100%;
          border-bottom:1px solid #ddd;
          padding:20px 10px;
          display:flex;
          justify-content: space-between;
          .item_l{
            flex:1;
            img.left_pic{
              width:60px;
              height:60px;
            }
          }
          .item_m{
            flex:3;
            font-size:13px;
            color:#a3a3a3;
            .name{
              font-size:14px;
              font-weight:600;
              color:#333;
            }
            .time,.price{
              margin-top: 8px;
              font-weight:500;
            }
          }
          .item_r{
            flex:1;
            font-size:13px;
            .complete{
              color:#06c1ae;
              text-align:right;
              margin-top:5px;
            }
            .onceAgain{
              width:60px;
              height:30px;
              border:1px solid #ff9900;
              color:#ff9900;
              border-radius: 5px;
              background:none;
              margin-top:18px;
              float:right;
            }
          }
        }
      }
    }
  }
</style>
