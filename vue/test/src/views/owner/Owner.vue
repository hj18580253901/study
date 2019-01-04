<template>
  <div class="owerP">
    <div class="top">
      <div class="someProm">
        <i class="iconfont icon-shezhi prompt_set"></i>
        <i class="iconfont icon-xiaoxi prompt_info"></i>
        <i class="iconfont icon-kefu prompt_ser"></i>
      </div>
      <div class="userInfoBox">
        <img class='userPho' src="/static/images/home/default_usePho.png" alt="">
        <p class="nichName">1pdjhgfnd123</p>
      </div>
    </div>
    <ul class="beRecordBox">
      <li class="recor_item">
        <i class="iconfont icon-pingfenxingxing owner_ico icon_mark"></i>
        <p class="name">收藏</p>
      </li>
      <li class="recor_item">
        <i class="iconfont icon-pingjia owner_ico icon_assess"></i>
         <p class="name">评价</p>
      </li>
      <li class="recor_item">
        <i class="iconfont icon-shizhong-fill owner_ico icon_browse"></i>
         <p class="name">最近浏览</p>
      </li>
    </ul>
    <div class='mt_walletBox'>
      <h3 class="wal_title">美团钱包</h3>
      <div class="wallet_menue">
        <menue-box :someData="wallet_menue_data" wth='25%'></menue-box>
      </div>
    </div>
    <div class="adver"></div>
    <div class='mt_walletBox'>
      <h3 class="wal_title">美团服务</h3>
      <div class="wallet_menue">
        <menue-box :someData="server_menue_data" wth='25%'></menue-box>
      </div>
    </div>
  </div>
</template>
<script>
import MenueBox from '@src/components/MenueBox'
export default {
  name: 'owner',
  components: {
    MenueBox
  },
  data: function () {
    return {
      wallet_menue_data: [
        {imgUrl: '/static/images/owner/qianbao.png', title: '我的钱包', page_path: 'food'},
        {imgUrl: '/static/images/owner/hongbao.png', title: '红包/卡券', page_path: 'food'},
        {imgUrl: '/static/images/owner/shanfu.png', title: '闪付', page_path: 'food'},
        {imgUrl: '/static/images/owner/jiedai.png', title: '借钱', page_path: 'food'},
        {imgUrl: '/static/images/owner/xinyongka.png', title: '美团信用卡', page_path: 'food'},
        {imgUrl: '/static/images/owner/licai.png', title: '理财', page_path: 'food'},
        {imgUrl: '/static/images/owner/chong.png', title: '手机充值', page_path: 'food'}
      ],
      server_menue_data: [
        {imgUrl: '/static/images/home/food.png', title: '会员中心', page_path: 'food'},
        {imgUrl: '/static/images/home/food.png', title: '美团公益', page_path: 'food'},
        {imgUrl: '/static/images/home/food.png', title: '免流用美团', page_path: 'food'},
        {imgUrl: '/static/images/home/food.png', title: '发票助手', page_path: 'food'},
        {imgUrl: '/static/images/home/food.png', title: '我要合作', page_path: 'food'},
        {imgUrl: '/static/images/home/food.png', title: '关于美团', page_path: 'food'}
      ]
    }
  }
}
</script>
<style lang="scss">
  .owerP{
    width:100%;
    background:#fff;
    .top{
      background:url('/static/images/owner/owerTopBag.png')no-repeat;
      height:200px;
      .someProm{
        height:40px;
        line-height:40px;
        i{
          display: inline-block;
          color:#fff;
          font-size:20px;
          padding:0 10px;
        }
        .prompt_ser{
          float:right;
          margin-right:20px;
        }
        .prompt_info{
          float:right;
          margin-right:0;
        }
      }
    }
    .userInfoBox{
      width:100%;
      height:120px;
      margin-top:50px;
      .userPho{
        display:block;
        width:60px;
        height:60px;
        border:1px solid #eee;
        border-radius:50%;
        margin-left:50%;
        transform:translate3d(-50%,0,0);
      }
       .nichName{
        height:40px;
        line-height:40px;
        text-align: center;
        font-size:20px;
        font-weight:600;
       }
    }
    .beRecordBox{
      height:80px;
      display:flex;
      justify-content: space-around;
      margin:20px;
      border-bottom: 1px solid #ddd;
      .recor_item{
        padding:0 10px;
        text-align: center;
        .owner_ico{
          font-size:30px;
        }
        .icon_mark{
          color:#ff7088;
          font-size:28px;
        }
        .icon_assess{
          color:#72beff;
        }
        .icon_browse{
          color:#12d3bb;
        }
        .name{
          margin-top:10px;
          font-weight:500;
          font-size:15px;
          color:#333;
        }
      }
    }
    .mt_walletBox{
      padding:20px;
      .wal_title{
        font-weight:600;
      }
      .wallet_menue{
        margin-top:20px;
      }
    }
    .adver{
      height:80px;
      background:#fde0cc;
      margin:0 20px;
      border-radius:3px;
    }
  }
</style>
