<template>

</template>
    
<script>
    import VueSocketio from 'vue-socket.io';
    Vue.use(VueSocketio, 'http://laravel-chat.test:6001');

    export default {
        mounted() {
            var vm = new Vue({
                sockets:{
                    connect: function(){
                        this.$vs.notify({title:'Соединение',text:'Вы успешно подключились к чату!',color:'success',position:'bottom-center'});
                    },
                    connect_error: function(){
                        this.$vs.notify({title:'Соединение',text:'Ошибка сервера, не могу подключить к чату!',color:'danger',position:'bottom-center'});
                    }
                }
            });
        }
    }
</script>

<style scoped>

</style>
