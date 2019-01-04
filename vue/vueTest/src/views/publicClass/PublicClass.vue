<template>
  <div class="public_main">
    <div class="main_tab" @click="changeTab">
        <span class="inline-block" :class="{active:index === 0}">直播课</span>
        <span class="inline-block" :class="{active:index === 1}">录播课</span>
        <span class="inline-block" :class="{active:index === 2}">已报名</span>
    </div>
    <div class="public_con" v-if= 'index === 0'>
      <div class="public_list"></div>
      <div class="public_empty">
        <div class="empty_img"></div>
        <p class="empt_txt">暂无公开课</p>
      </div>
    </div>
    <div class="public_con" v-if="index === 1">
      <div class="public_list rel">
        <div class="public_item">
          <span class="abs item_img"><img src="" alt=""></span>
          <div class="item_info">
            <div class="className">
              <span class="inline-block name">鲸品直播课初级 - 制作三明治</span>
              <span class="inline-block type">Open Class for Beginner - How to Make Sandwiches</span>
            </div>
            <div class="some_info">1234</div>
            <div class="disc">
              如何制作地道且高颜值的三明治，学习美式三明治食材的切配，制作和摆盘，学习Sandwich，bread Roll 和Wrap等不同三明治的制作 ，快来参加Sam老师的美食课堂吧！
            </div>
            <div class="class_operate">
              <p class="total_member inline-block">已有<span>1</span>位学员报名</p>
              <button class="enter">报名</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="public_con" v-if="index === 2">
      <div class="public_list"></div>
      <div class="public_empty">
        <div class="empty_img"></div>
        <p class="empt_txt">您还没有报名公开课，快去报名吧！</p>
        <button class="goSignUp">去报名</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'publicClass',
  data () {
    return {
      index: 1
    }
  },
  methods: {
    changeTab (e) {
      const tab = document.querySelectorAll('.main_tab span')
      const tabArr = Array.prototype.slice.call(tab)
      console.log(tabArr)
      this.index = tabArr.indexOf(e.target)
    }
  }
}
</script>
<style lang='scss'>
  .public_main{
    .main_tab{
      margin:20px 0;
      background:#fff;
      padding:10px 0;
      font-size:18px;
      color:#1067d7;
      span{
        padding:20px 30px;
      }
      .active{
        border-bottom:3px solid #1067d7;
      }
    }
    .public_con{
      padding:20px 0;
      .public_empty{
        background:#fff;
        padding:60px;
        .empty_img{
          width:139px;
          height:88px;
          margin:30px auto;
          background: url('~@/assets/images/public_empty_icon.png')
        }
        .empt_txt{
          font-size:14px;
          color:#999;
          text-align: center;
          padding:20px 0 40px;
        }
        .goSignUp{
          width:180px;
          height:46px;
          background:#1067d7;
          color:#fff;
          font-size:18px;
          border-radius: 23px;
          margin:0 auto;
          display:block;
        }
      }
      .public_list{
        .public_item{
          background:#fff;
          padding:20px;
          .item_img{
            width:167px;
            height:219px;
            border:1px solid #999;
            top:50%;
            left:20px;
            transform:translateY(-50%);
          }
          .item_info{
            margin-left:190px;
            .className{
              padding:15px 0;
              .name{
                color:#333;
                font-size:26px;
              }
              .type{
                color:#999;
                margin:10px 0 0 10px;
              }
            }
            .some_info{
              margin: 10px 0 29px;
              line-height: 20px;
            }
            .disc{
              color:#999;
              line-height:20px;
            }
            .class_operate{
              margin:25px 0  10px;
              text-align: right;
              .total_member{
                color:#999;
                margin-right:30px;
                span{
                  color:#1067d7;
                }
              }
              .enter{
                width:180px;
                height:46px;
                color:#fff;
                cursor:pointer;
                font-size:20px;
                background:#1067d7;
                text-align:center;
                border-radius:23px;
                margin-right:20px;
              }
            }
          }
        }
      }
    }
  }
</style>
