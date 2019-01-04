import {api} from '@/reourse/setAxios'
import {getBasicToken, getCookie, makeFormData} from '@/reourse/until'
var token = getCookie('token')
let basicToken = getBasicToken(token)
export function getInfoByToken () {
  return api.get('user/info', {
    headers: {
      Authorization: basicToken
    }
  })
}
export function getClassInfoByStuid (studentId) {
  return api.get(`learning/student/${studentId}/classroom_list?token=${token}`)
}
export function getLeaveInfo (studentId) {
  return api.get(`user/student/${studentId}/leave/list?token=${token}`)
}
export function editStudentInfo (studentId, user) {
  return api.put(`user/student/${studentId}`, makeFormData(user), {
    headers: {
      Authorization: basicToken
    }
  })
}
export function getStudentStar (studentId) {
  return api.get(`learning/students/${studentId}/score?token=${token}`)
}
export function revisePassWord (oldPass, newPass) {
  return api.put('user/password', makeFormData({
    old_password: oldPass,
    password: newPass
  }), {
    headers: {
      Authorization: basicToken
    }
  })
}
export function getStudentTimeTab (classId, studentId) {
  return api.get(`learning/classroom/${classId}/detail?token=${token}`, {
    params: {
      student_id: studentId
    }
  })
}
