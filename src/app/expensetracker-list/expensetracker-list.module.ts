import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpensetrackerListPageRoutingModule } from './expensetracker-list-routing.module';

import { ExpensetrackerListPage } from './expensetracker-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpensetrackerListPageRoutingModule
  ],
  declarations: [ExpensetrackerListPage]
})
export class ExpensetrackerListPageModule {}
