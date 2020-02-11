import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoUnittrustPageRoutingModule } from './go-unittrust-routing.module';

import { GoUnittrustPage } from './go-unittrust.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GoUnittrustPageRoutingModule
  ],
  declarations: [GoUnittrustPage]
})
export class GoUnittrustPageModule {}
