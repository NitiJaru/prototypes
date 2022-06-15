import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dev2deliPageRoutingModule } from './dev2deli-routing.module';

import { Dev2deliPage } from './dev2deli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Dev2deliPageRoutingModule
  ],
  declarations: [Dev2deliPage]
})
export class Dev2deliPageModule {}
