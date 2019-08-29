import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('leftPad',  function (value) {
  return ('_______________'+value).slice(-15);
});

new Vue({
  render: h => h(App)
}).$mount('#app')


