import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormInputTelPageRoutingModule } from './form-input-tel-routing.module';

import { FormInputTelPage } from './form-input-tel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormInputTelPageRoutingModule
  ],
  declarations: [FormInputTelPage]
})
export class FormInputTelPageModule {}
