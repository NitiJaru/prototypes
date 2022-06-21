import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoKycPage } from './demo-kyc.page';

const routes: Routes = [
  {
    path: '',
    component: DemoKycPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoKycPageRoutingModule {}
