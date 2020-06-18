import { Routes } from '@angular/router';
import { OnkaPageConfig, OnkaMenuItem } from 'onka-angular-admin-core';
import { configs as configsAdminApi } from './adminApi/admin-api-config';

export const menuList: OnkaMenuItem[] = [
  { name: 'AdminApi', icon: 'person' },
  { name: 'testApi', icon: 'settings' },  
  { name: 'accountApi', icon: 'account' },
];

export const allModuleRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./adminApi/admin-api-module').then((m) => m.AdminApiModule),
  },
];

export const allModuleConfigs: OnkaPageConfig[] = [
  ...configsAdminApi
];
