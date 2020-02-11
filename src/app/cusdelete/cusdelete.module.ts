import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CusdeletePageRoutingModule } from './cusdelete-routing.module';

import { CusdeletePage } from './cusdelete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CusdeletePageRoutingModule
  ],
  declarations: [CusdeletePage]
})
export class CusdeletePageModule {}
