<template>
    <h1>Index</h1>
</template>

<script>
    export default {
        data() {
            return {
                users: {}
            }
        },
        created() {
            axios.get('/api/user')
                .then(res => this.users = res.data.data)
                .catch(err => console.log(err.response.data))
        }
    }
</script>

<style scoped>

</style>
