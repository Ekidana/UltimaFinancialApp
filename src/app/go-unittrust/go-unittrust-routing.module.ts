import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoUnittrustPage } from './go-unittrust.page';

const routes: Routes = [
  {
    path: '',
    component: GoUnittrustPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoUnittrustPageRoutingModule {}
