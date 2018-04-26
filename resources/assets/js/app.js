
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
import Echo from 'laravel-echo';


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
Vue.component('chat_info_component', require('./components/home/ChatInfoComponent'));
//-----------//


// Anonymous Chat
Vue.component('anonymous_status_component', require('./components/anonymous_chat/StatusComponent'));
Vue.component('anonymous_message_form_component', require('./components/anonymous_chat/MessageFormComponent'));
//-----------//

// Chat
Vue.component('chat_status_component', require('./components/chat/StatusComponent'));
Vue.component('chat-messages', require('./components/chat/ChatMessages.vue'));
Vue.component('chat-form', require('./components/chat/ChatForm.vue'));
//-----------//

const app = new Vue({
    el: '#app',

    data: {
        messages: []
    },

    created() {
        this.fetchMessages();

        window.Echo.private('chat')
            .listen('MessageSent', (e) => {
                this.messages.push({
                    message: e.message.message,
                    user: e.user
                });
            });
    },

    methods: {
        fetchMessages() {
            axios.get('/messages').then(response => {
                this.messages = response.data;
            });
        },

        addMessage(message) {
            this.messages.push(message);

            axios.post('/messages', message).then(response => {
                console.log(response.data);
            });
        }
    }

});
