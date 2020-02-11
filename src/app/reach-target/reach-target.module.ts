import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReachTargetPageRoutingModule } from './reach-target-routing.module';

import { ReachTargetPage } from './reach-target.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReachTargetPageRoutingModule
  ],
  declarations: [ReachTargetPage]
})
export class ReachTargetPageModule {}
