import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/Login'
import Register from '@/views/register/Register.vue'
import StudyCenter from '@/views/studyCenter/StudyCenter'
import Course from '@/views/studyCenter/course/Course'
import CourseDetail from '@/views/studyCenter/course/CourseDetail'
import Leave from '@/views/studyCenter/leave/Leave'
import LeaveManage from '@/views/studyCenter/leave/LeaveManage'
import TestLevel from '@/views/studyCenter/testLevel/TestLevel'
import Schedule from '@/views/schedule/Schedule'
import PublicClass from '@/views/publicClass/PublicClass'
import Account from '@/views/account/Account'
import Order from '@/views/account/Order'
import Class from '@/views/account/Class'
import Wallet from '@/views/account/Wallet'
import Download from '@/views/download/Download'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  base: '/app/',
  routes: [
    {
      path: '',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/study-center',
      component: StudyCenter,
      children: [
        {path: '', redirect: 'course'},
        {path: 'course', component: Course},
        {path: 'course/:classroomId', component: CourseDetail},
        { path: 'leave', component: Leave },
        {path: 'leave/leave-manage', component: LeaveManage},
        {path: 'testLevel', component: TestLevel}
      ]
    }, {
      path: '/pyp/schedule',
      component: Schedule,
      name: 'schedule'
    }, {
      path: '/pulic-class',
      component: PublicClass,
      name: 'publicClass'
    }, {
      path: '/account',
      component: Account,
      children: [
        {path: '', redirect: 'order'},
        {path: 'class', component: Class, name: 'class'},
        {path: 'wallet', component: Wallet, name: 'wallet'},
        {path: 'order', component: Order, name: 'order'}
      ]
    }, {
      path: '/download',
      component: Download,
      name: 'download'
    }
  ]
})
