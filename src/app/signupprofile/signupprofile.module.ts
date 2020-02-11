import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupprofilePageRoutingModule } from './signupprofile-routing.module';

import { SignupprofilePage } from './signupprofile.page';
import { VerifyidentityPageModule } from '../verifyidentity/verifyidentity.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupprofilePageRoutingModule,
    ReactiveFormsModule,
    VerifyidentityPageModule
  ],
  declarations: [SignupprofilePage]
})
export class SignupprofilePageModule {}
