import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import {
  OnkaService,
  OnkaPageField,
  OnkaInputComponent,
  OnkaOption,
  OnkaInputPass,
  ApiBusinessLogic,
  ApiSearchRequest,
  BaseBusinessLogicService,
  UIManagerService,
} from 'onka-angular-admin-core';
import { pageConfig } from './config';
import adminApiEnums from '../../admin-api-enums';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { OnkaReference } from 'onka-angular-admin-core/lib/domain/onka/onka-reference';
import { FormControl } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { startWith, debounceTime, distinctUntilChanged, tap, finalize } from 'rxjs/operators';

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

  constructor(private onkaService: OnkaService, private business: BaseBusinessLogicService, private uiManager: UIManagerService) {
    this.inputColumns = [
      new OnkaPageField({
        name: 'roles',
        editComponent: OnkaReferenceComponent,
        reference: {
          reference: 'AdminApi/AdminRoleSearch',
          filterField: 'name',
        },
      }),
    ];
  }

  ngOnInit() {
    // getRoles
    this.loadRoute = this.pageConfig.route + '/getRoles/' + this.onkaService.params.id;
    // this.business
    //   .request('POST', this.pageConfig.route + '/getRoles', {
    //     userId: this.onkaService.params.id,
    //   })
    //   .pipe(finalize(() => {}))
    //   .subscribe((record) => {
    //     console.log('getRoles', record);
    //   });
  }

  ngAfterViewInit() {}

  onSave(values) {
    console.log('values', values);
    values.userId = this.onkaService.params.id;
    //this.uiManager.displayMessage("ok", "info");
    this.business
      .request('POST', this.pageConfig.route + '/assignRole', values)
      .pipe(finalize(() => {}))
      .subscribe((record) => {});
  }
}

@Component({
  selector: 'onka-reference',
  template: `
    <mat-form-field class="onka-input input-{{ pass.column.name }}">
      <mat-label>{{ getLabel() }}</mat-label>
      <mat-chip-list #chipList aria-label="selection">
        <mat-chip *ngFor="let item of getChips()" [selectable]="selectable" [removable]="removable" (removed)="remove(item)">
          {{ item.label }}
          <mat-icon matChipRemove *ngIf="removable">cancel</mat-icon>
        </mat-chip>
        <input
          #input
          [formControl]="inputFormControl"
          [matAutocomplete]="auto"
          [matChipInputFor]="chipList"
          [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
          (matChipInputTokenEnd)="add($event)"
        />
      </mat-chip-list>
      <mat-autocomplete #auto="matAutocomplete" (optionSelected)="selected($event)">
        <mat-option *ngFor="let item of filteredItems" [value]="item.key">
          {{ item.label }}
        </mat-option>
      </mat-autocomplete>
      <mat-error *ngIf="formControl.invalid">{{ getErrorMessage() }}</mat-error>
    </mat-form-field>
  `,
})
export class OnkaReferenceComponent extends OnkaInputComponent implements OnInit, AfterViewInit {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  inputFormControl = new FormControl();
  filteredItems: OnkaOption[];
  //selectedItems: OnkaOption[] = [];

  @ViewChild('input') input: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  _reference: OnkaReference;

  constructor(public formControl: FormControl, public pass: OnkaInputPass, public onkaService: OnkaService, private apiBusiness: ApiBusinessLogic) {
    super(formControl, pass, onkaService);
    this._reference = this.pass.column.reference;
  }

  ngOnInit(): void {
    console.log('a', this.pass.data);
  }

  ngAfterViewInit() {
    // this.formControl.valueChanges
    //   .pipe(
    //     tap(() => {
    //       console.log('val', this.formControl.value);
    //       if (!this.formControl.value) return;
    //       this.selectedItems = this.formControl.value.map((item, index) => {
    //         return {
    //           key: item.id,
    //           label: item.name,
    //         };
    //       });
    //     }),
    //   )
    //   .subscribe();
    this.inputFormControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => this.loadData()),
      )
      .subscribe();
    fromEvent(this.input.nativeElement, 'focus')
      .pipe(tap(() => this.loadData()))
      .subscribe();
  }

  getChips() {
    return this.formControl.value;
  }

  loadData() {
    var request = new ApiSearchRequest();
    request.pagination.page = 1;
    request.pagination.perPage = this._reference.pageSize;
    request.sort.field = this._reference.sortField;
    request.sort.order = (this._reference.sortDirection || 'asc').toUpperCase();
    request.filter[this._reference.filterField] = this.inputFormControl.value;
    return this.apiBusiness.search(this.pass.column.reference.reference, request).subscribe((data) => {
      this.filteredItems = data.value.map((x) => {
        var option: OnkaOption = {
          key: x.id,
          label: x.name,
        };
        return option;
      });
    });
  }

  add(event: MatChipInputEvent): void {
    console.log('val', this.formControl.value);

    // const input = event.input;
    // const value = event.value;
    // // Add our fruit
    // if ((value || '').trim()) {
    //   this.selectedItems.push(value.trim());
    // }
    // // Reset the input value
    // if (input) {
    //   input.value = '';
    // }
    // this.input.setValue(null);
  }

  remove(item: OnkaOption): void {
    const index = this.getChips().indexOf(item);

    if (index >= 0) {
      this.getChips().splice(index, 1);
      this.sync();
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    console.log('selected', event.option.value);
    console.log('selected', event.option.viewValue);
    this.getChips().push({
      key: event.option.value,
      label: event.option.viewValue,
    });
    this.input.nativeElement.value = '';
    this.inputFormControl.setValue(null);
    this.sync();
  }

  sync() {
    //this.formControl.setValue(this.selectedItems);
  }
}
