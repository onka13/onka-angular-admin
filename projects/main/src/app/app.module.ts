import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClientXsrfModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from './public/public.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from './panel/panel.module';
import { AccountModule } from './account/account.module';
import { GlobalErrorHandler } from './business/global-error-handler';
import { ConfigService, OnkaAdminModule, OnkaAppInitializerService } from 'onka-angular-admin-core';
import { environment } from '../environments/environment';
import { SharedModule } from './shared.module';
import * as en from '../assets/l10n/en.json'
import * as tr from '../assets/l10n/tr.json'

export function appInit(service: OnkaAppInitializerService) {
  return () => service.init();
}

var config = new ConfigService();
config.setApiUrl(environment.apiUrl);
config.setIsProd(environment.production);
config.setLangList({
  en: () => Promise.resolve(en),
  tr: () => Promise.resolve(tr),
});

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OnkaAdminModule,
    SharedModule,
    PublicModule,
    PanelModule,
    AccountModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    AppRoutingModule,
  ],
  providers: [
    DatePipe,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: ConfigService, useValue: config },
    OnkaAppInitializerService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInit,
      multi: true,
      deps: [OnkaAppInitializerService],
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor() {
    console.log('AppModule constructor');
  }
}
