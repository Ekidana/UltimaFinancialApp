import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminunittrustPage } from './adminunittrust.page';

const routes: Routes = [
  {
    path: '',
    component: AdminunittrustPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminunittrustPageRoutingModule {}
