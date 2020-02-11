import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FmsellpagePageRoutingModule } from './fmsellpage-routing.module';

import { FmsellpagePage } from './fmsellpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FmsellpagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FmsellpagePage]
})
export class FmsellpagePageModule {}
