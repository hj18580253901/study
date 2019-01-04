<template>
  <div class="main-con rel">
    <div class="left-wrapper abs">
      <div class="avatar-box">
          <img src='defaultInfo.avatar' alt="avatar">
      </div>
      <div class="info-box">
        <p class="student-name t-c">{{defaultInfo.nickname}}</p>
        <p class="test-level t-c">{{defaultInfo.current_level_text}}</p>
        <div class="student-manage t-c">
          <span class="revise_info left inline-block" @click="isShowInfo = 2">编辑资料</span>
          <span class="revise_info inline-block" @click="isShowPass = 2">修改密码</span>
        </div>
        <div class="student_tar">
          <img src="~@/assets/images/class-exercise/record_star.png" alt="">
          <span class="star_num inline-block">0</span>
        </div>
      </div>
      <div class="router-link-box">
        <router-link to="course" class="my-course">
          <span class="course-ico">
          </span>
          <span class="course-tit">我的课程</span>
        </router-link>
        <router-link to='leave' class="leave-mana"><span class="leave-ico"></span><span class="leave-tit">请假管理</span></router-link>
        <router-link to='testLevel' class="level-test"><span class="level-ico"></span><span class="test-tit">水平测试</span></router-link>
      </div>
    </div>
    <div class="right-wrapper abs"><router-view></router-view></div>

    <div class='editInfo' v-if="isShowInfo === 2">
      <div class="edit_main abs">
        <div class='edit_tit'>编辑学员资料</div>
        <div class="close" @click="isShowInfo = 1" ></div>
        <div class='edit_photo'>
          <span>头像</span>
          <el-upload
            class="upload-demo"
            :action='fileUrl'
            :show-file-list='false'
            :limit="3"
            with-credentials
            :on-success="uploadSuccess"
            style="display:inline-block;width:">
            <button class="upload_photoBtn">上传头像</button>
          </el-upload>
        </div>
        <div class="edit_form">
          <div class="form_grop">
            <span class='inline_block left_label'>学员姓名</span>
            <span class="inline-block right_form">
              <input type="text" v-model='userForm.name' v-validate="'China'" name='China' placeholder='学员姓名'>
            </span>
            <p class='isdanger inline-block' v-show="errors.has('China')">名字为2-16个汉字</p>
          </div>
          <div class="form_grop">
            <span class="mark inline-block">*</span><span class="inline_block left_label english_name">学员英文名</span>
            <span class="inline-block right_form "><input type="text" v-validate="'English'" name='English'  v-model='userForm.nickname' placeholder="学员英文名"></span>
            <p class="isdanger" v-show="errors.has('English')">英文名为大小写字母</p>
          </div>
          <div class="form_grop">
            <span class="mark inline-block">*</span><span class="inline_block left_label birth">生日</span>
            <span calss="inline-block right_form"><el-date-picker v-model="userForm.birthday" type="date" placeholder="请输入日期" align='right'></el-date-picker></span>
            <p class="isdanger" v-if="false">英文名为大小写字母或数字</p>
          </div>
          <div class="form_grop">
            <span class="inline_block left_label birth">性别</span>
            <span calss="inline-block right_form">
              <el-radio :label="1" v-model="userForm.gender">男</el-radio>
              <el-radio :label="2" v-model="userForm.gender">女</el-radio>
            </span>
          </div>
          <button class="confirmEdit_btn" @click='confirmEdit_btn'>确认修改</button>
        </div>
      </div>
    </div>
    <div class="editPassWord" v-if='isShowPass === 2'>
      <div class="edit_passWord abs edit_main">
        <div class='edit_tit'>修改密码</div>
        <div class="close" @click="isShowPass = 1"></div>
        <div class="form">
          <div class="defaultPass">
            <label>原密码:</label><input type="password" placeholder='原密码' v-model="passWord.defaultPass" @input='testPass1=!testPass($event.target.value)'>
            <p class="isdanger defPassErr" v-show="testPass1">请输入有效密码</p>
          </div>
          <div class="newPass">
            <label>新密码:</label><input type="password" placeholder='新密码' v-model="passWord.newPass" @input='testPass2=!testPass($event.target.value)'>
            <p class="isdanger" v-show="testPass2">密码为6-18位,不含空格</p>
          </div>
         </div>
         <button class='editPassBtn' @click='editPassBtn'>提交</button>
      </div>
    </div>
    <box :boxText='promptTxt' v-if="promptTxt" @close="promptTxt=''"></box>
  </div>
</template>
<script>
import {mixin} from '@/reourse/Mixin'
import {formatDate} from '@/reourse/until'
import {editStudentInfo, getStudentStar, revisePassWord} from '@/reourse/api'
export default {
  name: 'study-center',
  mixins: [mixin],
  data () {
    return {
      isShowInfo: 1,
      isShowPass: 1,
      testPass2: false,
      testPass1: false,
      fileUrl: '',
      defaultInfo: '',
      promptTxt: '',
      avatarUrl: '',
      star_num: '',
      userForm: {
        avatar: '',
        name: '',
        nickname: '',
        birthday: '',
        gender: ''
      },
      passWord: {
        newPass: '',
        defaultPass: ''
      }
    }
  },
  created () {
    let testToken = this.testToken()
    testToken.then(() => {
      this.defaultInfo = this.student
      this.getStar()
      this.fileUrl = `https:wechat-api-dev.rouchi.com/user/student/${this.defaultInfo.id}`
      this.setDefaultInfo()
    })
  },
  methods: {
    confirmEdit_btn () {
      let user = this.userForm
      if (!user.birthday) return
      user.birthday = formatDate(user.birthday, 'yyyy-MM-dd')
      if (this.avatarUrl) {
        user.avatar = this.avatarUrl
      } else {
        user.avatar = ''
      }
      editStudentInfo(this.student.id, user).then(res => {
        let _this = this
        this.promptTxt = '修改成功'
        setTimeout(() => {
          _this.isShow = 1
        }, 2000)
      })
    },
    uploadSuccess (response, file, fileList) {
      this.avatarUrl = file
    },
    getStar () {
      getStudentStar(this.student.id).then(res => {
        this.star_num = res.score
      })
    },
    setDefaultInfo () {
      this.userForm.avatar = this.defaultInfo.avatar
      this.userForm.name = this.defaultInfo.cc_name
      this.userForm.nickname = this.defaultInfo.nickname
      this.userForm.birthday = this.defaultInfo.birthday
      this.userForm.gender = this.defaultInfo.gender
    },
    editPassBtn () {
      let oldPass = this.passWord.defaultPass
      let newPass = this.passWord.newPass
      if (oldPass && this.testPass(oldPass) && newPass && this.testPass(newPass)) {
        revisePassWord(oldPass, newPass).then(res => {
          this.promptTxt = '修改成功'
        }).catch(err => {
          this.promptTxt = err.message
        })
      } else {
        this.promptTxt = '请输入有效密码'
      }
    }
  }
}
</script>
<style lang="scss">
  .main-con{
    width:1200px;
    position:relative;
    margin:20px auto;
    .left-wrapper{
      width:230px;
      min-height:500px;
      background:#fff;
      left:0;
      top:0;
      .avatar-box{
        text-align:center;
        padding:20px;
        img{
          width:102px;
          height:102px;
          display:inline-block;
        }
      }
      .info-box{
        text-aligin:center;
        .student-name{
          font-size:20px;
          margin-bottom:20px;
          color:#333;
        }
        .test-level{
          font-size:16px;
          margin-bottom:20px;
        }
        .student-manage{
          span{
            color:#1067d7;
            cursor:pointer;
            font-szie:14px;
            padding: 0 12px;
          }
          .left{
            border-right:1px solid #1067d7;
          }
        }
        .student_tar{
          text-align:center;
          margin:20px 0;
          img{
            width:24px;
            heihgt:24px;
          }
          .star_num{
            margin-left:10px;
            vertical-align:middle;
            color:#8d5500;
            font-size:20px;
            font-weight:600;
          }
        }
      }
      .router-link-box{
        margin-top:45px;
        .my-course,.leave-mana,.level-test{
          display:block;
          text-align:center;
          font-size:16px;
          //border:1px solid red;
          padding-bottom:30px;
          color:#8f8f8f;
          .course-ico,.leave-ico,.level-ico{
            display:inline-block;
            vertical-align:middle;
            width:18px;
            height:18px;
            margin-right:15px;
            background-size:16px 16px;
          }
         .course-ico{
            background:url('~@/assets/images/calendar-gray.png') no-repeat;
          }
          .leave-ico{
            background:url('~@/assets/images/my-leave-gray.png') no-repeat;
          }
          .level-ico{
            background:url('~@/assets/images/level-test.png') no-repeat;
          }
        }
        .course-tit,.leave-tit,.test-tit{
          vertical-align:middle;
          display:inline-block;
        }
        .my-course,.leave-mana,.level-test{
          &.active{
            color:#1067d7;
            font-weight:bold;
            .course-ico{
              background:url('~@/assets/images/calendar-selected.png') no-repeat;
            }
            .leave-ico{
              background:url('~@/assets/images/my-leave-selected.png') no-repeat;
            }
            .level-ico{
              background:url('~@/assets/images/level-test-selected.png') no-repeat;
            }
          }
        }
      }
    }
    .right-wrapper{
      width:950px;
      left:250px;
      top:0;
    }
    .editInfo,.editPassWord{
      position:fixed;
      top:0;
      left:0;
      right:0;
      bottom:0;
      background:rgba(0,0,0,0.4);
      .edit_main{
        width:514px;
        padding:25px;
        background:#fff;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        border-radius:5px;
        box-shadow:0 1px 3px rgba(0,0,0,.3);
        box-sizing:border-box;
        .edit_tit{
          font-size:16px;
          font-weight:700;
          color:#1f2d3d;
        }
        .close{
          position:absolute;
          background:url('~@/assets/images/icon_close_btn.png') no-repeat center;
          width:30px;
          top:10px;
          right:10px;
          height:30px;
          transition:all linear 0.5s;
          &:hover{
           background:url('~@/assets/images/icon_close_btn_active.png') no-repeat center;
          }
        }
        .edit_photo{
          margin-top:20px;
          span{
            font-size:14px;
            color:#1f2d3d;
            display:inline-block;
          }
          .upload_photoBtn{
            min-width:100px;
            heihgt:40px;
            line-height:40px;
            background:#1067d7;
            text-align:center;
            border-radius:5px;
            margin-left:50px;
            color:#fff;
          }
        }
        .form_grop{
          margin:25px 0;
          .left_label{
            margin-right:25px;
          }
          .right_form{
            border-bottom:1px solid #bbb;
            width:290px;
            input{
              border:none;
            }
          }
          .english_name{
            margin-right:12px!important;
          }
          .birth{
            margin-right:52px!important;
          }
          .isdanger{
            color:#f44336;
            font-size:14px;
            margin-left:85px ;
            line-height:28px;
          }
          .mark{
            color:#f44336;
            margin-left:-10px;
            margin-right:2px;
          }
          .el-input__prefix{
            position:relative;
            .el-icon-date{
              position:absolute;
              dispaly:block;
              right:8px;
              top:-10px;
            }
          }
        }
        .confirmEdit_btn{
          display:block;
          width:188px;
          height:44px;
          background:#1067d7;
          margin: 20px auto 0;
          border-radius:22px;
          color:#fff;
          font-size:20px;
        }
      }
      .edit_passWord{
        .form{
          padding:30px 20px;
          .defaultPass, .newPass{
            margin-bottom:20px;
            text-align:center;
            font-size:14px;
            color:#48576a;
            input{
              border:1px solid #e1e1e1;
              width:226px;
              height:32px;
              margin-left:15px;
              border-radius:3px;
              text-indent:10px;
              &:focus{
                border:1px solid #1067d7;
              }
            }
            .isdanger{
              color:#f44336;
              font-size:14px;
              margin-top:8px;
              text-indent:-10px;
            }
            .defPassErr{
              text-indent:-63px;
            }
          }
        }
        .editPassBtn{
          width:110px;
          height:30px;
          display:block;
          background:#1067d7;
          color:#fff;
          margin:10px auto 0;
          border-radius:15px;
          &:hover{
            background:#1067d6;
          }
        }
      }
    }
  }
</style>
