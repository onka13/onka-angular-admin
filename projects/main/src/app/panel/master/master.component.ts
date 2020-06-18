import { Component } from '@angular/core';
import { UIManagerService } from 'onka-angular-admin-core';
import { OnkaService } from 'onka-angular-admin-core';
import { menuList, allModuleConfigs } from '../modules/module-config';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html'
})
export class MasterComponent {
  menuList = menuList;
  allModuleConfigs = allModuleConfigs;
  constructor(
    public onkaService: OnkaService,
    private uiManager: UIManagerService,
  ) {
  }

  test() {
    this.uiManager.openDialog({
      data: {
        title: 'Warning!',
        content: 'Are you sure?',
        actions: [
          { label: 'No', value: 0 },
          { label: 'Yes', value: 1, color: 'primary' },
        ]
      }
    }, (result) => {

    }, {
      small: true
    });
    return;
    this.uiManager.openDialog(
      {        
        //disableClose: true,
        //position: {
        //  right: '0',
        //},
        data: {
          url: 'AdminApi/AdminUserSearch',
          //hideFilters: true,
          addSelectField: true,
          defaultValues: { name: 'asd' },
          hideActions: true,
          hideDefaultFilters: true,
          title: 'Admin Users',
          toolbar: true,
          //redirect: 'edit'
        },
      },
      (record) => {
        console.log('selected record', record);
      },
      {
        //width: '400px',
        //height: '100vh',
        //width: '50vw',
        //height: '70vh',
        //fullScreen: true,
      },
    );
  }
}
