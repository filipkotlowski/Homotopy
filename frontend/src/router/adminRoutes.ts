import { RouteRecordRaw } from 'vue-router';

const adminRoutes: (RouteRecordRaw & { children?: RouteRecordRaw[] })[] = [
  {
    path: '/admin',
    name: 'admin',
    children: [
      {
        path: 'dashboard',
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
]
export default adminRoutes;