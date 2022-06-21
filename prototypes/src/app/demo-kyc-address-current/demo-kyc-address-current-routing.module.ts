import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoKycAddressCurrentPage } from './demo-kyc-address-current.page';

const routes: Routes = [
  {
    path: '',
    component: DemoKycAddressCurrentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoKycAddressCurrentPageRoutingModule {}
