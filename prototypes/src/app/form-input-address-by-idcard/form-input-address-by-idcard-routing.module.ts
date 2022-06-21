import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormInputAddressByIdcardPage } from './form-input-address-by-idcard.page';

const routes: Routes = [
  {
    path: '',
    component: FormInputAddressByIdcardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormInputAddressByIdcardPageRoutingModule {}
