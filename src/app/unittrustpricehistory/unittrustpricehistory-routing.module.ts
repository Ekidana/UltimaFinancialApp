import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnittrustpricehistoryPage } from './unittrustpricehistory.page';

const routes: Routes = [
  {
    path: '',
    component: UnittrustpricehistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnittrustpricehistoryPageRoutingModule {}
