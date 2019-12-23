import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalListPageRoutingModule } from './cal-list-routing.module';

import { CalListPage } from './cal-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalListPageRoutingModule
  ],
  declarations: [CalListPage]
})
export class CalListPageModule {}
