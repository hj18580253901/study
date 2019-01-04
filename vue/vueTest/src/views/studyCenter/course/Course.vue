<template>
  <div class="course-wrapper">
    <div class="class-info-hd rel" v-for="(item, index) in courseInfo" :key="index">
      <div class="class-thumb">
        <img :src='item.course_info.thumb_url' alt="">
      </div>
      <div class="class-info-text abs">
        <p class="course-name">{{item.course_info.name_CN}}</p>
        <p class="classroom-no">{{item.classroom_info.no}}</p>
        <p data-v-2bc10647="" class="next-class-time">19:00</p>
        <div class="progess">
          <p class="progess_txt">
          课程进度：{{item.classroom_info.session_times - item.classroom_info.rest_session_times}}/{{item.classroom_info.session_times}}
          </p>
          <div class="progess-bar">
            <div class='progess_value'></div>
          </div>
         </div>
      </div>
      <div class="class_status abs">已结束</div>
      <router-link :to="{path: `course/${item.classroom_info.id}`}"><span class="goClassroom abs inline-block">进入课程</span></router-link>
    </div>
  </div>
</template>
<script>
import {mixin} from '@/reourse/Mixin'
import {getClassInfoByStuid} from '@/reourse/api'
export default {
  name: 'course',
  mixins: [mixin],
  data: function () {
    return {
      'courseInfo': []
    }
  },
  created () {
    var getUserInfo = this.testToken()
    getUserInfo.then(() => {
      let studentId = this.student.id
      getClassInfoByStuid(studentId).then((res) => {
        this.courseInfo = res
      })
    })
  }
}
</script>
<style lang="scss">
.course-wrapper {
  width:100%;
  .class-info-hd{
    padding:40px;
    background:#fff;
    margin-bottom:20px;
    .class-thumb{
      width:130px;
      height:160px;
      overflow:hidden;
      img{
        width:100%;
        vertical-align:middle;
      }
    }
    .class-info-text{
      width:710px;
      margin-left:160px;
      font-size:16px;
      top:40px;
      .course-name{
        font-size:22px;
        font-weight:bold;
        margin-bottom:20px;
      }
      .classroom-no{
        margin-bottom:15px;
      }
     .next-class-time{
      font-size:16px;
      font-weight:600;
     }
    }
    .progess{
      margin-top:38px;
      margin-right:260px;
      .progess_txt{
        font-size:12px;
        color:#666;
        margin-bottom:13px;
      }
      .progess-bar{
        position:relative;
        height:8px;
        border-radius:5px;
        box-shadow: inset 2px 2px #bbb;
        .progess_value{
          height:8px;
          background:#1067d7;
          border-radius:5px;
        }
      }
    }
    .class_status{
      color:#1067d7;
      right:40px;
      top:40px;
      font-size:18px;
      &.close{
        color:#999;
      }
    }
    .goClassroom{
      bottom:40px;
      right:40px;
      cursor:pointer;
      width:188px;
      height:44px;
      background:#1067d7;
      text-align:center;
      line-height:44px;
      border-radius:22px;
      font-size:20px;
      color:#fff;
    }
  }
}
</style>
