import { Routes } from '@angular/router';
import { AdminUserSearchComponent } from './admin-user-search.component';
import { AdminUserSearchUpsertComponent } from './admin-user-search-upsert.component';
import { AdminUserSearchDetailComponent } from './admin-user-search-detail.component';

export const routes: Routes = [
  { path: 'AdminApi/AdminUserSearch', component: AdminUserSearchComponent },
  { path: 'AdminApi/AdminUserSearch/create', component: AdminUserSearchUpsertComponent },
  { path: 'AdminApi/AdminUserSearch/edit/:id', component: AdminUserSearchUpsertComponent },
  { path: 'AdminApi/AdminUserSearch/detail/:id', component: AdminUserSearchDetailComponent },
];

export const components = [
  AdminUserSearchComponent,
  AdminUserSearchUpsertComponent,
  AdminUserSearchDetailComponent
];