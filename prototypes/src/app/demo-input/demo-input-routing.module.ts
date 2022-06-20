import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoInputPage } from './demo-input.page';

const routes: Routes = [
  {
    path: '',
    component: DemoInputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoInputPageRoutingModule {}
