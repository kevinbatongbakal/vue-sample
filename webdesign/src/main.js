import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import { routes } from './routes';
import VueBlu from 'vue-blu';
import Vuelidate from 'vuelidate'
import 'vue-blu/dist/css/vue-blu.min.css';

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.use(VueRouter);
Vue.use(VueBlu);
Vue.use(Vuelidate);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
