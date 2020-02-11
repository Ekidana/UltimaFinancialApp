import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnittrustPage } from './unittrust.page';

const routes: Routes = [
  {
    path: '',
    component: UnittrustPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnittrustPageRoutingModule {}
