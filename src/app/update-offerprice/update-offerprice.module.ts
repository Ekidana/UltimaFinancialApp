import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateOfferpricePageRoutingModule } from './update-offerprice-routing.module';

import { UpdateOfferpricePage } from './update-offerprice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateOfferpricePageRoutingModule
  ],
  declarations: [UpdateOfferpricePage]
})
export class UpdateOfferpricePageModule {}
