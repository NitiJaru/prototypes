import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemoKycTelPageRoutingModule } from './demo-kyc-tel-routing.module';

import { DemoKycTelPage } from './demo-kyc-tel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DemoKycTelPageRoutingModule
  ],
  declarations: [DemoKycTelPage]
})
export class DemoKycTelPageModule {}
