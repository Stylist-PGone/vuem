import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'

Vue.prototype.axios=axios;
Vue.config.productionTip = false
Vue.filter('setWh',(url,arg)=>{
	return(url.replace(/w\.h/,arg))
})
import scoller from '@/components/Scroller'
Vue.component('scoller',scoller)
import loading from '@/components/loading'
Vue.component('loading',loading)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
