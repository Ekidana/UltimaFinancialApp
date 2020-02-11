import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCusPage } from './edit-cus.page';

const routes: Routes = [
  {
    path: '',
    component: EditCusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCusPageRoutingModule {}
