import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmDepoPage } from './confirm-depo.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmDepoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmDepoPageRoutingModule {}
