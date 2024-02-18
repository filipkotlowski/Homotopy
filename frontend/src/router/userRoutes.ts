import { RouteRecordRaw } from 'vue-router';

const userRoutes: (RouteRecordRaw & { children?: RouteRecordRaw[] })[] = [
    {
        path: '/',
        name: 'client',
        children: [
            {
                path: '/',
                name: 'client',
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