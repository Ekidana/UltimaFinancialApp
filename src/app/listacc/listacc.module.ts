import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaccPageRoutingModule } from './listacc-routing.module';

import { ListaccPage } from './listacc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaccPageRoutingModule
  ],
  declarations: [ListaccPage]
})
export class ListaccPageModule {}
