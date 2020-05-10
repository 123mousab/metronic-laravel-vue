<template>
    <div>
        <div>
            <!-- begin:: Page -->
            <div class="m-grid m-grid--hor m-grid--root m-page">

                <Header />

                <!-- begin::Body -->
                <div class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">

                    <!-- BEGIN: Left Aside -->
                    <button class="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn"><i class="la la-close"></i></button>
                    <div id="m_aside_left" class="m-grid__item	m-aside-left  m-aside-left--skin-dark ">
                        <Menu />
                    </div>
                    <!-- END: Left Aside -->

                    <div class="m-grid__item m-grid__item--fluid m-wrapper">

                        <Subheader />

                        <div class="m-content">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>

                <!-- end:: Body -->

                <Footer></Footer>
            </div>
            <!-- end:: Page -->
        </div>
    </div>
</template>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    import Menu from "./Menu";
    import Subheader from "./Subheader";
    export default {
        name: "Main",
        components: {Subheader, Menu, Footer, Header}
    }
</script>

<style scoped>

</style>