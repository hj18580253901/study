import {api} from '@/reourse/setAxios'
import {getInfoByToken} from '@/reourse/api'
const codeReg = /^\d{6}$/
const mobileReg = /^[1][3,4,5,7,8][0-9]{9}$/
const passReg = /^\S{6,18}$/
export var mixin = {
  methods: {
    testCode (code) {
      return codeReg.test(code)
    },
    commitUserInfo (res) {
      this.$store.commit('SET_LOGIN', res)
    },
    testMobile (mobile) {
      return mobileReg.test(mobile)
    },
    testPass (password) {
      return passReg.test(password)
    },
    codeTime (el) {
      return (function counter (i) {
        if (i <= 0) {
          el.setAttribute('disabled', 'true')
          el.innerText = '获取验证码'
          return
        }
        el.removeAttribute('disabled', 'false')
        el.innerText = `${i}s`
        setTimeout(() => {
          counter(--i)
        }, 1000)
      })(90, el)
    },
    async testToken () {
      var data = await getInfoByToken()
      try {
        this.commitUserInfo(data)
      } catch (e) {
        this.promptTxt = '登录已超时 请重新登录'
        this.$router.replace('/login')
      }
    },
    getCodeBtn (e, regMobile, type) {
      let mobile = regMobile
      let timestamp = new Date().getTime()
      let el = e.target
      console.log(mobile)
      if (mobile && this.testMobile(mobile)) {
        api.get(`user/wechat/verifycode?mobile=${mobile}&type=${type}&captcha=1234&timestamp=${timestamp}`)
          .then(res => {
            this.codeTime(el)
          }).catch(err => {
            this.promptTxt = err.message
          })
      }
    }
  }
}
