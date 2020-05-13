import Vue from 'vue'
import App from './App.vue'
import "nes.css/css/nes.min.css";
import Vuelidate from 'vuelidate'


Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
