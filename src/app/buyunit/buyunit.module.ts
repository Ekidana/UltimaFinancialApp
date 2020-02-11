import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyunitPageRoutingModule } from './buyunit-routing.module';

import { BuyunitPage } from './buyunit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BuyunitPageRoutingModule
  ],
  declarations: [BuyunitPage]
})
export class BuyunitPageModule {}
