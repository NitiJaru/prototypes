import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemoKycPageRoutingModule } from './demo-kyc-routing.module';

import { DemoKycPage } from './demo-kyc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DemoKycPageRoutingModule
  ],
  declarations: [DemoKycPage]
})
export class DemoKycPageModule {}
