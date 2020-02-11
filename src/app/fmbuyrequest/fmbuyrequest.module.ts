import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FmbuyrequestPageRoutingModule } from './fmbuyrequest-routing.module';

import { FmbuyrequestPage } from './fmbuyrequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FmbuyrequestPageRoutingModule
  ],
  declarations: [FmbuyrequestPage]
})
export class FmbuyrequestPageModule {}
