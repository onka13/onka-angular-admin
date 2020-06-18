import { Component, OnInit, AfterViewInit } from '@angular/core';
import { pageConfig } from './config';

@Component({
  selector: 'app-admin-user-search',
  template: `<onka-list [pageConfig]="pageConfig"></onka-list>`,
})
export class AdminUserSearchComponent implements OnInit, AfterViewInit {
  pageConfig = pageConfig;
  
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}
}
