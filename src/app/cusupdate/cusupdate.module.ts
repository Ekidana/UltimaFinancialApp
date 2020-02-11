import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CusupdatePageRoutingModule } from './cusupdate-routing.module';

import { CusupdatePage } from './cusupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CusupdatePageRoutingModule
  ],
  declarations: [CusupdatePage]
})
export class CusupdatePageModule {}
