import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormInputTelPage } from './form-input-tel.page';

const routes: Routes = [
  {
    path: '',
    component: FormInputTelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormInputTelPageRoutingModule {}
