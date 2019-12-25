import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { SignupPageModule } from '../signup/signup.module';
import { ForgetPasswordPageModule } from '../forget-password/forget-password.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    SignupPageModule,
    ForgetPasswordPageModule,
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
