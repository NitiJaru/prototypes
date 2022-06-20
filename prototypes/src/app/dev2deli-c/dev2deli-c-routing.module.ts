import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dev2deliCPage } from './dev2deli-c.page';

const routes: Routes = [
  {
    path: '',
    component: Dev2deliCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dev2deliCPageRoutingModule {}
