import { appRoutes } from "src/constants";

export const adminLteConf = {
  skin: 'blue',
  sidebarLeftMenu: [
    {label: 'MAIN NAVIGATION', separator: true},
    {label: 'Dashboard', route: '/', iconClasses: 'fa fa-road'},
    {label: 'Accounts', iconClasses: 'fa fa-road', children: [
      {label: 'Asset', route: '/accounts/asset'}
    ]},
    {label: 'AUTH', separator: true},
    {label: 'Login', route: `/${appRoutes.login}/`, iconClasses: 'fa fa-road'},
    {label: 'Register', route: `/${appRoutes.register}/`, iconClasses: 'fa fa-road'},
    {label: 'Logout', route: `/${appRoutes.logout}/`, iconClasses: 'fa fa-road'},
  ]
};
