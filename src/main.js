// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/index'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.path == '/login') {
//     sessionStorage.removeItem('user');
//   }
//   let user = JSON.parse(sessionStorage.getItem('user'));
//   if (!user && to.path != '/login') {
//     console.log("1111111");
//     next({ path: '/login' })
//   } else {
//     next()
//   }
// })

new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  // store,
  //components: { App }
  render: h => h(App)
}).$mount('#app')
