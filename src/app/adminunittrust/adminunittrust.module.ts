import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminunittrustPageRoutingModule } from './adminunittrust-routing.module';

import { AdminunittrustPage } from './adminunittrust.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminunittrustPageRoutingModule
  ],
  declarations: [AdminunittrustPage]
})
export class AdminunittrustPageModule {}
