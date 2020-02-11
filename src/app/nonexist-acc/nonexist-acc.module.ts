import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NonexistAccPageRoutingModule } from './nonexist-acc-routing.module';

import { NonexistAccPage } from './nonexist-acc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NonexistAccPageRoutingModule
  ],
  declarations: [NonexistAccPage]
})
export class NonexistAccPageModule {}
