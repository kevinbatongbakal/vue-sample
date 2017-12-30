import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import { routes } from './routes';
import Vuelidate from 'vuelidate';
import Buefy from 'buefy';

// css
import 'buefy/lib/buefy.css';
import 'font-awesome/scss/font-awesome.scss'

// use
Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(Buefy, {
  defaultIconPack: 'fa'
})

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
