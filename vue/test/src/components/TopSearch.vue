<template>
  <div class= 'topCon'>
    <div class="addres">{{cityName}}<i class="iconfont icon-xiangxia down"></i></div>
    <div class='search'><i class="iconfont  icon-shousuo searImg"></i><input type="text" v-model="searchName" :class='{vic_searBox: isInputClass, shareInputBox: true}' placeholder="嘉禾一品粥(外卖满40减21）"/></div>
    <div class="add" v-if='$route.path === "/index"' @click="isHidShow == '0' ? isHidShow = '1' : isHidShow = '0'">+<i class="point"></i>
      <div class="showHidBox" v-if='isHidShow == "1"'>
        <ul>
          <li><i class="iconfont setfont icon-saoyisao"></i><span>扫一扫</span></li>
          <li><i class="iconfont setfont icon-zihangche"></i><span>骑自行车</span></li>
          <li><i class="iconfont setfont icon-fapiao"></i><span>开发票</span></li>
          <li><i class="iconfont setfont icon-fukuanma"></i><span>付款码</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {mixin} from '@src/views/share/setMixin'
export default {
  name: 'TopSearch',
  mixins: [mixin],
  props: ['isInputClass'],
  data: function () {
    return {
      searchName: '',
      isHidShow: '0'
    }
  }
}
</script>
<style lang='scss'>
.topCon{
  width:100%;
  display:flex;
  background:#fff;
  padding:0 10px;
  justify-content:space-betwween;
  .addres{
    flex:1;
    line-height:60px;
    text-align:center;
    vertical-align: middle;
    .down{
      vertical-align: middle;
      margin-left:5px;
      font-size:15px!important;
    }
  }
  .search{
    flex:3.5;
    position:relative;
    .shareInputBox{
      width:100%;
      height:40px;
      margin:10px 0;
      background:#ecebeb;
      color:#666666;
      text-indent:45px;
      border-radius:20px;
    }
    .vic_searBox{
      border-radius:8px;
      width:90%;
    }
    .searImg{
      position:absolute;
      left:15px;
      top:16px;
      font-size:30px!important;
    }
  }
  .add{
    flex:0.5;
    margin-left:5px;
    text-indent:10px;
    font-size:30px;
    line-height:60px;
    position:relative;
    &:after{
      content:'';
      display:block;
      width:10px;
      height:10px;
      border-radius:50%;
      background:red;
      position:absolute;
      top:13px;
      left:25px;
    }
    .showHidBox{
      width:120px;
      height:160px;
      padding:0 10px;
      background:#5e6166;
      border-radius:5px;
      position:absolute;
      right:10px;
      top:60px;
      z-index:100;
      &:before{
        content:'';
        border:10px solid transparent;
        border-bottom:10px solid #5e6166;
        position:absolute;
        top:-18px;
        right:5px;
      }
      ul{
        li{
          height:40px;
          border-bottom:1px solid #fff;
          line-height:40px;
          color:#fff;
          font-size:14px;
          &:last-child{
            border:none;
          }
          span{
            margin-left:10px;
          }
          .setfont{
            font-size:16px!important;
          }
        }
      }
    }
  }
}

</style>
