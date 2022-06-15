import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoCPage } from './demo-c.page';

const routes: Routes = [
  {
    path: '',
    component: DemoCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoCPageRoutingModule {}
