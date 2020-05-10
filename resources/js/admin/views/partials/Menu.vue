<template>
    <!-- BEGIN: Aside Menu -->
    <div id="m_ver_menu" class="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark " m-menu-vertical="1" m-menu-scrollable="0" m-menu-dropdown-timeout="500">
        <ul class="m-menu__nav ">
            <li class="m-menu__section m-menu__section--first">
                <h4 class="m-menu__section-text">Departments</h4>
                <i class="m-menu__section-icon flaticon-more-v2"></i>
            </li>
            <li class="m-menu__item " aria-haspopup="true" >
                <router-link to="/admin/dashboard" class="m-menu__link ">
                    <i class="m-menu__link-bullet m-menu__link-bullet--dot">
                        <span></span>
                    </i>
                    <span class="m-menu__link-text">
													Dashboard
												</span>
                </router-link>
            </li>
            <li class="m-menu__item " aria-haspopup="true" >
                <router-link to="/admin/index" class="m-menu__link ">
                    <i class="m-menu__link-bullet m-menu__link-bullet--dot">
                        <span></span>
                    </i>
                    <span class="m-menu__link-text">
													Index
												</span>
                </router-link>
            </li>
            <li class="m-menu__item  m-menu__item--submenu m-menu__item--open m-menu__item--expanded" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" class="m-menu__link m-menu__toggle"><span class="m-menu__item-here"></span><i
                    class="m-menu__link-icon flaticon-layers"></i><span class="m-menu__link-text">User</span><i class="m-menu__ver-arrow la la-angle-right"></i></a>
                <div class="m-menu__submenu "><span class="m-menu__arrow"></span>
                    <ul class="m-menu__subnav">
                        <router-link to="/admin/user/index" tag="li" class="m-menu__item  m-menu__item--active" aria-haspopup="true"><a href="inner.html" class="m-menu__link "><i class="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span class="m-menu__link-text">Index</span></a></router-link>
                        <router-link to="/admin/user/create" tag="li" class="m-menu__item  m-menu__item--active" aria-haspopup="true"><a href="inner.html" class="m-menu__link "><i class="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span class="m-menu__link-text">Create</span></a></router-link>
                        <router-link to="/admin/user/edit" tag="li" class="m-menu__item  m-menu__item--active" aria-haspopup="true"><a href="inner.html" class="m-menu__link "><i class="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span class="m-menu__link-text">Edit</span></a></router-link>

                    </ul>
                </div>
            </li>
        </ul>
    </div>
    <!-- END: Aside Menu -->
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>

</style>