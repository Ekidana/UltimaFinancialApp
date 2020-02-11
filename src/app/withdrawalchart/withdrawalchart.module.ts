import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithdrawalchartPageRoutingModule } from './withdrawalchart-routing.module';

import { WithdrawalchartPage } from './withdrawalchart.page';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsModule,
    WithdrawalchartPageRoutingModule
  ],
  declarations: [WithdrawalchartPage]
})
export class WithdrawalchartPageModule {}
