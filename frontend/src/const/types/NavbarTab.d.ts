
export interface SimpleNavbarTab {
    title: string;
    route: string;
    icon: string;
    position: number;
  }
  
  export interface ExtendedNavbarTab {
    title: string;
    icon: string;
    position: number;
    children: { title: string; route: string }[];
  }