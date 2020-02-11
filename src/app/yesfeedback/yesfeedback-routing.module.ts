import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YesfeedbackPage } from './yesfeedback.page';

const routes: Routes = [
  {
    path: '',
    component: YesfeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YesfeedbackPageRoutingModule {}
