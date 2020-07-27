import { Component, OnInit, AfterViewInit } from '@angular/core';
import { OnkaService, OnkaPageField, BaseBusinessLogicService, OnkaMultiReferenceComponent } from 'onka-angular-admin-core';
import { pageConfig } from './config';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-admin-user-role-assign',
  template: `<onka-upsert
    [pageConfig]="pageConfig"
    [inputColumns]="inputColumns"
    [initialValues]="initialValues"
    (onSubmit)="onSave($event)"
    [loadRoute]="loadRoute"
    [submitRoute]="submitRoute"
  ></onka-upsert>`,
})
export class AdminUserRoleAssignComponent implements OnInit, AfterViewInit {
  pageConfig = pageConfig;
  inputColumns;
  initialValues = {};
  loadRoute = pageConfig.route + '/getRoles';
  submitRoute = pageConfig.route + '/assignRole';

  constructor(private onkaService: OnkaService, private business: BaseBusinessLogicService) {
    this.inputColumns = [
      new OnkaPageField({
        name: 'roles',
        editComponent: OnkaMultiReferenceComponent,
        reference: {
          reference: 'AdminApi/AdminRoleSearch',
          filterField: 'name',
        },
      }),
    ];
  }

  ngOnInit() {
    this.loadRoute = this.pageConfig.route + '/getRoles/' + this.onkaService.params.id;
  }

  ngAfterViewInit() {}

  onSave(values) {
    values.userId = this.onkaService.params.id;
    this.business
      .request('POST', this.pageConfig.route + '/assignRole', values)
      .pipe(finalize(() => {}))
      .subscribe(() => {});
  }
}
