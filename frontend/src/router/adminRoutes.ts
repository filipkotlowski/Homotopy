import { RouteRecordRaw } from 'vue-router';

const adminRoutes: (RouteRecordRaw & { children?: RouteRecordRaw[] })[] = [
  {
    path: '/admin',
    name: 'admin',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/admin/dashboard/DashboardView.vue'),
      },
      {
        path: 'user-settings',
        component: () => import('@/views/admin/UserSettings.vue'),
      },
      {
        path: 'global-settings',
        component: () => import('@/views/admin/global-settings/GlobalSettings.vue'),
      },
    ],
  },
]
export default adminRoutes;