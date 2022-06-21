import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormInputPageRoutingModule } from './form-input-routing.module';

import { FormInputPage } from './form-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormInputPageRoutingModule
  ],
  declarations: [FormInputPage]
})
export class FormInputPageModule {}
