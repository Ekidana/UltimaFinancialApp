import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProcessaccPageRoutingModule } from './processacc-routing.module';

import { ProcessaccPage } from './processacc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProcessaccPageRoutingModule
  ],
  declarations: [ProcessaccPage]
})
export class ProcessaccPageModule {}
