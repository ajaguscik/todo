import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle as farCheckCircle, faCircle as farCircle, faTrashAlt as farTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle as fasCheckCircle, faCircle as fasCircle, faTrashAlt as fasTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fasCheckCircle, farCheckCircle, fasCircle, farCircle, fasTrashAlt, farTrashAlt);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
}).$mount('#app')
