import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminverifyidentityPageRoutingModule } from './adminverifyidentity-routing.module';

import { AdminverifyidentityPage } from './adminverifyidentity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminverifyidentityPageRoutingModule
  ],
  declarations: [AdminverifyidentityPage]
})
export class AdminverifyidentityPageModule {}
