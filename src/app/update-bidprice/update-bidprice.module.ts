import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBidpricePageRoutingModule } from './update-bidprice-routing.module';

import { UpdateBidpricePage } from './update-bidprice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UpdateBidpricePageRoutingModule
  ],
  declarations: [UpdateBidpricePage]
})
export class UpdateBidpricePageModule {}
