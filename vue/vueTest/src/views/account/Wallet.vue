<template>
  <div class="wallet">
    <div class="money_info">
      <p class="total"><span>总余额</span><i class="num">5.80</i></p>
      <div class="money_kind clearfix">
        <p class="remain fl">充值余额 <i>0.00</i></p>
        <p class="burse fl">奖学金 <i>5.80</i></p>
      </div>
    </div>
    <div class="detail">
      <div class="tab" @click='changeTabIndex'>
        <span class="inline-block remain_tit" :class="{active:changeTab === 0}">充值余额明细</span>
        <span class="inline-block burse_tit" :class="{active:changeTab === 1}">奖学金明细</span>
      </div>
      <div class="list_item">
        <div class="recharge" v-if='changeTab===0'>
          <div class="empty">暂无记录</div>
          <div class="rech_list" if='false'>
          </div>
        </div>
        <div class="study_award" v-if='changeTab===1'>
           <div class="empty" v-show='false'>暂无记录</div>
           <div class="award_list">
             <div class="item">
               <span class='type inline-block'>奖励</span>
               <span class='time inline-block'>2018-03-08</span>
               <span class='nums inline-block'>+￥3.8</span>
               <span class='rest inline-block'>
               余额：
                ￥<i>5.8</i>
               </span>
             </div>
             <div class="item">
               <span class='type inline-block'>奖励</span>
               <span class='time inline-block'>2018-03-08</span>
               <span class='nums inline-block'>+￥3.8</span>
               <span class='rest inline-block'>
               余额：
                ￥<i>5.8</i>
               </span>
             </div>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'wallet',
  data () {
    return {
      changeTab: 1
    }
  },
  methods: {
    changeTabIndex (e) {
      var arr = document.querySelectorAll('.tab span')
      this.changeTab = Array.prototype.slice.call(arr).indexOf(e.target)
    }
  }
}
</script>
<style lang="scss">
  .wallet{
    .money_info{
      width:100%;
      background:#fff;
      padding:40px;
      .total{
        color:#00a2ff;
        font-size:22px;
        .num{
          margin-left:25px;
        }
      }
      .money_kind{
        margin-top:35px;
        .remain{
          font-weight:600;
        }
        .burse{
          margin-left:55px;
          font-weight:600;
        }
        i{
          color:#00a2ff;
        }
      }
    }
    .detail{
      width:100%;
      margin-top:15px;
      background:#fff;
      padding:20px 0;
      .tab{
        border-bottom:1px solid #eee;
        span{
          line-height:30px;
          padding:0 30px;
          color:#666;
          transition: all 0.5 linear;
        }
        .active{
          border-bottom:3px solid #1067d7;
          color:#333;
          font-weight:600;
        }
      }
      .list_item{
        padding:20px 20px 0;
        .empty{
            font-size: 18px;
            border-radius: 4px;
            line-height: 60px;
            text-align:center;
          }
        .study_award{
          padding:0 10px;
          .award_list{
            .item{
              border-bottom:1px solid #eee;
              padding:30px 0;
              .type{
                width:32%;
                font-weight:600;
              }
              .time{
                width:25%;
                color:#666;
              }
              .nums{
                width:30%;
                color:#ff4d00;
              }
              .rest{
                color:#666;
                i{
                  color:#00a2ff;
                  font-size:16px;
                  font-weight:600;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
