import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { UpdateprofilePageModule } from '../updateprofile/updateprofile.module';
import { ChangepasswordPageModule } from '../changepassword/changepassword.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    UpdateprofilePageModule,
    ChangepasswordPageModule
    
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
