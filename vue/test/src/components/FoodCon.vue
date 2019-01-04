<template>
  <div class="shopList" >
    <div  class='item'  v-for='(item, key) of infoData' :key='key' :class="{special: isShow}">
      <img  class="pic" :src="item.imgUrl" alt="">
      <div class="proText">
        <h4 class='name'>{{item.name}}<span class="distance dis-in-b fr t-c">345m</span></h4>
        <div class="someInfo">
          <span class="starBox">
            <i class="star active" v-for='n in 4' :key='n'>&#xe64a;</i>
            <i class="star">&#xe64a;</i>
          </span>
          <span class="score">{{item.score}}分</span>
          <span class="sprice">人均￥{{item.every_price}}</span>
        </div>
        <p class='rest' v-if='item.isRest'>休息中</p>
        <div class="special_intro">
          <span class='tuan'>团</span>
          <p class="text">{{item.special_txt}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'foodCon',
  props: ['infoData'],
  data: function () {
    return {
      isShow: false
    }
  },
  created () {
    if (this.$route.path === '/order') {
      this.isShow = true
    }
  }
}
</script>
<style lang='scss'>
  .shopList{
    width:100%;
    margin-bottom:20px;
    .special{
      border-bottom:none!important;
      border-top:1px solid #ddd;
    }
    .item{
      border-bottom:1px solid #ddd;
      min-height:100px;
      padding:20px 0;
      display:flex;
      justify-content:space-around;
      img.pic{
        width:100px;
        height:80px;
        border:1px solid #ddd;
      }
      .proText{
        flex:1;
        margin-left:10px;
        .name{
          font-szie:15px;
          height:20px;
          line-height:20px;
          .distance{
            width:50px;
            height:20px;
            font-size:12px;
            line-height:20px;
            background:#f4f4f6;
            border-radius:0 0 0 10px;
          }
        }
        .someInfo{
          margin-top:5px;
          span{
            display:inline-block;
            margin-right:4px;
            font-size:12px;
            color:#696969;
          }
          .starBox{
            .star{
              font-family:"iconfont" !important;
              font-size:12px;
              color:#eaeaea;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            .active{
              color:#ffbb2c;
            }
          }
        }
        .rest{
          font-size:12px;
          color:#696969;
          line-height:15px;
          margin-top:5px;
        }
        .special_intro{
          margin-top:10px;
          font-size:13px;
          color:#696969;
          line-height:15px;
          display:flex;
          justify-content:space-around;
          .tuan{
            display:inline-block;
            font-size:15px;
            width:19px;
            height:20px;
            background:#0abbcb;
            margin-right:5px;
            color:#fff;
            border-radius:4px;
            text-align:center;
            line-height:20px;
            font-weight:900;
          }
          .text{
            flex:1;
          }
        }
      }
    }
  }
</style>
