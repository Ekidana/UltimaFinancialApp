import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FmbuypagePageRoutingModule } from './fmbuypage-routing.module';

import { FmbuypagePage } from './fmbuypage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FmbuypagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FmbuypagePage]
})
export class FmbuypagePageModule {}
