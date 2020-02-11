import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReachTargetPage } from './reach-target.page';

const routes: Routes = [
  {
    path: '',
    component: ReachTargetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReachTargetPageRoutingModule {}
