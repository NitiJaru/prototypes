import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CdexpAPageRoutingModule } from './cdexp-a-routing.module';

import { CdexpAPage } from './cdexp-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CdexpAPageRoutingModule
  ],
  declarations: [CdexpAPage]
})
export class CdexpAPageModule {}
