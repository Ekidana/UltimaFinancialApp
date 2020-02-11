import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminverifyidentityPage } from './adminverifyidentity.page';

const routes: Routes = [
  {
    path: '',
    component: AdminverifyidentityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminverifyidentityPageRoutingModule {}
