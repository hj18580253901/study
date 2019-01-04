<template>
  <div class="content_item">
    <div v-if='!isSpecial'>
      <p class='title'>俯瞰欧洲小巴黎，里加的旅行除体验</p>
      <div class="video" v-if='checkMode'>
        <video src="#"></video>
      </div>
      <ul class="somePic" v-if='!checkMode'>
        <li class=picItem></li>
        <li class=picItem></li>
        <li class=picItem></li>
      </ul>
      <div class="conten_info"><span class='info_kind'>Travel 派</span><span class="info_num"><i class='iconfont icon_eye icon-yanjing'></i>329人看过</span></div>
    </div>
    <div class="special_layout" v-if='isSpecial'>
      <div class="itemOne">
        <p class='title'>俯瞰欧洲小巴黎，里加的旅行除体验</p>
        <div class="conten_info"><span class='info_kind'>Travel 派</span><span class="info_num"><i class='iconfont icon_eye icon-yanjing'></i>329人看过</span></div>
      </div>
      <div class="itemTwo"><img src="" alt=""></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['checkMode', 'isSpecial', 'infoData'],
  name: 'findItemOne'
}
</script>
<style lang='scss'>
  .content_item{
    padding:10px 20px;
    border-bottom: 1px solid #ddd;
    .title{
      min-height:30px;
      line-height: 20px;
    }
    .video{
      width:100%;
      height:180px;
      background:#eee;
    }
    .conten_info{
      height:28px;
      line-height:28px;
      font-size:13px;
      font-weight:500;
      color:#9e9e9e;
      span{
        display:inline-block;
      }
      .info_kind{
        margin-right:20px;
      }
      .info_num{
        .icon_eye{
          font-size:14px;
          margin-right:5px;
        }
      }
    }
    .somePic{
      display:flex;
      margin-top:5px;
      justify-content: space-between;
      height:90px;
      .picItem{
        flex:1;
        margin:0 5px;
        background:#eee;
      }
    }
    .special_layout{
      display:flex;
      justify-content:space-between;
      .itemOne{
        flex:2;
      }
      .itemTwo{
        flex:1;
         background:#eee;
        img{
          width:110px;
          height:80px;
        }
      }
    }
  }
</style>
