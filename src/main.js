import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// import $ from 'jquery'

router.beforeEach((to,from,next)=>{
  console.log(to,99999999999999999999)
  if(to.matched.some(item=>item.meta.require)){
    next()
  }else{
    next()
  }
})

import './lib'//工具引用包

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
