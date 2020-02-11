import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminverifyidentitydetailsPage } from './adminverifyidentitydetails.page';

const routes: Routes = [
  {
    path: '',
    component: AdminverifyidentitydetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminverifyidentitydetailsPageRoutingModule {}
