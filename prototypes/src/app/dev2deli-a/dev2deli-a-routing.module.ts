import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dev2deliAPage } from './dev2deli-a.page';

const routes: Routes = [
  {
    path: '',
    component: Dev2deliAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dev2deliAPageRoutingModule {}
