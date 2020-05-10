import Layout from '../views/Layout';
import Dashboard from '../views/Dashboard';
import Index from '../views/Index';
import UserIndex from '../views/user/Index';
import UserCreate from '../views/user/Create';
import UserEdit from '../views/user/Edit';

export default [
    {
        path: '/',
        name: 'layout',
        component: Layout,
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/admin/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            title: 'Dashboard'
        }
    },
    {
        path: '/admin/index',
        name: 'index',
        component: Index,
        meta: {
            title: 'Index'
        }
    },
    {
        path: '/admin/user/index',
        name: 'user-index',
        component: UserIndex,
        meta: {
            title: 'Index User'
        }
    },
    {
        path: '/admin/user/create',
        name: 'user-create',
        component: UserCreate,
        meta: {
            title: 'Create User'
        }
    },
    {
        path: '/admin/user/edit',
        name: 'user-edit',
        component: UserEdit,
        meta: {
            title: 'Edit User'
        }
    },
];
