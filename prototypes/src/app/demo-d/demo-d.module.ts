import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemoDPageRoutingModule } from './demo-d-routing.module';

import { DemoDPage } from './demo-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DemoDPageRoutingModule
  ],
  declarations: [DemoDPage]
})
export class DemoDPageModule {}
