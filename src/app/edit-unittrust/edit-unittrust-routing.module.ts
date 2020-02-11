import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditUnittrustPage } from './edit-unittrust.page';

const routes: Routes = [
  {
    path: '',
    component: EditUnittrustPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditUnittrustPageRoutingModule {}
