<template>
  <div class="classDetails">
    <div class="nextClassInfo clearfix">
      <div class="classImg fl"><img :src='courseInfo.thumb_url' alt=""></div>
      <div class="classInfo fl">
        <p class='title_en'>{{classRoomInfo.course_name_CN}}</p>
        <p class="course_no">{{classRoomInfo.course_name_EN}}</p>
        <p class="class_no ">{{classRoomInfo.course_no}}</p>
        <p class="netx_time">2018-12-5 16:26</p>
        <div class="teacher_info clearfix">
          <div class="list_item fl">
            <span class="icon inline-block"><img :src='teacherInfo.avatar' alt=""></span>
            <span class="inline-block info">Tracey</span>
          </div>
        </div>
        <div class="student_list clearfix">
          <div class="list_item fl" v-for='(item, index) in studentInfo' :key='index'>
            <span class="icon inline-block"><img src="item.avatar" alt=""></span>
            <span class="info inline-block">{{item.cc_name}}/{{getAge[index]}}/{{item.gender === 2 ? '女' : '男'}}</span>
          </div>
        </div>
        <div class="progress rel">
          <div class="progress_bar rel">
            <div class="progress_val" style="`width: ${progress}`"></div>
          </div>
          <p class="progess_label abs">
            {{classRoomInfo.session_times - classRoomInfo.rest_session_times}} / {{classRoomInfo.session_times}}
          </p>
        </div>
      </div>
    </div>
    <div class="prveClass">
      <h1 class="class_list_tit">课节列表</h1>
      <div class="list_main">
        <div class='list_item'>
          <p class="item_num abs">1</p>
          <div class="item_details">
            <div class="name rel">
              <span class="already_class abs">已上课</span>
              <p class='class_nameEn'>{{courseInfo.name_EN}}</p>
              <p class="class_nameCh">{{courseInfo.name_CN}}</p>
            </div>
            <p class="class_time"> 2017/09/02 18:00 -18:25</p>
            <div class='options'>
              <div class="common" :class='{option_active: isActive === 1,option_item: isActive === 2}' @click="dropDown">课后作业</div>
              <div class="recording_video_btn">课程回放</div>
            </div>
          </div>
        </div>
      </div>
      <div class="tabs_detail" v-if="isActive === 1">
        <p class="prompt">为了让老师尽快批改作业，请在课后2天内提交作业。上传文件word格式最佳。</p>
        <div class="homeWork_list">
          <div class="list-item clearfix">
            <div class="homeWork_name fl ">课节1</div>
            <div class="homeWork_state fl t-c">已提交</div>
            <div class="homeWork_upload fr t-r">
              <span class="upload_icon">
                <img src="@/assets/images/upload_icon.png" alt="">
              </span>
              <button class="upload_btn clearfix">上传</button>
            </div>
          </div>
        </div>
      </div>
     </div>
  </div>
</template>
<script>
import {mixin} from '@/reourse/Mixin'
import {getStudentTimeTab} from '@/reourse/api'
import {computeAge} from '@/reourse/until'
export default {
  name: 'courseDetail',
  mixins: [mixin],
  data () {
    return {
      isActive: 2,
      courseInfo: '',
      classRoomInfo: '',
      teacherInfo: '',
      studentInfo: '',
      getAge: []
    }
  },
  created () {
    let byTokenGetStuId = this.testToken()
    byTokenGetStuId.then(() => {
      let stuId = this.student.id
      let classId = this.$route.params.classroomId
      this.getNextClassInfo(classId, stuId)
    })
  },
  methods: {
    dropDown (e) {
      if (this.isActive === 2) {
        this.isActive = 1
      } else {
        this.isActive = 2
      }
    },
    getNextClassInfo (classId, stuId) {
      getStudentTimeTab(classId, stuId).then(res => {
        console.log(res)
        let age
        this.courseInfo = res.course_info
        this.classRoomInfo = res.classroom_info
        this.teacherInfo = res.teacher_info
        this.studentInfo = res.students_info
        this.studentInfo.forEach((item, index) => {
          age = computeAge(item.birthday)
          this.getAge.push(age)
        })
      })
    }
  },
  computed: {
    progess () {
      let timeInfo = this.classRoomInfo
      return (timeInfo.session_times - timeInfo.rest_session_times) / timeInfo.session_times + '%'
    }
  }
}
</script>
<style lang="scss">
  .classDetails{
     .nextClassInfo{
      width:100%;
      background:#fff;
      padding:25px;
      .classImg{
        width:160px;
        height:208px;
        border:1px solid #999;
        overflow:hidden;
      }
      .classInfo{
        width:75%;
        margin-left:20px;
        verticale-align:middle;
        .title_en{
          font-size:26px;
          font-weight:600;
          text-overflow:ellipsis;
          world-wrap:normal;
        }
        .course_no,.class_no{
          font-size:14px;
          color:#666;
          line-height:20px;
        }
        .class_no,.netx_time{
          color:#000;
          margin-top:7px;
        }
        .netx_time{
          margin:16px 0 20px;
        }
        .teacher_info, .student_list{
          color:#666;
          margin-bottom:15px;
          .list_item{
            margin-right:20px;
            .icon{
              width:20px;
              height:20px;
              border:1px solid #999;
            }
            .info{
              verticale-align:bottom;
            }
          }
        }
        .progress{
          margin-top:25px;
          width:100%;
          .progress_bar{
            height:8px;
            margin-right:63px;
            background:#e1e1e1;
            border-radius:4px;
            .progress_val{
              width:100%;
              height:8px;
              border-radius:4px;
              background:#1067d7;
            }
          }
          .progess_label{
            right:0;
            top:0;
            font-size:14px;
            color:#666;
            margin-top:-3px;
          }
        }
      }
    }
    .prveClass{
      margin-top:15px;
      .class_list_tit{
        font-size:15px;
        font-weight:700;
        color:#333;
        line-height:30px;
      }
      .list_main{
        .list_item{
          background:#fff;
          padding:30px;
          position:relative;
          .item_num{
            font-size:30px;
            font-weight:700;
            color:#999999;
            top:50%;
            left:50px;
            transform:translateY(-50%);
            line-height:60px;
          }
          .item_details{
            margin-left:100px;
            .name{
              .already_class{
                font-size:14px;
                color:#999;
                top:0;
                right:0;
              }
              .class_nameEn{
                font-size:26px;
                color:#999;
                line-height:30px;
              }
              .class_nameCh{
                font-size:14px;
                color:#999;
                line-height:28px;
                margin-top:10px;
              }
            }
            .class_time{
              color:#666;
              font-size:14px;
              margin-top:10px;
            }
            .options{
              margin:15px 0 25px;
              .common{
                float:left;
                position:relative;
                padding-right:10px;
                cursor:pointer;
                &:after{
                  width:0;
                  height:0;
                  content:' ';
                  position:absolute;
                  border: solid transparent
                }
              }
              .option_item{
                &:after{
                  border-bottom: 8px solid #333;
                  right:0;
                  bottom:5px;
                }
              }
              .option_active{
                  color:#1067d7;
                  &:after{
                    border-top: 8px solid #1067d7;
                    top:3px;
                    right:0;
                  }
                }
              .recording_video_btn{
                float:left;
                margin-left:30px;
              }
            }
          }
        }
      }
      .tabs_detail{
        background:#f9fbff;
        .prompt{
          line-height:48px;
          text-indent:127px;
          color:#999;
          font-size:12px;
          border-bottom:1px solid #999;
        }
        .clearfix:after{
          content: '.';
          display:block;
          height:0;
          clear:both;
          visibility:hidden;
        }
        .homeWork_list{
          padding: 20px 15px;
          .homeWork_name{
            width:28%;
            margin-left:112px;
          }
          .homeWork_state{
            width:30%;
          }
          .homeWork_upload{
            width:28%;
            color:#1067d7;
            .upload_icon{
              display:inline-block;
              width:12px;
              height:13px;
            }
            .upload_btn{
              verticale-align:middle;
            }
          }
        }
      }
    }
  }
</style>
