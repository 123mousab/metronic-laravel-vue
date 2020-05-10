<template>
    <div class="row">
        <div class="col-md-12">
            <div class="m-portlet m-portlet--tab">
                <div class="m-portlet__head">
                    <div class="m-portlet__head-caption">
                        <div class="m-portlet__head-title">
												<span class="m-portlet__head-icon m--hide">
													<i class="la la-gear"></i>
												</span>
                            <h3 class="m-portlet__head-text">
                                Edit User Form
                            </h3>
                        </div>
                    </div>
                </div>

                <form class="m-form m-form--fit m-form--label-align-right" @submit.prevent="edit">
                    <div class="m-portlet__body">
                        <div class="form-group m-form__group">
                            <label for="name">Name</label>
                            <input
                                type="text"
                                class="form-control m-input"
                                id="name"
                                v-model="user.name"
                                name="name" aria-describedby="emailHelp"
                                placeholder="Enter Your Name">
                        </div>
                        <div class="form-group m-form__group">
                            <label for="email">Email</label>
                            <input
                                type="email"
                                class="form-control m-input"
                                id="email"
                                v-model="user.email"
                                name="email"
                                aria-describedby="emailHelp"
                                placeholder="Enter Your Email">
                        </div>
                        <div class="form-group m-form__group">
                            <label for="status">Status</label>
                            <select class="form-control m-input" v-model="user.status" id="status" name="status">
                                <option value="0">Male</option>
                                <option value="1">Female</option>
                            </select>
                        </div>
                        <div class="form-group m-form__group">
                            <label for="description">Discription</label>
                            <textarea
                                class="form-control m-input"
                                id="description"
                                name="description"
                                rows="3"
                                v-model="user.description"
                            ></textarea>
                        </div>
                    </div>
                    <div class="m-portlet__foot m-portlet__foot--fit">
                        <div class="m-form__actions">
                            <button type="submit" class="btn btn-success">Save</button>
                            <button type="reset" class="btn btn-secondary">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: null,
            }
        },
        created() {
            axios.get(`/api/user/${this.$route.params.id}`)
                .then(res => this.user = res.data.data)
                .catch(error => error.response.data)
        },
        methods: {
            edit() {
                console.log(this.$route.params.id);
                axios.patch(`/api/user/${this.$route.params.id}`, this.user)
                    .then(res => this.$router.push({name: 'user-index'}))
            }
        }
    }
</script>

<style scoped>

</style>
