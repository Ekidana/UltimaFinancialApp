import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaccPage } from './listacc.page';

const routes: Routes = [
  {
    path: '',
    component: ListaccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaccPageRoutingModule {}
