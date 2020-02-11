import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TakeoutPageRoutingModule } from './takeout-routing.module';

import { TakeoutPage } from './takeout.page';
import { FeedbackPage } from '../feedback/feedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TakeoutPageRoutingModule
  ],
  declarations: [TakeoutPage]
})
export class TakeoutPageModule {}
