import { RouteRecordRaw } from 'vue-router';

const adminRoutes: (RouteRecordRaw & { children?: RouteRecordRaw[] })[] = [
  {
    path: '/admin',
    name: 'admin',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/admin/DashboardView.vue'),
      },
      {
        path: 'user-settings',
        component: () => import('@/views/admin/UserSettings.vue'),
      },
      {
        path: 'global-settings',
        component: () => import('@/views/admin/GlobalSettings.vue'),
      },
    ],
  },
]
export default adminRoutes;