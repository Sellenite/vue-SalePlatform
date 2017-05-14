// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import VueResourse from 'vue-resource';
import 'animate.css';

Vue.use(VueResourse);
Vue.use(Vuex);

let store = new Vuex.Store({
  /* 数据中心 */
  state: {
    totalPrice: 0
  },
  /* 方法，可以处理state，调用需用commit */
  mutations: {
    increment(state, price) {
      state.totalPrice += price;
    },
    decrement(state, price) {
      state.totalPrice -= price;
    }
  },
  /* 异步处理mutations，无法处理state，调用需用dispatch */
  actions: {
    increase(context, price) {
      context.commit('increment', price);
    },
    decrease(context, price) {
      context.commit('decrement', price);
    }
  },
  /* 对顶层数据进行过滤。处理state，调用需用getters */
  getters: {
    getTotal(state) {
      return state.totalPrice + '￥';
    }
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
