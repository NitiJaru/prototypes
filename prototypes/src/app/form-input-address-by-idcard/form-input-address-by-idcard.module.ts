import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormInputAddressByIdcardPageRoutingModule } from './form-input-address-by-idcard-routing.module';

import { FormInputAddressByIdcardPage } from './form-input-address-by-idcard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormInputAddressByIdcardPageRoutingModule
  ],
  declarations: [FormInputAddressByIdcardPage]
})
export class FormInputAddressByIdcardPageModule {}
