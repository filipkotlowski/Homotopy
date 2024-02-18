export interface NavbarTab {
  title: string;
  path?: string;
  icon: string;
  position: number;
  isAdmin: boolean;
  children?:{
    title: string,
    path: string,
    resource: string,
  }[];
}
