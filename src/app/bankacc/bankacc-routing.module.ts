import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankaccPage } from './bankacc.page';

const routes: Routes = [
  {
    path: '',
    component: BankaccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankaccPageRoutingModule {}
