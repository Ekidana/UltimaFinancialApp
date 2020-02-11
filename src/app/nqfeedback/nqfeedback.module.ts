import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NqfeedbackPageRoutingModule } from './nqfeedback-routing.module';

import { NqfeedbackPage } from './nqfeedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NqfeedbackPageRoutingModule
  ],
  declarations: [NqfeedbackPage]
})
export class NqfeedbackPageModule {}
