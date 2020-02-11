import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnitchartPage } from './unitchart.page';


const routes: Routes = [
  {
    path: '',
    component: UnitchartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitchartPageRoutingModule {}
