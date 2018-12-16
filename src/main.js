import Vue from 'vue'
import MainApp from './components/MainApp'

import { store } from "./store/index";
import { router } from "./routes";
import {initialize} from './helpers/general'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
initialize(store, router);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(MainApp)
});
