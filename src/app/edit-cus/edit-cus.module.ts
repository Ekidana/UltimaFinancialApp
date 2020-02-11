import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCusPageRoutingModule } from './edit-cus-routing.module';

import { EditCusPage } from './edit-cus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditCusPageRoutingModule
  ],
  declarations: [EditCusPage]
})
export class EditCusPageModule {}
