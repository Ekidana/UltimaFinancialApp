import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyunitPage } from './buyunit.page';

const routes: Routes = [
  {
    path: '',
    component: BuyunitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyunitPageRoutingModule {}
