export interface MenuItem {
    name: string;
    path: string;
    active: boolean;
  }
  
  export const MenuList: MenuItem[] = [
    {
      name: "All",
      path: "/",
      active: true,
    },
    {
      name: "Images",
      path: "/images",
      active: false,
    },
    {
      name: "Videos",
      path: "/videos",
      active: false,
    },
    {
      name: "News",
      path: "/news",
      active: false,
    },
    {
      name: "Filters",
      path: "/filters",
      active: false,
    },
  ];
  