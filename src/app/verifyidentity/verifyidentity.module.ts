import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyidentityPageRoutingModule } from './verifyidentity-routing.module';

import { VerifyidentityPage } from './verifyidentity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyidentityPageRoutingModule
  ],
  declarations: [VerifyidentityPage]
})
export class VerifyidentityPageModule {}
