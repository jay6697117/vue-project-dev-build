import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

if (process.env.NODE_ENV === 'stage2') {
  console.log('Vconsole开启啦～')
  // Vconsole移动端console
  const Vconsole = require('vconsole')
  new Vconsole()
}

// 我是测试
// 我是测试
// 我是测试
// 我是测试
console.log('测试console1')
console.log('测试console2')
console.log('测试console3')
console.log('测试console4')
Vue.config.productionTip = false
console.log(`main process.env.NODE_ENV:`, process.env.NODE_ENV)
console.log(`main process.env.BASE_URL`, process.env.BASE_URL)
console.log(`main process.env.VUE_APP_TITLE:`, process.env.VUE_APP_TITLE)
console.log(`main process.env:`, process.env)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
