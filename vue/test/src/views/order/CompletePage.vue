<template>
  <div class='completeP'>
    <div class="top_iconBox">
      <span v-for= '(item, key) in iconData' :key='key' :class="item.class" @click='iconClick(item)'><i class='iconfont icon' :class="item.icon"></i></span>
    </div>
    <h2>订单已完成 ></h2>
    <div class="gratituBox boxCom_style">
      <p class='text'>感谢你对美团外卖的信任，期待再次光临。</p>
      <button class='btn'>再来一单</button>
    </div>
    <div class="ad"></div>
    <div class="orderInfoBox boxCom_style">
      <div class="Info_tit">
        <span class="shopName f-w">柴米油盐(西门店) ></span>
        <span class="iconBox mar-l t-c fr iconfont icon-dianhua"></span>
        <span class="iconBox t-c fr iconfont icon-pingjia"></span>
      </div>
      <div class="DetailInfo">
        <div class="detail_item" v-for='(item, key) in orderDetail' :key='key'>
          <img class="item_pic" :src="item.imgUrl" alt="">
          <ul class='foodInfo'>
            <li class="name">{{item.food_name}}</li>
            <li class='num'>x {{item.num}}</li>
          </ul>
          <span class="price inline-block fr">￥{{item.unit_price * item.num}}</span>
        </div>
      </div>
      <div class="otherPriceBox">
        <p class='priceBox' v-for='(item, key) in otherPrice.add' :key='key'><span>{{item.text}}</span><span class="price">￥{{item.price}}</span></p>
      </div>
      <div class="reduceBox">
        <span class="text_reduce inline-block t-c">减</span>
        <span>满减优惠</span>
        <span class="fr reduce_num">-￥{{otherPrice.reduce}}</span>
      </div>
      <div class="total_box t-r">
        <span class="prefer">已优惠<i class="font-color">￥{{otherPrice.reduce}}</i></span><span>合计<i class="font-color">￥{{total_price}}</i></span>
      </div>
    </div>
    <div class="delInfoBox boxCom_style" v-for='(items,key) in infoData' :key= 'key'>
      <div class="del_top">
        <span class='f-w'>{{items.title}}</span>
        <span class='fr' v-if="items.id === 0">联系骑手<i class="iconfont iconBox t-c icon-dianhua"></i></span>
      </div>
      <ul class="info_main">
        <li class="item clearfix" v-for='(item, key1) in items.otherInfo' :key='key1'>
          <span class="info_name">{{item.name}}</span>
          <div class="fr info_con">
            <span>{{item.content}}</span>
            <span class='more f-w' v-if='item.mark'> > </span>
            <span class='copyBtn inline-block' v-if='item.mark === 0'>复制</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mixin} from '@src/resource/setMixin'
