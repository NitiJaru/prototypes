import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dev2deliAPageRoutingModule } from './dev2deli-a-routing.module';

import { Dev2deliAPage } from './dev2deli-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Dev2deliAPageRoutingModule
  ],
  declarations: [Dev2deliAPage]
})
export class Dev2deliAPageModule {}
