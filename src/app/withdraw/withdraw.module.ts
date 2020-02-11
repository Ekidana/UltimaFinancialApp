import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
// import {TakeoutPage} from 'src/app/modals/takeout/takeout.page'

import { WithdrawPageRoutingModule } from './withdraw-routing.module';

import { WithdrawPage } from './withdraw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithdrawPageRoutingModule
  ],
  declarations: [WithdrawPage],
  entryComponents: []
  // declarations: [WithdrawPage, TakeoutPage],
  // entryComponents: [TakeoutPage]
})
export class WithdrawPageModule {}
