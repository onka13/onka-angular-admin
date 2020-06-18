import { OnkaPageConfig, OnkaPageField } from 'onka-angular-admin-core';
import { Validators } from '@angular/forms';
import CC from '../../../../components/custom-components';
import adminApiEnums from '../../admin-api-enums';

export const pageConfig = new OnkaPageConfig({
  route: '/AdminApi/AdminUserSearch',
  moduleKey: 'AdminApi',
  pageKey: 'AdminUser',
  menu: 'AdminApi',
  menuOrder: 0,
  hideMenu: false,
  get: false,
  edit: true,
  new: true,
  delete: false,
  export: false,
  primaryKeys: ['id'],
  fields: [
    new OnkaPageField({inDetail: true,
      name: 'id',
      isSortable: true,
      validators: [Validators.required, Validators.max(2147483647), Validators.maxLength(50)],
      editComponent: CC.OnkaNumberComponent,
      createComponent: CC.OnkaNumberComponent
    }),
    new OnkaPageField({inDetail: true,
      name: 'name',
      isCreatable: true,
      isEditable: true,
      inGrid: true,
      validators: [Validators.required, Validators.maxLength(200)]
    }),
    new OnkaPageField({inDetail: true,
      name: 'email',
      isCreatable: true,
      isEditable: true,
      inGrid: true,
      validators: [Validators.required, Validators.email, Validators.maxLength(200)]
    }),
    new OnkaPageField({inDetail: true,
      name: 'pass',
      isCreatable: true,
      isEditable: true,
      validators: [Validators.required, Validators.maxLength(50)]
    }),
    new OnkaPageField({inDetail: true,
      name: 'language',
      isCreatable: true,
      isEditable: true,
      validators: [Validators.maxLength(10)]
    }),
    new OnkaPageField({inDetail: true,
      name: 'allowIpAddress',
      isCreatable: true,
      isEditable: true,
      validators: [Validators.maxLength(50)]
    }),
    new OnkaPageField({inDetail: true,
      name: 'isSuper',
      isCreatable: true,
      isEditable: true,
      inGrid: true,
      validators: [Validators.required],
      enum: adminApiEnums.YesNo,
      enumName: 'YesNo',
      editComponent: CC.OnkaSelectComponent,
      createComponent: CC.OnkaSelectComponent
    }),
    new OnkaPageField({inDetail: true,
      name: 'status',
      isCreatable: true,
      isEditable: true,
      enumName: 'Status',
      enum: adminApiEnums.Status,
      inGrid: true,
      validators: [Validators.required, Validators.max(255), Validators.maxLength(50)],
      editComponent: CC.OnkaSelectComponent,
      createComponent: CC.OnkaSelectComponent
    }),
    new OnkaPageField({inDetail: true,
      name: 'no',
      isCreatable: true,
      isEditable: true,
      inGrid: true,
      validators: [Validators.maxLength(50)]
    }),
    new OnkaPageField({inDetail: true,
      name: 'theme',
      isCreatable: true,
      isEditable: true,
      enumName: 'AdminUserTheme',
      enum: adminApiEnums.AdminUserTheme,
      validators: [Validators.required, Validators.max(255), Validators.maxLength(50)],
      editComponent: CC.OnkaSelectComponent,
      createComponent: CC.OnkaSelectComponent
    }),
    
  ],
});

