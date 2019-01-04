<template>
  <div class="carousel">
    <div class="switchBox box1 active">1</div>
    <div class="switchBox box2">2</div>
    <div class="switchBox box3">3</div>
  </div>
</template>
<script>
export default {
  name: 'carouselSwitch'
}
</script>
<style lang='scss'>
  .carousel{
    width:100%;
    height:170px;
    background:#fff;
    border-top:1px solid #ddd;
    overflow:auto;
    padding:20px;
    position:relative;
    overflow:hidden;
    .switchBox{
      width:200px;
      height:110px;
      position:absolute;
      top:28px;
      background:pink;
      border-radius: 12px;
      box-shadow: 2px 6px 2px rgba(164,159,159,0.3);
      transition: all 1s ease;
    }
    .active {
      transform: scale(1.2);
      opacity:1;
    }
    .noActive{
      transform: scale(1);

    }
  }
</style>
