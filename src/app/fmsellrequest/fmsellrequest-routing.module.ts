import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FmsellrequestPage } from './fmsellrequest.page';

const routes: Routes = [
  {
    path: '',
    component: FmsellrequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FmsellrequestPageRoutingModule {}
