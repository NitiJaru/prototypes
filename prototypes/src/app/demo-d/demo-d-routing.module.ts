import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoDPage } from './demo-d.page';

const routes: Routes = [
  {
    path: '',
    component: DemoDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoDPageRoutingModule {}
