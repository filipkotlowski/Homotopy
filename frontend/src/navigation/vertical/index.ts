import { SimpleNavbarTab, ExtendedNavbarTab } from '../../const/types/NavbarTab';

const tabs: (SimpleNavbarTab | ExtendedNavbarTab)[] = [
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
      },
      {
        title: 'Ustawienia ogólne',
        route: 'global-settings',
      },
    ],
  },
];

export default tabs;
