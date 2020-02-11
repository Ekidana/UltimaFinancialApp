import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FmsellrequestPageRoutingModule } from './fmsellrequest-routing.module';

import { FmsellrequestPage } from './fmsellrequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FmsellrequestPageRoutingModule
  ],
  declarations: [FmsellrequestPage]
})
export class FmsellrequestPageModule {}
