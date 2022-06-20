import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dev2deliCPageRoutingModule } from './dev2deli-c-routing.module';

import { Dev2deliCPage } from './dev2deli-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Dev2deliCPageRoutingModule
  ],
  declarations: [Dev2deliCPage]
})
export class Dev2deliCPageModule {}
