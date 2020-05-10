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

                <!--begin::Form-->
                <form class="m-form m-form--fit m-form--label-align-right">
                    <div class="m-portlet__body">
                        <div class="form-group m-form__group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control m-input" id="name" name="name" aria-describedby="emailHelp" placeholder="Enter Your Name">
                        </div>
                        <div class="form-group m-form__group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control m-input" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter Your Email">
                        </div>
                        <div class="form-group m-form__group">
                            <label for="status">Status</label>
                            <select class="form-control m-input" id="status" name="status">
                                <option value="0">Male</option>
                                <option value="1">Female</option>
                            </select>
                        </div>
                        <div class="form-group m-form__group">
                            <label for="description">Discription</label>
                            <textarea class="form-control m-input" id="description" name="description" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="m-portlet__foot m-portlet__foot--fit">
                        <div class="m-form__actions">
                            <button type="reset" class="btn btn-success">Save</button>
                            <button type="reset" class="btn btn-secondary">Cancel</button>
                        </div>
                    </div>
                </form>

                <!--end::Form-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Edit"
    }
</script>

<style scoped>

</style>