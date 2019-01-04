<template>
  <div class="leave-manage">
    <p class="title">请假管理</p>
    <div class="take-leave">
      <router-link to='leave/leave-manage' class="leaveBtn inline-block">申请请假</router-link>
    </div>
    <div class="leave-record">
      <ul class="clearfix" v-if="leaveData.length > 0">
        <li class="leave-record-item rel" :v-for="item in leaveData">
          <div class="item-left">
            <div class="leave-no">
              <span class="t1">请假课次</span>
              <span class="t2">{{item.classroom_no}} {{getFormateStr(item.start_at, item.end_at)}} </span>
            </div>
            <div class="leave-reason">
              <span class="t1 inline-block">请假原因</span>
              <span class="t2 inline-block">{{item.description}}</span>
            </div>
            <div class="leave-time">
              <span class="t1">申请时间</span>
              <span class="t2">{{formatDate(item.created_at, 'yyyy-MM-dd hh:mm:ss')}}</span>
            </div>
          </div>
          <div class="item-right abs">
            <p class="status t-r" :class="{pending: item.status===1, rejected: item.status===3, resolved: item.status===2, cancelled: item.status===4}">
              {{LEAVE_STATUS[item.status]}}
            </p>
            <div class="btn1" v-if="item.status === 1" @click="deleteLeave(item.id)">取消</div>
          </div>
        </li>
        <div class="pagination" v-if="!hasLeaveRecord">
          <el-pagination
            layout="prev, pager, next"
            :total="total"
            :page-size="per_page"
            :current-page="page"
            @current-change="pageChange"
          >
          </el-pagination>
        </div>
      </ul>
      <div class="null" v-if='hasLeaveRecord'>暂无请假记录</div>
    </div>
  </div>
</template>
<script>
import {getLeaveInfo} from '@/reourse/api'
export default {
  name: 'leave',
  data () {
    return {
      hasLeaveRecord: 'false',
      leaveData: []
    }
  },
  created () {
    let studentId = this.student.id
    getLeaveInfo(studentId).then(res => {
      this.leaveData = res
    })
  }
}
</script>

<style lang='scss'>
  .leave-manage{
    width:100%;
    .title{
    font-size:16px;
    background:#fff;
    padding:15px 0;
    text-indent:10px;
    color:#878787;
    margin-bottom:10px;
    }
    .take-leave{
      background:#fff;
      padding:20px 30px;
      .leaveBtn{
        width:114px;
        height:36px;
        font-size:16px;
        background:#1067d7;
        border-radius:22px;
        text-align: center;
        line-height:36px;
        color:#fff;
      }
    }
    .leave-record{
      background:#fff;
      padding:30px;
      margin:15px 0;
      .leave-record-item {
      padding: 25px 0;
      border-bottom: 1px solid #c7c7c7;
        .item-left {
          font-size: 14px;
          margin-right: 75px;
          .leave-reason, .leave-time{
            margin-top: 18px;
          }
          .t1 {
            color: #999;
            margin-right: 20px;
            width: 56px;
            vertical-align: top
          }
          .t2 {
            color: #333;
            width: 85%;
            vertical-align: top
          }
        }
        .item-right {
          float: right;
          width: 70px;
          height: 100%;
          right: 0;
          top: 30px;
          .status {
            font-size:14px;
            &.pending{
              color: #f6a623;
            }
            &.rejected{
              color: #f44336;;
            }
            &.resolved{
              color: #62b606;
            }
            &.cancelled{
              color: #999;
            }
          }
          .btn1 {
            margin-top: 36px;
            width: 70px;
            padding: 0;
            height: 28px;
            line-height: 28px;
            text-align: center;
            font-size: 14px;
          }
        }
      }
      .null{
        text-align:center;
        font-size:18px;
        color:#666;
      }
    }
  }
</style>
