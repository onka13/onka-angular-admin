// Auto generated file
import { OnkaPageConfig, OnkaPageField } from 'onka-angular-admin-core';
import { Validators } from '@angular/forms';
import CC from '../../../../components/custom-components';
import adminApiEnums from '../../admin-api-enums';

export const pageConfig = new OnkaPageConfig({
  route: '/AdminApi/AdminRoleSearch',
  moduleKey: 'AdminApi',
  pageKey: 'AdminRole',
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
    new OnkaPageField({
    inDetail: true,
      name: 'id',
      isSortable: true,
      validators: [Validators.required, Validators.max(2147483647), Validators.maxLength(50)],
      editComponent: CC.OnkaNumberComponent,
      createComponent: CC.OnkaNumberComponent
    }),
    new OnkaPageField({
    inDetail: true,
      name: 'name',
      isCreatable: true,
      isEditable: true,
      inFilter: true,
      inGrid: true,
      validators: [Validators.required, Validators.maxLength(200)]
    })
  ],
});

