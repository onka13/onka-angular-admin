import { NgModule } from '@angular/core';
import { MasterComponent } from './master/master.component';
import { PanelRoutingModule } from './panel-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [SharedModule, PanelRoutingModule],
  declarations: [
    MasterComponent,
    DashboardComponent,
    Page1Component,
    Page2Component,
  ]
})
export class PanelModule {}
