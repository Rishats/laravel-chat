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
                        this.$vs.notify({title:'Connection',text:'You have successfully connected to the chat!',color:'success',position:'bottom-center'});
                    },
                    connect_error: function(){
                        this.$vs.notify({title:'Connection',text:'Server error, can not connect to chat!',color:'danger',position:'bottom-center'});
                    }
                }
            });
        }
    }
</script>

<style scoped>

</style>
