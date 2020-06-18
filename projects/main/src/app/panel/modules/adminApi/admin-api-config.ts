// Do not change comments
import { Routes } from '@angular/router';
import { OnkaPageConfig } from 'onka-angular-admin-core';

import * as  AdminUserSearch from './pages/admin-user-search/routes'; 
// routes-import

import * as AdminUserSearchConfig from './pages/admin-user-search/config'; 
// pageConfig-import

export const routes: Routes = [
  ...AdminUserSearch.routes, 
// routes-array
];

export const configs: OnkaPageConfig[] = [
  AdminUserSearchConfig.pageConfig, 
// pageConfig-array
];

export const components: any[] = [
  AdminUserSearch.components, 
// components-array
];

