import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemoAPageRoutingModule } from './demo-a-routing.module';

import { DemoAPage } from './demo-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DemoAPageRoutingModule
  ],
  declarations: [DemoAPage]
})
export class DemoAPageModule {}
