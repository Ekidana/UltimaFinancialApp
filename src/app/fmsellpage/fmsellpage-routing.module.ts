import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FmsellpagePage } from './fmsellpage.page';

const routes: Routes = [
  {
    path: '',
    component: FmsellpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FmsellpagePageRoutingModule {}
