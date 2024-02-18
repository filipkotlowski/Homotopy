import { NavbarTab } from '@/const/types/NavbarTab';

const tabs: (NavbarTab)[] = [
  {
    title: 'Dashboard',
    path: 'dashboard',
    icon: 'home',
    isAdmin: true,
    position: 1,
  },
  {
    title: 'Ustawienia',
    icon: 'settings',
    position: 2,
    isAdmin: true,
    children: [
      {
        title: 'Ustawienia użytkownika',
        path: 'user-settings',
        resource: 'settings',
      },
      {
        title: 'Ustawienia ogólne',
        path: 'global-settings',
        resource: 'settings',
      },
    ],
  },
];

export default tabs;
