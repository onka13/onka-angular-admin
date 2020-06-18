import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'onka-angular-admin-core';
import { MasterComponent } from './master/master.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { allModuleRoutes } from './modules/module-config';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: MasterComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          ...allModuleRoutes,
          { path: 'page1', component: Page1Component },
          { path: 'page2', component: Page2Component },
          { path: '', component: DashboardComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [],
})
export class PanelRoutingModule {}
