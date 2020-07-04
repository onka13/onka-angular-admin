// Do not change comments
import { Routes } from '@angular/router';
import { OnkaPageConfig } from 'onka-angular-admin-core';

import * as  AdminUserSearch from './pages/admin-user-search/routes'; 
import * as  AdminRoleSearch from './pages/admin-role-search/routes'; 
// routes-import

import * as AdminUserSearchConfig from './pages/admin-user-search/config'; 
import * as AdminRoleSearchConfig from './pages/admin-role-search/config'; 
// pageConfig-import

export const routes: Routes = [
  ...AdminUserSearch.routes, 
...AdminRoleSearch.routes, 
// routes-array
];

export const configs: OnkaPageConfig[] = [
  AdminUserSearchConfig.pageConfig, 
AdminRoleSearchConfig.pageConfig, 
// pageConfig-array
];

export const components: any[] = [
  AdminUserSearch.components, 
AdminRoleSearch.components, 
// components-array
];

