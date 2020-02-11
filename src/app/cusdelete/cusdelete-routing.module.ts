import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CusdeletePage } from './cusdelete.page';

const routes: Routes = [
  {
    path: '',
    component: CusdeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CusdeletePageRoutingModule {}
