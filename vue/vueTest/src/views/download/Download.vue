<template>
  <div class="main">
    <div class="txt_prompt">
      <h1>上课前请先下载以下必备软件</h1>
      <p class='sure'>由于鲸鱼小班课程是直播课程，请确保您的上课设备的麦克风、摄像头可用</p>
    </div>
    <div class="zoom clearfix">
      <div class="software fl">
        <span class="icons inline-block"><img src="@/assets/images/zoom.png" alt=""></span>
        <div class="info fr">
          <p class="t1">上课必备软件</p>
          <p class="t2">Zoom</p>
        </div>
      </div>
      <a href="https://static.rouchi.com/software/ZoomusInstaller.pkg"><button class="goDown fr">下载软件</button></a>
    </div>
    <div class="chrom clearfix">
      <div class="software fl">
        <span class="icons inline-block"><img src="@/assets/images/chrome.png" alt=""></span>
        <div class="info fr">
          <p class="t1">上课必备软件</p>
          <p class="t2">Zoom</p>
        </div>
      </div>
      <button class="goDown fr">下载软件</button>
    </div>
    <div class="teamViewer clearfix">
      <div class="software fl">
        <span class="icons inline-block"><img src="@/assets/images/teamViewer.png" alt=""></span>
        <div class="info fr">
          <p class="t1">上课必备软件</p>
          <p class="t2">Zoom</p>
        </div>
      </div>
      <button class="goDown fr">下载软件</button>
    </div>
  </div>
</template>
<script>
export default{
  name: 'download'
}
</script>
<style lang='scss'>
  .main{
    margin-top:20px;
    background:#fff;
    .teamViewer, .zoom, .chrom{
      padding:40px 0;
      text-align: center;
      border-bottom:1px solid #eee;
    }
    .txt_prompt{
      padding:30px 0 0;
      text-align: center;
      border-bottom:1px solid #eee;
       h1{
        color: #1067d7;
        font-size: 38px;
        padding-top: 10px;
      }
      .sure{
        color: #333;
        font-size: 22px;
        padding: 20px 0 50px;
      }
    }
    .software{
      .icons{
        width:82px;
        height:82px;
        margin-left:45px;
      }
      .info{
        margin:25px 0 0 40px;
        text-align: left;
        .t1{
          font-size:16px;
          color:#333;
        }
        .t2{
          font-weight:600;
          font-size:16px;
          margin-top:10px;
        }
      }
    }
    .goDown{
        width:188px;
        height:44px;
        border-radius:22px;
        color:#fff;
        text-align: center;
        background:#1067d7;
        margin:20px 75px 0 0;
        font-size:18px;
      }
  }
</style>
