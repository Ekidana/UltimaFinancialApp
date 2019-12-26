import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseTrackClacPageRoutingModule } from './expense-track-clac-routing.module';

import { ExpenseTrackClacPage } from './expense-track-clac.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpenseTrackClacPageRoutingModule
  ],
  declarations: [ExpenseTrackClacPage]
})
export class ExpenseTrackClacPageModule {}
