import Vue from 'vue'
import Vuex, {mapGetters} from 'vuex'
Vue.use(Vuex)
Vue.mixin({
  computed: {
    ...mapGetters(['user', 'student'])
  }
})
const store = new Vuex.Store({
  state: {
    user: '{}'
  },
  mutations: {
    SET_LOGIN: (state, payload) => {
      state.user = payload
    }
  },
  getters: {
    student: (state) => {
      return state.user.students ? state.user.students[0] : null
    }
  }
})
export default store
