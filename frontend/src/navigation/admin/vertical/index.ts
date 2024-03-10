import { NavbarTab } from '@/const/types/NavbarTab';

const tabs: (NavbarTab)[] = [
  {
    title: 'dashboard',
    path: 'dashboard',
    icon: 'home',
    isAdmin: true,
    position: 1,
  },
  {
    title: 'settings',
    icon: 'settings',
    position: 2,
    isAdmin: true,
    children: [
      {
        title: 'userSettings',
        path: 'user-settings',
        resource: 'settings',
      },
      {
        title: 'globalSettings',
        path: 'global-settings',
        resource: 'settings',
      },
    ],
  },
];

export default tabs;
