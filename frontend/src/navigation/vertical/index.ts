import { SimpleNavbarTab, ExtendedNavbarTab } from '@/const/types/NavbarTab';

const tabs: (ExtendedNavbarTab | SimpleNavbarTab)[] = [
  {
    title: 'Dashboard',
    route: '/',
    icon: 'home',
    position: 1,
  },
  {
    title: 'Ustawienia',
    icon: 'settings',
    position: 2,
    children: [
      {
        title: 'Ustawienia użytkownika',
        route: 'user-settings',
        resource:'settings'
      },
      {
        title: 'Ustawienia ogólne',
        route: 'global-settings',
        resource:'settings'
      },
    ],
  },
];

export default tabs;
