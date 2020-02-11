import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YesfeedbackPageRoutingModule } from './yesfeedback-routing.module';

import { YesfeedbackPage } from './yesfeedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    YesfeedbackPageRoutingModule
  ],
  declarations: [YesfeedbackPage]
})
export class YesfeedbackPageModule {}
