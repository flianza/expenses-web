import { appRoutes } from "src/constants";

export const adminLteConf = {
  skin: 'blue',
  // isSidebarLeftCollapsed: false,
  // isSidebarLeftExpandOnOver: false,
  // isSidebarLeftMouseOver: false,
  // isSidebarLeftMini: true,
  // sidebarRightSkin: 'dark',
  // isSidebarRightCollapsed: true,
  // isSidebarRightOverContent: true,
  // layout: 'normal',
  sidebarLeftMenu: [
    {label: 'MAIN NAVIGATION', separator: true},
    {label: 'Dashboard', route: '/', iconClasses: 'fa fa-road'},
    {label: 'AUTH', separator: true},
    {label: 'Login', route: `/${appRoutes.login}/`, iconClasses: 'fa fa-road'},
    {label: 'Register', route: `/${appRoutes.register}/`, iconClasses: 'fa fa-road'},
    {label: 'Logout', route: `/${appRoutes.logout}/`, iconClasses: 'fa fa-road'},
  ]
};
