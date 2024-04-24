import { RouteRecordRaw } from 'vue-router';
import useSettings from "@/composable/useSettings"
const {actions: settingActions} = useSettings();
const templateName = settingActions.getSetting("templateName");
settingActions.updateSetting("templateName","template_two")
const userRoutes: (RouteRecordRaw & { children?: RouteRecordRaw[] })[] = [
    {
        path: '/',
        name: 'client',
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import(`./../views/client/${templateName}/HomeView.vue`),
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