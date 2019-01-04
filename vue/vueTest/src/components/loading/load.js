import Vue from 'vue'
const Indicator = Vue.extend(require('./Loading.vue'))
let instance
export default {
  open () {
    if (!instance) {
      instance = new Indicator({
        el: document.createElement('div')
      })
    }
    if (instance.visible) return
    document.body.appendChild(instance.$el)
    console.log(instance.$el)
    Vue.nextTick(() => {
      instance.visible = true
    })
  },
  close () {
    if (instance) {
      instance.visible = false
    }
  }
}
