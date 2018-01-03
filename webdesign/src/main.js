import Vue from 'vue';
import App from './App';
import router from './router'
import Vuelidate from 'vuelidate';
import Buefy from 'buefy';
import store from './store';

// css
import './styles/main.scss';
import 'font-awesome/scss/font-awesome.scss';


// use
Vue.use(Vuelidate);
Vue.use(Buefy, {
  defaultIconPack: 'fa'
})

console.log('store', store);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
