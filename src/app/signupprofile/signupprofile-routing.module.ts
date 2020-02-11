import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupprofilePage } from './signupprofile.page';

const routes: Routes = [
  {
    path: '',
    component: SignupprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupprofilePageRoutingModule {}
