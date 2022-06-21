import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemoKycAddressIdcardPageRoutingModule } from './demo-kyc-address-idcard-routing.module';

import { DemoKycAddressIdcardPage } from './demo-kyc-address-idcard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DemoKycAddressIdcardPageRoutingModule
  ],
  declarations: [DemoKycAddressIdcardPage]
})
export class DemoKycAddressIdcardPageModule {}
