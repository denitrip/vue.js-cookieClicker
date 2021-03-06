import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue';

Vue.use(Vuex);

Vue.use(BootstrapVue);

import VueResource from 'vue-resource';
Vue.use(VueResource);

import {router} from './routes/routes.js';
import {store} from './store/index';
import "./assets/styles/main.css"

import "../node_modules/vue-multiselect/dist/vue-multiselect.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import '../node_modules/vue-awesome/icons'

import Icon from '../node_modules/vue-awesome/components/Icon';
Vue.component('icon', Icon);

import Notifications from 'vue-notification'

Vue.use(Notifications);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
