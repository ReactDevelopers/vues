import Vue from 'vue'
import AppComponent from './components/AppComponent.vue'
import VeeValidate from 'vee-validate'
import HelloWorld from './components/HelloWorld.vue'

require('./assets/css/bootstrap.min.css');
Vue.use(VeeValidate);

new Vue({
   render: h => h(HelloWorld)
 }).$mount('#app')