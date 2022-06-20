import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CdexpBPageRoutingModule } from './cdexp-b-routing.module';

import { CdexpBPage } from './cdexp-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CdexpBPageRoutingModule
  ],
  declarations: [CdexpBPage]
})
export class CdexpBPageModule {}
