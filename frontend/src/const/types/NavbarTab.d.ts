export interface NavbarTab {
    title: string;
    path?: string;
    icon: string;
    position: number;
    children?: { title: string; path: string, resource: string }[];
  }
  