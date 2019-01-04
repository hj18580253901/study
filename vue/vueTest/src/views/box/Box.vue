<template>
  <div  class="box">
    <div class="box_main">
      <h2 class="title">提示</h2>
      <span class="close" @click="closeClick"></span>
      <p class="proText">{{boxText}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'box',
  props: ['boxText'],
  created: function () {
    setTimeout(this.closeClick, 1000)
  },
  methods: {
    closeClick () {
      this.$emit('close')
    }
  }
}
</script>
<style lang='scss'>
  .box{
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    .box_main{
      background:#fff;
      width:250px;
      min-height:90px;
      border:1px solid #7f7e7e;
      border-radius: 8px;
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%, -120%);
      box-shadow: 10px 7px 5px #bbb;
      .title{
        font-size:16px;
        height:30px;
        line-height:25px;
        text-align: center;
        border-bottom:1px solid #7f7e7e;
      }
      .close{
        width:30px;
        height:30px;
        display:inline-block;
        position:absolute;
        top:0;
        right:0;
        background:url('~@/assets/images/icon_close_btn.png') no-repeat center;
      }
      .proText{
        font-size:14px;
        text-align: center;
        line-height:30px;
        padding:15px;
      }
    }
  }
</style>
