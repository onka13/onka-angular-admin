import { Component, OnInit, AfterViewInit } from '@angular/core';
import { OnkaService } from 'onka-angular-admin-core';
import { pageConfig } from './config';
import adminApiEnums from '../../admin-api-enums';

@Component({
  selector: 'app-admin-user-search-upsert',
  template: `<onka-upsert [pageConfig]="pageConfig" [inputColumns]="inputColumns" [initialValues]="initialValues"></onka-upsert>`,
})
export class AdminUserSearchUpsertComponent implements OnInit, AfterViewInit {
  pageConfig = pageConfig;
  inputColumns;
  initialValues = {
    status: adminApiEnums.Status.Active,
    theme: adminApiEnums.AdminUserTheme.Light,
  };
  constructor(onkaService: OnkaService) {
    var fields = onkaService.getUpsertInputColumns(pageConfig);
    this.inputColumns = fields;
  }

  ngOnInit() {}

  ngAfterViewInit() {}
}
