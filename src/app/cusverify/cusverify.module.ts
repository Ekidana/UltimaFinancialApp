import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CusverifyPageRoutingModule } from './cusverify-routing.module';

import { CusverifyPage } from './cusverify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CusverifyPageRoutingModule
  ],
  declarations: [CusverifyPage]
})
export class CusverifyPageModule {}
