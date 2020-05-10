<template>
    <!-- BEGIN: Subheader -->
    <div class="m-subheader ">
        <div class="d-flex align-items-center">
            <div class="mr-auto">
                <h3 class="m-subheader__title m-subheader__title--separator">
                    {{ title }}
                </h3>
                <!-- BreadCumb -->
                <!--<Breadcumb />-->
            </div>
        </div>
    </div>
    <!-- END: Subheader -->
</template>

<script>
    export default {
        name: "Subheader",
        computed: {
            title() {
                return this.$route.meta.title;
            }
        }
    }
</script>

<style scoped>

</style>