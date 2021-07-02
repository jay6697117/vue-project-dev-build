import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 我是测试
// 我是测试
// 我是测试
// 我是测试
console.log('测试console1')
console.log('测试console2')
console.log('测试console3')
console.log('测试console4')
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
