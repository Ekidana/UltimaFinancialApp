import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NqfeedbackPage } from './nqfeedback.page';

const routes: Routes = [
  {
    path: '',
    component: NqfeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NqfeedbackPageRoutingModule {}
