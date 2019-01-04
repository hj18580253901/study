<template>
  <div class="schedule_main">
    <div class="my_class"><span class="pyp_ico"><img src="@/assets/images/level-test-selected.png" alt=""></span>我的课程</div>
    <div class="qrcode">
      <div class="qrcodeImg"></div>
      <p class="qrcode_ext">您尚未购买/预约课程</p>
      <p>请扫描上面二维码进行购买/预约</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'schedule'
}
</script>
<style lang='scss'>
  .schedule_main{
    margin:20px 0;
    .my_class{
      padding:20px;
      font-size: 18px;
      color: #1067d7;
      font-weight: bold;
      vertical-align: middle;
      line-height:30px;
      background:#fff;
      .pyp_ico{
        width: 14px;
        height: 16px;
        margin:0 10px 0 20px ;
      }
    }
    .qrcode{
      margin: 20px 0;
      background:#fff;
      padding:50px;
      .qrcodeImg{
        width:124px;
        height:124px;
        margin:20px auto 25px;
        background:url('~@/assets/images/qrcode.png')no-repeat;
        background-size:100% 100%;
      }
      p{
        font-size:14px;
        font-weight:600;
        color:#333;
        text-align: center;
        line-height:21px;
      }
    }
  }
</style>
