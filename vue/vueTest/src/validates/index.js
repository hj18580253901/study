import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
const mobileReg = /^1[3-9]\d{9}$/
const regPassword = /^\S{6,18}$/
const codeReg = /^\w+$/
const regNickname = /^[a-zA-Z][a-zA-Z\d]{0,49}$/
const regCName = /^[A-Za-z0-9\u4E00-\u9FA5_]{2,16}$/
Vue.use(VeeValidate)
const mobile = {
  message: (field, args) => {
    '请输入有效手机号'
  },
  validate: (value, args) => {
    return mobileReg.test(value)
  }
}
const password = {
  message: (field, args) => {
    '请输入有效密码'
  },
  validate: (value, args) => {
    return regPassword.test(value)
  }
}
const code = {
  message: (field, args) => {
    '请输入有效的验证码'
  },
  validate: (value, field) => {
    return codeReg.test(value)
  }
}
const englishName = {
  message: (field, args) => {
    '请输入有效名'
  },
  validate: (value, field) => {
    return regNickname.test(value)
  }
}
const chinaName = {
  message: (field, args) => {
    '请输入有效中文名'
  },
  validate: (value, field) => {
    return regCName.test(value)
  }
}
Validator.extend('mobile', mobile)
Validator.extend('pW', password)
Validator.extend('code', code)
Validator.extend('English', englishName)
Validator.extend('China', chinaName)
