import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseTrackClacPage } from './expense-track-clac.page';

const routes: Routes = [
  {
    path: '',
    component: ExpenseTrackClacPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseTrackClacPageRoutingModule {}
