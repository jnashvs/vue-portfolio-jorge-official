import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  mutations: {
  },
  actions: {
    closer(pop) {
      // this.$refs.navcolapse.setAttribute(
      //     "class",
      //     "navbar-collapse collapse"
      //   );
      console.log(pop);
    },
  },
  modules: {
  }
})
