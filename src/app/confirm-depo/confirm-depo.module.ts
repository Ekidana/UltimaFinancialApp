import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ConfirmDepoPageRoutingModule } from './confirm-depo-routing.module';

import { ConfirmDepoPage } from './confirm-depo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ConfirmDepoPageRoutingModule
  ],
  declarations: [ConfirmDepoPage]
})
export class ConfirmDepoPageModule {}
