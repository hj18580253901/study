<template>
  <div class="orders">
    <div class="order_list" v-if="isChange === 1">
      <div class="order_item">
        <div class="title_line">
          <span class="t1">订单号：20170830144443150407548356256</span>
          <span class="t2">原价(元)</span>
          <span class="t3">售价(元)</span>
          <span class="t4">数量</span>
          <span class="t5">交易状态</span>
        </div>
        <div class="content clearfix" @click='isChange = 2'>
          <div class="c1 fl rel">
            <span class='ico inline-block abs'><img src="" alt=""></span>
            <div class="txt_info">
              <p class="tit_name">精品体验课-初级</p>
              <p class="course_info">体验课</p>
              <p class="course_info">4人班 25分钟 1课时</p>
              <p class="course_info">班号：AEB100011</p>
            </div>
          </div>
          <span class="inline-block c2">￥0.00</span>
          <span class="inline-block c3">￥0.00</span>
          <span class="inline-block c4">X1</span>
          <span class="inline-block c5">交易成功</span>
        </div>
        <div class="realPay">实付款：<span>￥0</span></div>
      </div>
    </div>
    <div class="order_detail" v-if='isChange === 2'>
      <h1 class="mark_tit">我的订单 / 订单详情</h1>
      <div class="trade  clearfix">
        <div class="state fl">
          <span class="inline-block icon"></span>
          <span class="text_tip inline-block">订单状态：交易成功</span>
        </div>
        <div class="detail fl">
          <p>订单编号： 20170830144443150407548356256</p>
          <p>支付详情：</p>
        </div>
        <div class="time fl">
          <p>支付时间： 2017-08-30 14:44:44</p>
          <p>创建时间： 2017-08-30 14:44:44</p>
        </div>
      </div>
      <div class="order_list det_ordList">
        <div class="order_item">
          <div class="title_line order_detTit">
            <span class="t1">订单详情</span>
            <span class="t3">售价(元)</span>
            <span class="t4">数量</span>
          </div>
          <div class="content clearfix order_detCon">
            <div class="c1 fl rel">
              <span class='ico inline-block abs'><img src="" alt=""></span>
              <div class="txt_info">
                <p class="tit_name">精品体验课-初级</p>
                <p class="course_info">体验课</p>
                <p class="course_info">4人班 25分钟 1课时</p>
                <p class="course_info">班号：AEB100011</p>
              </div>
            </div>
            <span class="inline-block c3">￥0.00</span>
            <span class="inline-block  num">X1</span>
          </div>
          <div class="price_detil">
            <div class="totalPrice">总价<span class="inline-block num">￥0.00</span></div>
            <div class="det_pay">实付款：<span>￥0.00</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'order',
  data () {
    return {
      isChange: 1
    }
  }
}
</script>
<style lang='scss'>
  .orders{
    width:100%;
    .order_list{
      .order_item{
        background:#fff;
        padding:20px 0 20px 30px;
        .title_line{
          padding:20px 0;
          border-bottom:1px solid #eee;
          span{
            display:inline-block;
            text-align: center;
            color:#666;
            &:nth-child(1){
              width:38%;
              font-weight:600;
              color:#333;
              text-align: left;
            }
            &:nth-child(2){
              width:15%;
            }
            &:nth-child(3){
              width:15%;
            }
            &:nth-child(4){
              width:15%;
            }
            &:nth-child(5){
              width:15%;
            }
          }
        }
        .content{
          border-bottom:1px solid #eee;
          padding:20px 0;
          .c1{
            width: 38%;
            .ico{
              width:56px;
              height:70px;
              border:1px solid #999;
              top:0;
              left:0;
            }
            .txt_info{
              vertical-align:top;
              margin-left:70px;
              .tit_name{
                color:#333;
                font-weight:600;
              }
              .course_info{
                color:#666;
                margin-top:12px;
              }
            }
          }
          .c2,.c3,.c4,.c5{
            width:15%;
            line-height:80px;
            text-indent: 50px;
            color:#666;
          }
          .c4{
            text-indent:69px!important;
          }
        }
        .realPay{
          text-align: right;
          font-weight:600;
          padding:20px 40px 0 0;
          span{
            color:#ff4d00;
            font-size:18px;
          }
        }
      }
    }
    .order_detail{
      .mark_tit{
        color:#666;
        font-size:16px;
      }
      .trade{
        margin-top:15px;
        background:#fff;
        padding:20px;
        .state{
          width:33%;
          .icon{
            width:35px;
            height:35px;
            background:url('~@/assets/images/icon_pay_success.png') no-repeat;
            background-size:100% 100%;
          }
          .text_tip{
            color:#00a2ff;
            font-size:18px;
            font-weight:600;
            vertical-align:top;
            margin:8px 0 0 15px;
          }
        }
        .detail,.time{
          width:33%;
          font-size:12px;
          color:#666;
          p{
            line-height:20px;
            text-indent:30px;
          }
        }
        .time{
          p{
            text-indent:90px;
          }
        }
      }
    }
    .det_ordList{
      margin-top:20px;
      .order_detTit{
        span{
          width:33%!important;
        }
      }
      .order_detCon{
        color:#666;
        .c1,.c3,.num{
          width:33%!important;
        }
        .c3{
          text-indent:142px!important;
        }
        .num{
          text-indent:155px;
        }
      }
      .price_detil{
        padding:30px 90px 10px;
        text-align: right;
        .totalPrice{
          color:#666;
          span{
            margin-left:165px;
          }
        }
        .det_pay{
          font-size:14px;
          font-weight:600;
          color:#333;
          margin-top:15px;
          span{
            margin-left:135px;
            color:rgb(255, 77, 0);
          }
        }
      }
    }
  }
</style>
