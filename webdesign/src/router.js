import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue';
import SampleForm from './components/sample/SampleForm.vue';
import SampleTable from './components/sample/SampleTable.vue';

Vue.use(VueRouter);

const routes = [
    { path: '', components: { default: Home } },
    { path: '/sample-form', components: { default: SampleForm } },
    { path: '/sample-table', components: { default: SampleTable } }
];

export default new VueRouter({ mode: 'history', routes })