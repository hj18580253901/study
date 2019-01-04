<template>
  <div class="men_con">
    <div class="item" v-for='(data,index) in someData' :key="index" :style='`width:${wth}`'>
      <router-link  class="linkBox" :to="data.page_path">
        <img :src="data.imgUrl" alt="">
        <span class="txt_name">{{data.title}}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MenueBox',
  props: ['someData', 'wth']
}
</script>
<style lang="scss">
  .men_con{
    display:flex;
    justify-content:flext-start;
    align-content:flext-start;
    flex-wrap:wrap;
    .item{
      height:80px;
      text-align:center;
      margin-bottom:15px;
      .linkBox{
        display:block;
        width:100%;
        height:80px;
        img{
          width:45px;
          height:45px;
        }
        .txt_name{
          display:block;
          margin-top:10px;
          color:#333;
          font-size:14px;
          font-weight:500;
        }
      }
    }
  }
</style>
