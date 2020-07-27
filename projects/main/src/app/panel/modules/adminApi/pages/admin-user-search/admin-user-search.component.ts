import { Component, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';
import { pageConfig } from './config';
import { OnkaListComponent, UIManagerService } from 'onka-angular-admin-core';

@Component({
  selector: 'app-admin-user-search',
  template: `<onka-list [pageConfig]="pageConfig">
    <ng-template #rowExtra let-row="row">
      <a mat-icon-button (click)="openRoles(row)">Roles</a>
    </ng-template>
  </onka-list>`,
})
export class AdminUserSearchComponent implements OnInit, AfterViewInit {
  pageConfig = pageConfig;
  @ViewChild(OnkaListComponent) onkaList: OnkaListComponent;
  constructor(private uiManager: UIManagerService) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  openRoles(row) {
    if (row.isSuper) {
      return this.uiManager.displayMessage('Super Admin', 'info');
    }
    this.uiManager.openDialog(
      {
        position: {
          right: '0',
        },
        data: {
          title: 'Roles',
          toolbar: true,
          url: '/AdminApi/AdminUserSearch/roleAssign/' + row.id,
        },
      },
      (result) => {},
      {
        width: '400px',
        height: '100vh',
      },
    );
  }
}
