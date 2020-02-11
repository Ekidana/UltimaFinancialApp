import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepositchartPageRoutingModule } from './depositchart-routing.module';

import { DepositchartPage } from './depositchart.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsModule,
    DepositchartPageRoutingModule
  ],
  declarations: [DepositchartPage]
})
export class DepositchartPageModule {}
