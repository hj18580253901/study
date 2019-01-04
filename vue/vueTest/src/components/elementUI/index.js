import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import Loading from '@/components/loading/load.js'
import {DatePicker, Select, Radio, Checkbox, Pagination, Option, Dialog, Upload} from 'element-ui'
const components = {
  Dialog,
  Checkbox,
  DatePicker,
  Radio,
  Select,
  Option,
  Pagination,
  Upload
}
for (let [, val] of Object.entries(components)) {
  Vue.component(val['name'], val)
}

Vue.prototype.Loading = Loading
