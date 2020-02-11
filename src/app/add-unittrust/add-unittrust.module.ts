import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddUnittrustPageRoutingModule } from './add-unittrust-routing.module';

import { AddUnittrustPage } from './add-unittrust.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddUnittrustPageRoutingModule
  ],
  declarations: [AddUnittrustPage]
})
export class AddUnittrustPageModule {}
