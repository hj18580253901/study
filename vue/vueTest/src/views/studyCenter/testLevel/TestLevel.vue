<template>
  <div class="levelTest_main">
    <div class="entry rel">
      <p> 为了给 terddjj 提供更加适合其水平的课程，请帮助您的孩子完成一个答题测试。</p>
      <p> 这个测试大约需要60分钟，请确保您当前使用的设备可以播放音频并且请您一直陪伴在孩子身边</p>
      <p> 协助孩子。如果您准备好了，请点击“开始测试”。</p>
      <router-link to="levelTest_page" class="startTestBtn inline-block abs">开始测试</router-link>
    </div>
    <div class="test-record-empty t-c">
      <div class="conent">
        <div class="t-c">
          <img src="" alt="">
        </div>
        <p>还没有测试记录，快去测测孩子的英语水平吧～</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'testLevel'
}
</script>
<style lang="scss">
  .levelTest_main{
    width:100%;
    padding:30px;
    .entry{
      padding:10px;
      font-size:14px;
      line-height:28px;
      color:#333;
      background:#fff;
      text-indent:10px;
      .startTestBtn{
        width:188px;
        height:44px;
        font-size:16px;
        background:#1067d7;
        border-radius:22px;
        text-align: center;
        line-height:44px;
        color:#fff;
        top:50%;
        transform:translateY(-50%);
        right:20px;
      }
    }
    .test-record-empty{
      margin-top:20px;
      background:#fff;
      padding:30px;
    }
  }
</style>
