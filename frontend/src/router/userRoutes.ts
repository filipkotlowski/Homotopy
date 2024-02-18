import { RouteRecordRaw } from 'vue-router';

const userRoutes: (RouteRecordRaw & { children?: RouteRecordRaw[] })[] = [
    {
        path: '/',
        name: 'client',
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('@/views/client/HomeView.vue'),
            },
            {
                path: 'login',
                name: 'Login',
                component: () => import('@/views/client/LoginView.vue'),
            },
        ],
    },
]
export default userRoutes;