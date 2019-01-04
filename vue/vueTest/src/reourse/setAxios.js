import axios from 'axios'
function getAxios (settings, timeout = 10000) {
  const instance = axios.create(settings)
  instance.defaults.timeout = timeout
  instance.interceptors.response.use(res => {
    if (res.status >= 200 && res.status < 300 && !res.data.code) {
      return res.data.data || res.data
    }
    return Promise.reject(res.data)
  }, err => {
    return Promise.reject(err.data || err.response.data || {
      code: 5001,
      message: 'api error'
    })
  })
  return instance
}
export const api = getAxios({
  baseURL: ('https:wechat-api-dev.rouchi.com/').replace(/\/$/, ''),
  'Content-Type': 'application/x-www-form-urlencoded',
  'Accept': 'application/json'
})