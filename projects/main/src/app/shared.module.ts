import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PortalModule } from '@angular/cdk/portal';
import { OnkaSharedModule, MaterialModule } from 'onka-angular-admin-core';

const sharedModules: any[] = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule,
  FlexLayoutModule,
  MaterialModule,
  RouterModule,
  PortalModule,
  OnkaSharedModule,
];
const sharedComponents: any[] = [
  
];

@NgModule({
  imports: sharedModules,
  declarations: sharedComponents,
  exports: [...sharedComponents, ...sharedModules],
})
export class SharedModule {}
