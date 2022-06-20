import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemoInputPageRoutingModule } from './demo-input-routing.module';

import { DemoInputPage } from './demo-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DemoInputPageRoutingModule
  ],
  declarations: [DemoInputPage]
})
export class DemoInputPageModule {}
