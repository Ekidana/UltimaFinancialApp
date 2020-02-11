import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditUnittrustPageRoutingModule } from './edit-unittrust-routing.module';

import { EditUnittrustPage } from './edit-unittrust.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditUnittrustPageRoutingModule
  ],
  declarations: [EditUnittrustPage]
})
export class EditUnittrustPageModule {}
