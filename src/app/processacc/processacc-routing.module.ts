import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcessaccPage } from './processacc.page';

const routes: Routes = [
  {
    path: '',
    component: ProcessaccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcessaccPageRoutingModule {}
