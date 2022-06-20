import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dev2deliBPage } from './dev2deli-b.page';

const routes: Routes = [
  {
    path: '',
    component: Dev2deliBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dev2deliBPageRoutingModule {}
