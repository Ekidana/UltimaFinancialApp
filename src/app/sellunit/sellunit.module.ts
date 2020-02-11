import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellunitPageRoutingModule } from './sellunit-routing.module';

import { SellunitPage } from './sellunit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellunitPageRoutingModule
  ],
  declarations: [SellunitPage]
})
export class SellunitPageModule {}
