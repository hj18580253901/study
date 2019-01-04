import {Base64} from 'js-base64'
let utils = {
  getKeys: Object.keys || function (obj) {
    let keys = []
    let key
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key)
      }
      return keys
    }
  }
}
export function getCookie (token) {
  let cookie = document.cookie ? document.cookie.split(';') : false
  if (cookie) {
    let cookieArr = []
    cookie.forEach((item, index) => {
      cookieArr[index] = item.trim().split('=')
    })
    let cookieArr2 = cookieArr.reduce((acc, cur) => acc.concat(cur), [])
    let targetIn = cookieArr2.indexOf(token)
    return cookieArr2[targetIn + 1]
  }
}
export function setCookie (name, value, time) {
  let nowDate = new Date()
  let expires = nowDate.setDate(time)
  document.cookie = `${name}=${value};expires=${expires}`
}
export let getBasicToken = (token) => {
  return token ? ' Basic ' + Base64.encode(token + ':') : ''
}
export const formatDate = (date, fmt) => {
  date = new Date(date)
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}
export function makeFormData (obj) {
  let keys = utils.getKeys(obj)
  let formData = ''
  let len = keys.length
  keys.forEach((item, index) => {
    if (index + 1 < len) {
      formData += `${item}=${obj[item]}&`
    } else {
      formData += `${item}=${obj[item]}`
    }
  })
  return formData
}
export function computeAge (startDate) {
  var starTime = Date.parse(startDate)
  var markTime = new Date().getTime()
  var sub = markTime - starTime
  var age = parseInt(sub / (1000 * 60 * 60 * 24 * 365))
  return age
}
