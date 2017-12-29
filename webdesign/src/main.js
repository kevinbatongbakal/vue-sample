import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import { routes } from './routes';
import VueBlu from 'vue-blu';
import Vuelidate from 'vuelidate';

// css
import 'vue-blu/dist/css/vue-blu.min.css';

Vue.use(VueRouter);
Vue.use(VueBlu);
Vue.use(Vuelidate);

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
