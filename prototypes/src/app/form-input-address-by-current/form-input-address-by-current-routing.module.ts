import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormInputAddressByCurrentPage } from './form-input-address-by-current.page';

const routes: Routes = [
  {
    path: '',
    component: FormInputAddressByCurrentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormInputAddressByCurrentPageRoutingModule {}
