import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpensetrackerEditPageRoutingModule } from './expensetracker-edit-routing.module';

import { ExpensetrackerEditPage } from './expensetracker-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ExpensetrackerEditPageRoutingModule
  ],
  declarations: [ExpensetrackerEditPage]
})
export class ExpensetrackerEditPageModule {}
