// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'   //引入router
import VueResource from 'vue-resource'    //引入resource，可用于请求http
import App from './App'
// import Home from './components/Home'
import Web from './components/Web'
import Exp from './components/Exp'

Vue.use(VueRouter)      //引入router
Vue.use(VueResource)      //引入resource
Vue.config.productionTip = false

//设置路由
const router=new VueRouter({
	routes:[
		{path:"/",component:Web},
		{path:"/exp",component:Exp},
	],
	mode:"history"   //去掉#
})


/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },        //来源于import App from './App'
  template: '<App/>'         
})
