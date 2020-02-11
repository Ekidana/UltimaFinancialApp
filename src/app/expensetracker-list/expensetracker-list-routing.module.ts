import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpensetrackerListPage } from './expensetracker-list.page';

const routes: Routes = [
  {
    path: '',
    component: ExpensetrackerListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpensetrackerListPageRoutingModule {}
