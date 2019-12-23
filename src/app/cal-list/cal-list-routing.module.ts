import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalListPage } from './cal-list.page';

const routes: Routes = [
  {
    path: '',
    component: CalListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalListPageRoutingModule {}
