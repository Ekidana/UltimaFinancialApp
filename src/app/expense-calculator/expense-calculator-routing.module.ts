import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseCalculatorPage } from './expense-calculator.page';

const routes: Routes = [
  {
    path: '',
    component: ExpenseCalculatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseCalculatorPageRoutingModule {}
