import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseCalculatorPageRoutingModule } from './expense-calculator-routing.module';

import { ExpenseCalculatorPage } from './expense-calculator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpenseCalculatorPageRoutingModule
  ],
  declarations: [ExpenseCalculatorPage]
})
export class ExpenseCalculatorPageModule {}
