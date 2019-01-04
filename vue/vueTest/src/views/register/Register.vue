<template>
  <div class="login-wrapper rel">
    <div class="login-title">欢迎注册</div>
    <div class="login-wran abs">
      <span>已有帐号？</span>
      <router-link class="special" :to="{path: '/login'}">马上登录</router-link>
    </div>
   <div class="login-type1">
      <div class="from-group">
        <span class="inline-block left-label">手机号</span>
        <span class="inline-block right-input rel">
          <input type="text" placeholder="请输入手机号" v-model='regMobile' @input='regErrorPhone=!testMobile($event.target.value)'>
          <span class="is-danger abs" v-show="regErrorPhone">请输入有效的手机号码</span>
        </span>
      </div>
      <div class="from-group rel">
        <span class="inline-block left-label">验证码</span>
        <span class="inline-block right-input code rel">
          <input type="text" placeholder="请输入验证码" v-model="regCode" @input='regErrorCode=!testCode($event.target.value)'>
           <span class="is-danger abs" v-show="regErrorCode">请输入有效验证码</span>
        </span>
       <button class="inline-block code-btn" @click="getCodeBtn($event, regMobile, 'register')">获取验证码</button>
      </div>
      <div class="t-c">
        <button class="submit inline-block" @click="registerBtn">注册</button>
      </div>
    </div>
    <box :boxText='promptTxt' v-if='promptTxt' @close="promptTxt=''"></box>
   </div>
</template>
<script>
import {api} from '@/reourse/setAxios'
import Box from '@/views/box/Box'
import {mixin} from '@/reourse/Mixin'
export default {
  name: 'register',
  mixins: [mixin],
  components: {
    Box
  },
  data: function () {
    return {
      'regMobile': '',
      'regCode': '',
      'regErrorPhone': false,
      'regErrorCode': false,
      promptTxt: ''
    }
  },
  methods: {
    registerBtn () {
      let mobile = this.regMobile
      let verifyCode = this.regCode
      console.log(verifyCode)
      if (mobile && !this.testMobile(mobile) && verifyCode) {
        console.log(1)
        let params = `mobile=${mobile}&verify_code=${verifyCode}`
        api.post('user/wechat/register', params)
          .then(res => {
            this.promptTxt = '注册成功 前往登录页登录'
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
