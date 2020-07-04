import { Component, OnInit, AfterViewInit } from '@angular/core';
import { pageConfig } from './config';

@Component({
  selector: 'app-admin-role-search',
  template: `<onka-list [pageConfig]="pageConfig"></onka-list>`,
})
export class AdminRoleSearchComponent implements OnInit, AfterViewInit {
  pageConfig = pageConfig;
  
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}
}
