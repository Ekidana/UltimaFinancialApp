import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BankaccPageRoutingModule } from './bankacc-routing.module';

import { BankaccPage } from './bankacc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankaccPageRoutingModule
  ],
  declarations: [BankaccPage]
})
export class BankaccPageModule {}
