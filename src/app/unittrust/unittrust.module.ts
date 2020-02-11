import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnittrustPageRoutingModule } from './unittrust-routing.module';

import { UnittrustPage } from './unittrust.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnittrustPageRoutingModule
  ],
  declarations: [UnittrustPage]
})
export class UnittrustPageModule {}
