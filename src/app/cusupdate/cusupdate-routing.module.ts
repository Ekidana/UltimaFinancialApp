import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CusupdatePage } from './cusupdate.page';

const routes: Routes = [
  {
    path: '',
    component: CusupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CusupdatePageRoutingModule {}
