import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoKycAddressIdcardPage } from './demo-kyc-address-idcard.page';

const routes: Routes = [
  {
    path: '',
    component: DemoKycAddressIdcardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoKycAddressIdcardPageRoutingModule {}
