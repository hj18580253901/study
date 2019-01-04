<template>
  <div class="login-wrapper rel">
    <div class="login-title">欢迎回来</div>
    <div class="login-wran abs">
      <span>还没有帐号？</span>
      <router-link class="special" :to="{path: '/register'}">立即注册</router-link>
    </div>
    <div class="login-tabs t-c rel">
      <div class="tabs-item inline-block" :class="{active:activeName===0}" @click="tabHandleClick(0)">手机验证码登录</div>
      <div class="tabs-item inline-block" :class="{active:activeName===1}" @click="tabHandleClick(1)">账户密码登录</div>
      <div class="tabs-bar abs" :style='{ left: ( activeName * 50 ) + "%"}'></div>
    </div>
    <div class="login-type1" v-show="activeName===0">
      <div class="from-group">
        <span class="inline-block left-label">手机号</span>
        <span class="inline-block right-input rel">
          <input type="text" placeholder="请输入手机号" name="mobile-2"  v-model="loginByCodeFrom.mobile" @input='phonePrompt1=!testMobile($event.target.value)'>
          <span class="is-danger abs"  v-show="phonePrompt1">请输入有效的手机号码</span>
        </span>
      </div>
      <div class="from-group rel">
        <span class="inline-block left-label">验证码</span>
        <span class="inline-block right-input code rel">
          <input type="text" placeholder="请输入验证码" name="code" v-model='loginByCodeFrom.code' @input='codePrompt=!testCode($event.target.value)'>
           <span class="is-danger abs" v-show='codePrompt'>请输入有效验证码</span>
        </span>
       <button class="inline-block code-btn" @click="getCodeBtn($event, loginByCodeFrom.mobile, 'login')">获取验证码</button>
      </div>
      <div class="t-c">
        <button class="submit inline-block" @click="loginByCodeFromBtn">登录</button>
      </div>
    </div>
    <div class="login-type2" v-show="activeName===1">
      <div class="from-group">
        <span class="inline-block left-label">手机号</span>
        <span class="inline-block right-input rel">
          <input type="text" placeholder="请输入手机号"  v-model="loginByPasswordForm.mobile" @input="phonePrompt2=!testMobile($event.target.value)">
          <span class="is-danger abs" v-show="phonePrompt2">请输入有效的手机号码</span>
        </span>
      </div>
      <div class="from-group">
        <span class="inline-block left-label">密码</span>
        <span class="inline-block right-input rel">
          <input type="text" placeholder="请输入密码" v-model='loginByPasswordForm.password' @input= 'passPrompt=!testPass($event.target.value)'>
          <span class="is-danger abs" v-show="passPrompt">密码为6-18位，不含空格</span>
        </span>
      </div>
      <div class="t-c">
        <button class="submit inline-block" @click="loginByPasswordBtn">登录</button>
      </div>
     </div>
     <box :boxText='promptTxt' v-if="promptTxt" @close="promptTxt=''"></box>
  </div>
</template>
<script>
import {Base64} from 'js-base64'
import {api} from '@/reourse/setAxios'
import {mixin} from '@/reourse/Mixin'
import {setCookie} from '@/reourse/until'
export default {
  name: 'login',
  mixins: [mixin],
  data: function () {
    return {
      loginByCodeFrom: {
        mobile: '',
        code: ''
      },
      loginByPasswordForm: {
        mobile: '',
        password: ''
      },
      phonePrompt1: false,
      phonePrompt2: false,
      codePrompt: false,
      passPrompt: false,
      activeName: 0,
      promptTxt: '',
      timestamp: ''
    }
  },
  // created () {
  //   let cookie = getCookie()
  //   // if (cookie) {
  //   //   this.testToken()
  //   // }
  // },
  methods: {
    tabHandleClick: function (id) {
      this.activeName = id
    },
    loginByPasswordBtn () {
      let mobile = this.loginByPasswordForm.mobile
      let password = this.loginByPasswordForm.password
      if (mobile && this.testMobile(mobile) && password && this.testPass(password)) {
        let baseData1 = Base64.encode(`${mobile}:${password}`)
        let params = {
          mobile,
          password
        }
        api.post('user/login', JSON.stringify(params), {
          headers: {
            Authorization: `Basic ${baseData1}`
          }
        }).then(res => {
          this.Loading.open()
          setCookie('token', res.token, 15)
          this.commitUserInfo(res)
          this.$router.replace('/study-center/course')
        }).catch(err => {
          this.promptTxt = err.message
        })
      } else {
        this.promptTxt = '请输入正确的手机号或密码'
      }
    },
    loginByCodeFromBtn () {
      let mobile = this.loginByCodeFrom.mobile
      let verifyCode = this.loginByCodeFrom.code
      if (mobile && this.testMobile(mobile) && verifyCode && this.testCode(verifyCode)) {
        let params = `mobile=${mobile}&verify_code=${verifyCode}`
        api.post('user/wechat/login', params)
          .then(res => {
            this.$router.replace('/study-center')
          }).catch(err => {
            this.promptTxt = err.message
          })
      } else {
        this.promptTxt = '请输入正确的手机号或验证码'
      }
    }
  }
}
</script>
<style lang="scss">
  @import '~@/assets/style/from.scss' ;
 </style>
