import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminInvestmentPage } from './admin-investment.page';

const routes: Routes = [
  {
    path: '',
    component: AdminInvestmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminInvestmentPageRoutingModule {}
