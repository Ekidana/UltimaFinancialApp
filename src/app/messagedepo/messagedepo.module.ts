import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessagedepoPageRoutingModule } from './messagedepo-routing.module';

import { MessagedepoPage } from './messagedepo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessagedepoPageRoutingModule
  ],
  declarations: [MessagedepoPage]
})
export class MessagedepoPageModule {}
