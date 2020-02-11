import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FmbuypagePage } from './fmbuypage.page';

const routes: Routes = [
  {
    path: '',
    component: FmbuypagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FmbuypagePageRoutingModule {}
