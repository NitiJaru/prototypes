import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemoKycAddressCurrentPageRoutingModule } from './demo-kyc-address-current-routing.module';

import { DemoKycAddressCurrentPage } from './demo-kyc-address-current.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DemoKycAddressCurrentPageRoutingModule
  ],
  declarations: [DemoKycAddressCurrentPage]
})
export class DemoKycAddressCurrentPageModule {}
