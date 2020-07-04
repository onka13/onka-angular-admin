import { Component, OnInit, AfterViewInit } from '@angular/core';
import { OnkaService } from 'onka-angular-admin-core';
import { pageConfig } from './config';

@Component({
  selector: 'app-admin-role-search-upsert',
  template: `<onka-upsert [pageConfig]="pageConfig" [inputColumns]="inputColumns" [initialValues]="initialValues"></onka-upsert>`,
})
export class AdminRoleSearchUpsertComponent implements OnInit, AfterViewInit {
  pageConfig = pageConfig;
  inputColumns;
  initialValues = {};

  constructor(onkaService: OnkaService)
  {
    this.inputColumns = onkaService.getUpsertInputColumns(pageConfig);
  }

  ngOnInit() {}

  ngAfterViewInit() {}
}
