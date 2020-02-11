import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateBidpricePage } from './update-bidprice.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateBidpricePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBidpricePageRoutingModule {}
