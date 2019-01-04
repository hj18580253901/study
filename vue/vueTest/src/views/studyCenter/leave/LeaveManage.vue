<template>
  <div class="manage_leavel">
    <h1 class='manage_title'>请假管理/申请请假</h1>
    <div class="leveal_form">
      <p class="data_primp rel">选择请假起止日期，查询需请假的课次</p>
      <div class="choice_time">
        <el-date-picker
          v-model="date1"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
        <span>~</span>
        <el-date-picker
          v-model="date2"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
        <button class="query_class abs">查询</button>
      </div>
      <div class="leveal_reason">
        <span class="reason_primp rel">请假原因</span>
        <span class="isdanger">填写请假原因</span>
        <div><textarea name="" id="" cols="30" rows="10"></textarea></div>
      </div>
      <div class='operate'>
        <button disabled='disabled' class="confirm_leve btn">确认</button>
        <button class="cancel_leve btn">取消</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'leaveManage',
  data () {
    return {
      date1: '',
      date2: ''
    }
  }
}
</script>
<style lang='scss'>
  .manage_leavel{
    .manage_title{
      font-size:14px;
      color: #878787;
      margin-bottom:10px;
    }
    .leveal_form{
      width:100%;
      background:#fff;
      padding:25px;
      .data_primp{
        &:before{
          content:'*';
          color:#f44336;
          font-size:12px;
          position:absolute;
          left:-7px;
        }
      }
      .choice_time{
        margin-top:15px;
        .el-input__prefix{
          position:relative;
          .el-icon-date{
            position:absolute;
            dispaly:block;
            right:8px;
            top:-10px;
          }
        }
        .query_class{
          background:#1067d7;
          width:80px;
          line-height:30px;
          border-radius:40px;
          color:#fff;
          margin-left:20px;
          margin-top:5px;
        }
      }
      .leveal_reason{
        margin-top:25px;
        .reason_primp{
          &:before{
          content:'*';
          color:#f44336;
          font-size:12px;
          position:absolute;
          left:-7px;
          }
        }
        .isdanger{
          color:#f44336;
          margin-left:15px;
        }
        textarea{
          display: block;
          width: 100%;
          margin: 16px 0;
          border: 1px solid #e5e5e5;
          border-radius: 4px;
          height: 114px;
          padding: 6px;
          font-size: 14px;
          text-indent:5px;
        }
      }
      .operate{
       margin-top:30px;
       .btn{
          width:80px;
          line-height:30px;
          border-radius:40px;
          color:#808080;
          margin-right:20px;
          border: 1px solid #d4d4d4;
        }
        button[disabled]{
          background:#ccc;
          color:#fff;
        }
      }
    }
  }
</style>
