import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dev2deliBPageRoutingModule } from './dev2deli-b-routing.module';

import { Dev2deliBPage } from './dev2deli-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Dev2deliBPageRoutingModule
  ],
  declarations: [Dev2deliBPage]
})
export class Dev2deliBPageModule {}
