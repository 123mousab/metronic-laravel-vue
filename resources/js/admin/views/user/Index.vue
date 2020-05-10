<template>
    <div>
        <h1>Index User</h1>
        <table>
            <tr>
                <td>Name</td>
                <td>email</td>
                <td>status</td>
                <td>actions</td>
            </tr>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.status }}</td>
                <td>
                    <router-link :to="user.path"><a>Edit</a></router-link>
                    <button class="btn btn-danger" @click="destroy(user.id)">Delete</button>
                </td>
            </tr>
        </table>
    </div>
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
        },
        methods: {
            destroy(id) {
                axios.delete(`/api/user/${id}`)
                    .then(res => this.$router.push({name: 'user-index'}))
            }
        }
    }
</script>

<style scoped>

</style>
