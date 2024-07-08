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
    title: 'messages',
    icon: 'message-square',
    position: 2,
    isAdmin: true
  },
  {
    title: 'templates',
    icon: 'edit',
    position: 3,
    isAdmin: true
  },
  {
    title: 'settings',
    icon: 'settings',
    position: 4,
    isAdmin: true
  },
];

export default tabs;
