import { Component, OnInit, AfterViewInit } from '@angular/core';
import { OnkaService } from 'onka-angular-admin-core';
import { pageConfig } from './config';

@Component({
  selector: 'app-admin-user-search-detail',
  template: `<onka-detail [pageConfig]="pageConfig" [displayColumns]="displayColumns"></onka-detail>`,
})
export class AdminUserSearchDetailComponent implements OnInit, AfterViewInit {
  pageConfig = pageConfig;
  displayColumns;

  constructor(onkaService: OnkaService)
  {
    this.displayColumns = onkaService.getDetailColumns(pageConfig);
  }

  ngOnInit() {}

  ngAfterViewInit() {}
}