export default {
  name: 'completePage',
  mixins: [mixin],
  data: function () {
    return {
      iconData: [
        {class: 'return', icon: 'icon-fanhui', id: 0},
        {class: 'xiaoxi fr', icon: 'icon-pingjia', id: 1},
        {class: 'kefu fr', icon: 'icon-kefu', id: 2}
      ],
      otherPrice: {
        add: [
          {text: '包装费', price: 1.5},
          {text: '配送费', price: 3}
        ],
        reduce: 8,
        total_price: ''
      },
      orderDetail: [
        {id: '1001', name: '店铺1', food_name: '食物1', num: 2, unit_price: 9, imgUrl: '/static/images/home/shopPic1.jpg'}
      ],
      infoData: [
        {
          id: 0,
          title: '配送信息',
          otherInfo: [
            {name: '配送服务', content: '美团快递'},
            {name: '配送骑手', content: 'XXX', mark: 1},
            {name: '期望时间', content: '立即配送'},
            {name: '配送地址', content: '北京市顺义区西新南区40号楼2单元北京市顺义区西新南区40号楼2单元'}
          ]
        },
        {
          id: 2,
          title: '定单信息',
          otherInfo: [
            {name: '订单号码', content: '28679012345689', mark: 0},
            {name: '下单时间', content: '2018-12-29 12:50:00'},
            {name: '支付方式', content: '在线支付'}
          ]
        }
      ]
    }
  },
  created: function () {
    const foodPrice = this.orderDetail.reduce((pre, item) => {
      return pre + item.unit_price * item.num
    }, 0)
    const otherPrice = this.otherPrice.add.reduce((pre, item) => {
      return pre + item.price
    }, 0)
    this.total_price = foodPrice + otherPrice - this.otherPrice.reduce
  },
  methods: {
    iconClick: function (e) {
      if (e.id === 0) {
        return this.returnClick()
      }
    }
  }
}
</script>
<style lang='scss'>
 @import '~@src/assets/style/font.scss' ;
 $gray: #eee;
  .completeP{
    width:100%;
     padding:0 20px;
     /*顶部返回栏内容样式*/
    .top_iconBox{
      height:45px;
      margin:10px 0 20px 0;
      line-height:45px;
      .return,.kefu,.xiaoxi{
        display:inline-block;
        width:35px;
        height:35px;
        border-radius: 50%;
        background:rgba(122,122,122,0.7);
        text-align: center;
        line-height: 35px;
        .icon{
          color:#fff;
          font-size:23px;
        }
      }
      .kefu{
        margin-right: 15px;
      }
    }
    /*分块公用样式*/
    .boxCom_style{
      background:#fff;
      padding:15px 20px;
      margin:10px 0;
    }
    /*提示订单完成并感谢内容块*/
    .gratituBox{
      height:120px;
      .text{
        font-size:13px;
        height:30px;
        line-height:30px;
        color:#333;
      }
      .btn{
        width:80px;
        height:30px;
        font-size:13px;
        background:#ffd161;
        margin-top:10px;
        border-radius: 5px
      }
    }
    /*广告*/
    .ad{
      width:100%;
      height:90px;
      background:#eee;
    }
   /* icon图标公用样式*/
    .iconBox{
      display:inline-block;
      width:30px;
      height:30px;
      line-height:30px;
      border-radius: 50%;
      font-size:15px;
      color:#656565;
      border:1px solid #ddd;
      margin-left:5px;
    }
   /* 定单信息*/
    .orderInfoBox{
      .Info_tit{
        height:45px;
        border-bottom:1px solid $gray;
        line-height:33px;
        .shopName{
          font-size:16px;
        }
        .mar-l{
          margin-left:10px;
        }
      }
      .DetailInfo{
        border-bottom:1px solid $gray;
        .detail_item{
          height: 60px;
          margin-bottom: 20px;
          .item_pic{
            width:60px;
            height:60px;
            border:1px solid $gray;
          }
          .foodInfo{
            display:inline-block;
            font-size:13px;
            vertical-align: middle;
            height:60px;
            padding-top:15px;
            margin-bottom:20px;
            .name{
              color:#333;
            }
            .num{
              color:#999999;
              margin-top:29px;
             /* padding-top:20px;*/
            }
          }
          .price{
            font-size:16px;
            margin-top:12px;
          }
        }
      }
     .otherPriceBox,.reduceBox{
        border-bottom:1px solid $gray;
        .priceBox{
          margin:10px 0;
          .price{
            float:right;
          }
        }
      }
      .reduceBox{
        padding:15px 0;
        .text_reduce{
          width:16px;
          height:16px;
          background:#fd6556;
          color:#fff;
          line-height:16px;
        }
        .reduce_num{
          color:red;
        }
      }
      .total_box{
        margin-top:15px;
        height:20px;
        .prefer{
          margin-right:15px;
        }
        .font-color{
          color:red;
        }
      }
    }
   /* 配送信息*/
    .delInfoBox{
      .del_top{
        height:40px;
        line-height:40px;
        border-bottom:1px solid $gray;
      }
      .info_main{
        .item{
          padding:10px 0;
          .info_name{
            color:#acacac;
          }
          .info_con{
            display:block;
            max-width:70%;
            color:#333;
            text-indent:10px;
            line-height:18px;
          }
        }
        .more{
          color:#bdbdbd;
        }
        .copyBtn{
          width:50px;
          height:25px;
          font-size:13px;
          line-height:25px;
          border-radius:5px;
          border:1px solid $gray;
          margin-left: 5px;
        }
      }
    }
  }
</style>
