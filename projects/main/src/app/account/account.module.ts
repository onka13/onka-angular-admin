import { NgModule }       from '@angular/core';
import { LoginComponent }    from './login/login.component';
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    SharedModule,
    AccountRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
  
})
export class AccountModule {}
