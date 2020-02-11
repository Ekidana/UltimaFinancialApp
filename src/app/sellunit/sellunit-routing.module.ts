import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellunitPage } from './sellunit.page';

const routes: Routes = [
  {
    path: '',
    component: SellunitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellunitPageRoutingModule {}
