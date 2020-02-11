import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUnittrustPage } from './add-unittrust.page';

const routes: Routes = [
  {
    path: '',
    component: AddUnittrustPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUnittrustPageRoutingModule {}
