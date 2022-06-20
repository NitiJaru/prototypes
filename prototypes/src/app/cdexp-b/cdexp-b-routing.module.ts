import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdexpBPage } from './cdexp-b.page';

const routes: Routes = [
  {
    path: '',
    component: CdexpBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdexpBPageRoutingModule {}
