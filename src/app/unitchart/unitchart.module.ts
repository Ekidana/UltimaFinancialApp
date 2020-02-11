import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnitchartPageRoutingModule } from './unitchart-routing.module';

import { UnitchartPage } from './unitchart.page';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsModule,
    UnitchartPageRoutingModule
  ],
  declarations: [UnitchartPage]
})
export class UnitchartPageModule {}
