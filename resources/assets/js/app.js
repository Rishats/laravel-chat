
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';
import axios from 'axios';

Vue.use(BootstrapVue);
Vue.use(Vuesax);
window.axios = axios;
window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


// Home
Vue.component('anonymous_chat_info_component', require('./components/home/AnonymousChatInfoComponent'));
//-----------//


// Anonymous Chat
Vue.component('status_component', require('./components/anonymous-chat/StatusComponent'));
Vue.component('message_form_component', require('./components/anonymous-chat/MessageFormComponent'));
//-----------//

const app = new Vue({
    el: '#app'
});
