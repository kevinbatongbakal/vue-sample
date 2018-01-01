import Vue from 'vue';
import App from './App';
import router from './router'
import Vuelidate from 'vuelidate';
import Buefy from 'buefy';

// css
import './styles/main.scss';
import 'buefy/lib/buefy.css';
import 'font-awesome/scss/font-awesome.scss';

// use
Vue.use(Vuelidate);
Vue.use(Buefy, {
  defaultIconPack: 'fa'
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
