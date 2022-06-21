import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoKycTelPage } from './demo-kyc-tel.page';

const routes: Routes = [
  {
    path: '',
    component: DemoKycTelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoKycTelPageRoutingModule {}
