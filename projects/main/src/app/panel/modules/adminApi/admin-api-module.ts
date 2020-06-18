import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { routes, components } from './admin-api-config';

@NgModule({
  imports: [
    SharedModule, 
    RouterModule.forChild(routes)
  ],
  declarations: [
    ...components
  ]
})
export class AdminApiModule {}
