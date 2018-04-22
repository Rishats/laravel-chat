<template>
    <b-container fluid>
        <b-row>
            <b-col md="3" class="py-3 text-center">
                <b-btn id="anonymousChat" href="anonymous-chat" v-b-popover.hover.bottom="anonymous_chat_online_api_data['online']"
                       title="Current online"
                       variant="primary">Open</b-btn>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        data() {
            return {
                anonymous_chat_online_api_data: []
            }
        },
        mounted() {
            axios.get('/api/anonymous_chat_online')
                .then(({data}) => this.anonymous_chat_online_api_data = data);

        }
    }
</script>

<style scoped>

</style>