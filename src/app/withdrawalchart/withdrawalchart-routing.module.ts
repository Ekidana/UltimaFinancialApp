import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithdrawalchartPage } from './withdrawalchart.page';

const routes: Routes = [
  {
    path: '',
    component: WithdrawalchartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithdrawalchartPageRoutingModule {}
