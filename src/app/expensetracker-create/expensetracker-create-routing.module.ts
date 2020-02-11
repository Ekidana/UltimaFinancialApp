import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpensetrackerCreatePage } from './expensetracker-create.page';

const routes: Routes = [
  {
    path: '',
    component: ExpensetrackerCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpensetrackerCreatePageRoutingModule {}
