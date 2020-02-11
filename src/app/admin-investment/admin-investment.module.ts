import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminInvestmentPageRoutingModule } from './admin-investment-routing.module';

import { AdminInvestmentPage } from './admin-investment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminInvestmentPageRoutingModule
  ],
  declarations: [AdminInvestmentPage]
})
export class AdminInvestmentPageModule {}
