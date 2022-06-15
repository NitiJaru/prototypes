import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoAPage } from './demo-a.page';

const routes: Routes = [
  {
    path: '',
    component: DemoAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoAPageRoutingModule {}
