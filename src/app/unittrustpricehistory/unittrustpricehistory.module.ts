import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnittrustpricehistoryPageRoutingModule } from './unittrustpricehistory-routing.module';

import { UnittrustpricehistoryPage } from './unittrustpricehistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnittrustpricehistoryPageRoutingModule
  ],
  declarations: [UnittrustpricehistoryPage]
})
export class UnittrustpricehistoryPageModule {}
