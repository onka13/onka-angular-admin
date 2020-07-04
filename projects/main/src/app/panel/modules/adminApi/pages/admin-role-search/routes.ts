import { Routes } from '@angular/router';
import { AdminRoleSearchComponent } from './admin-role-search.component';
import { AdminRoleSearchUpsertComponent } from './admin-role-search-upsert.component';
import { AdminRoleSearchDetailComponent } from './admin-role-search-detail.component';

export const routes: Routes = [
  { path: 'AdminApi/AdminRoleSearch', component: AdminRoleSearchComponent },
  { path: 'AdminApi/AdminRoleSearch/create', component: AdminRoleSearchUpsertComponent },
  { path: 'AdminApi/AdminRoleSearch/edit/:id', component: AdminRoleSearchUpsertComponent },
  { path: 'AdminApi/AdminRoleSearch/detail/:id', component: AdminRoleSearchDetailComponent },
];

export const components = [
  AdminRoleSearchComponent,
  AdminRoleSearchUpsertComponent,
  AdminRoleSearchDetailComponent
];