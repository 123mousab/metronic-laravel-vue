import Vue from 'vue';
import router from './router';
import './components';

Vue.config.productionTip = false;


import Layout from './views/Layout';
new Vue({
    el: '#app',
    components: {Layout},
    router,
});





