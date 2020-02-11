import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CusverifyPage } from './cusverify.page';

const routes: Routes = [
  {
    path: '',
    component: CusverifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CusverifyPageRoutingModule {}
