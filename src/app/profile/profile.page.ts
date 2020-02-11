import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/users';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { ModalController } from '@ionic/angular';
import { UpdateprofilePage } from '../updateprofile/updateprofile.page';
import { ChangepasswordPage } from '../changepassword/changepassword.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: User = new User();
  fname: string = "";
  lname: string = "";
  nric: string = "";
  role: string = "";
  gender: string = "";
  userid: string = "";
  date: Date;
  verified: string;
  verify: boolean = false;
  
  constructor(private authService: AuthService, private router: Router, private modalController: ModalController) {}

  ngOnInit() {
    this.fname = "";
    this.lname = "";
    this.nric = "";
    this.role = "";
    this.gender = "";
    this.userid = "";
    this.user = this.authService.getCurrentUser();
    this.getProfile();
  }

  ionViewDidEnter() {
    this.user = this.authService.getCurrentUser();
    this.getProfile();
  }

  dismiss() {
    this.modalController.dismiss();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  getProfile() {        
    firebase.firestore().collection('users').doc(this.user.email).get().then((docSnapshot) => {
      this.fname = docSnapshot.data().fname;
      this.lname = docSnapshot.data().lname;
      this.nric = docSnapshot.data().nric;
      this.gender = docSnapshot.data().gender
      this.role = docSnapshot.data().role;
      this.date = docSnapshot.data().dob;
      this.userid = docSnapshot.data().userid;
      this.verified = docSnapshot.data().verified
    }).then(()=> {
      if (this.verified == "Pending") {
        console.log("Pending")
        this.verify = true
      }
    });
    
  }

  async goToUpdateProfile() {
    const modal = await this.modalController.create({
      component: UpdateprofilePage
    });
    return await modal.present();
  }

  async gotoChangePassword() {
    const modal = await this.modalController.create({
      component: ChangepasswordPage
    });
    return await modal.present();
  }
}
