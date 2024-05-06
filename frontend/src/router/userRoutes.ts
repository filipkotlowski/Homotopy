import { RouteRecordRaw } from 'vue-router';
import useSettings from "@/composable/useSettings"
const {actions: settingActions} = useSettings();
const templateName = settingActions.getSetting("templateName");
const userRoutes: (RouteRecordRaw & { children?: RouteRecordRaw[] })[] = [
    {
        path: '/',
        name: 'client',
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import(`../templates/${templateName}/views/HomeView.vue`),
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
