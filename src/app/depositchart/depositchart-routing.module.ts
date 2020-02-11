import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepositchartPage } from './depositchart.page';

const routes: Routes = [
  {
    path: '',
    component: DepositchartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositchartPageRoutingModule {}
