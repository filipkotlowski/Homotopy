import { RouteRecordRaw } from 'vue-router';

const routes: (RouteRecordRaw & { children?: RouteRecordRaw[] })[] = [
  {
    path: '/',
    name: '/',
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/views/admin/DashboardView.vue'),
      },
      {
        path: 'user-settings',
        name: 'Ustawienia użytkownika',
        component: () => import('@/views/admin/UserSettings.vue'),
      },
    ],
  },
];

export default routes;
