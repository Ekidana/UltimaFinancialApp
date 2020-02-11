import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminverifyidentitydetailsPageRoutingModule } from './adminverifyidentitydetails-routing.module';

import { AdminverifyidentitydetailsPage } from './adminverifyidentitydetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminverifyidentitydetailsPageRoutingModule
  ],
  declarations: [AdminverifyidentitydetailsPage]
})
export class AdminverifyidentitydetailsPageModule {}
