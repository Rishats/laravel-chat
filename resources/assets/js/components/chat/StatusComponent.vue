<template>

</template>
    
<script>
    export default {
        name: "StatusComponent"
    };
    var vm = new Vue({
        sockets:{
            connect: function(){
                this.$vs.notify({title:'Соединение',text:'Вы успешно подключились к чату!',color:'success',position:'bottom-center'});
            }
        },
    });
</script>

<style scoped>

</style>
