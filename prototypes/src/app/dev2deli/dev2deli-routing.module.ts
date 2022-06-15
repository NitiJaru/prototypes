import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dev2deliPage } from './dev2deli.page';

const routes: Routes = [
  {
    path: '',
    component: Dev2deliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dev2deliPageRoutingModule {}
