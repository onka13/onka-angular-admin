import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'onka-angular-admin-core';

const routes: Routes = [
  {
    path: 'panel',
    loadChildren: () => import('./panel/panel.module').then((m) => m.PanelModule),
    canLoad: [AuthGuard],
  },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [],
})
export class AppRoutingModule {}
