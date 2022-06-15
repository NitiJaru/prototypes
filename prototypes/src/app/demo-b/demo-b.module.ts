import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemoBPageRoutingModule } from './demo-b-routing.module';

import { DemoBPage } from './demo-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DemoBPageRoutingModule
  ],
  declarations: [DemoBPage]
})
export class DemoBPageModule {}
