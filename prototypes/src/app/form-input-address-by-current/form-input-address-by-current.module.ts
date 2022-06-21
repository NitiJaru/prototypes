import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormInputAddressByCurrentPageRoutingModule } from './form-input-address-by-current-routing.module';

import { FormInputAddressByCurrentPage } from './form-input-address-by-current.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormInputAddressByCurrentPageRoutingModule
  ],
  declarations: [FormInputAddressByCurrentPage]
})
export class FormInputAddressByCurrentPageModule {}
