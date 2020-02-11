import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TakeoutPage } from './takeout.page';

const routes: Routes = [
  {
    path: '',
    component: TakeoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakeoutPageRoutingModule {}
