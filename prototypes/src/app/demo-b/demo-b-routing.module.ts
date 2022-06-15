import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoBPage } from './demo-b.page';

const routes: Routes = [
  {
    path: '',
    component: DemoBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoBPageRoutingModule {}
