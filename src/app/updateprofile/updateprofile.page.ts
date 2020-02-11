import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/models/users';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { Information } from '../shared/models/information';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.page.html',
  styleUrls: ['./updateprofile.page.scss'],
})
export class UpdateprofilePage implements OnInit {
  updateprofileForm: FormGroup;
  genderidentifier: string[];
  user: User = new User();
  fname: string = "";
  lname: string = "";
  nric: string = "";
  gender: string = "";
  email: string = "";
  newemail: string = "";
  currentemail : string = "";
  date: Date;
  verified: string;
  datetimesignup: Date;
  role: string;
  userid: string;
  information: Information[];
  submitted: boolean;
  selfieimage: any;
  nricimage: any;

  constructor(private authService: AuthService, private modalController: ModalController, private router: Router, private toastController: ToastController) {
    this.genderidentifier = ['Male', 'Female'];
      this.updateprofileForm = new FormGroup({
        email: new FormControl(this.email, [Validators.required, Validators.email]),
        fname: new FormControl(this.fname, [Validators.required]),
        lname: new FormControl( this.lname, [Validators.required]),
        nric: new FormControl(this.nric, [Validators.required]),
        gender: new FormControl(this.gender),
        date: new FormControl(this.date, [Validators.required])
      });
  }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    firebase.firestore().collection('users').doc(this.user.email).get().then((docSnapshot) => {
      this.email = docSnapshot.data().email;
      this.currentemail = docSnapshot.data().email;
      this.fname = docSnapshot.data().fname;
      this.lname = docSnapshot.data().lname;
      this.nric = docSnapshot.data().nric;
      this.gender = docSnapshot.data().gender;
      this.date = docSnapshot.data().dob;
      this.datetimesignup = docSnapshot.data().datetimesignup;
      this.role = docSnapshot.data().role;
      this.userid = docSnapshot.data().userid;
      this.selfieimage = docSnapshot.data().selfieimage,
      this.nricimage = docSnapshot.data().nricimage

      this.verified = docSnapshot.data().verified;

      this.genderidentifier = ['Male', 'Female'];
      this.updateprofileForm = new FormGroup({
        email: new FormControl(this.email, [Validators.required, Validators.email]),
        fname: new FormControl(this.fname, [Validators.required]),
        lname: new FormControl( this.lname, [Validators.required]),
        nric: new FormControl(this.nric, [Validators.required]),
        gender: new FormControl(this.gender),
        date: new FormControl(this.date, [Validators.required])
      });
    });
  }

  dismiss() {
    this.modalController.dismiss();
    //window.location.reload();
  }

  async updateProfile() {
    this.submitted = true;
    this.newemail = this.updateprofileForm.value.email;
    this.newemail = this.newemail.toLowerCase();
    console.log(this.newemail)
    if (this.updateprofileForm.valid) {
      if (this.updateprofileForm.value.email === this.currentemail) {
        console.log("email is same")
        firebase.auth().currentUser.updateEmail(this.updateprofileForm.value.email).then(() => {
          firebase.firestore().collection('users').doc(this.updateprofileForm.value.email).update({
            fname: this.updateprofileForm.value.fname,
            lname: this.updateprofileForm.value.lname,
            nric: this.updateprofileForm.value.nric,
            gender: this.updateprofileForm.value.gender,
            dob: this.updateprofileForm.value.date,
            email: this.updateprofileForm.value.email,
            role: this.role,
            userid: this.userid,
            datetimesignup: this.datetimesignup,
            verified: this.verified
          }).then(() => {
            console.log("Update Profile success")
          });
        });
        const toast = await this.toastController.create({
          message: 'Profile update successful. Update may take a while to reflect.',
          duration: 2000,
          position: 'top',
          color: 'secondary'
        });
        toast.present();
        this.dismiss();
        this.router.navigate(['/home']);
      }
      else {
        firebase.firestore().collection('users').where('email', '==', this.newemail).get().then(async doc => {
          if (doc.empty) {
            firebase.auth().currentUser.updateEmail(this.newemail).then(() => {
              firebase.firestore().collection('users').doc(this.currentemail).delete().then(() => {
                console.log("Initial Profile deleted.")
              });
              firebase.firestore().collection('users').doc(this.newemail).set({
                fname: this.updateprofileForm.value.fname,
                lname: this.updateprofileForm.value.lname,
                nric: this.updateprofileForm.value.nric,
                gender: this.updateprofileForm.value.gender,
                dob: this.updateprofileForm.value.date,
                email: this.newemail,
                role: this.role,
                userid: this.userid,
                datetimesignup: this.datetimesignup,
                verified: this.verified,
                selfieimage: this.selfieimage,
                nricimage: this.nricimage
              }).then(() => {
                console.log("Update Profile success")
              });
            });
            const toast = await this.toastController.create({
              message: 'Profile update successful. As you changed your email, please login again.',
              duration: 2000,
              position: 'top',
              color: 'secondary'
            });
            toast.present();
            this.dismiss();
            this.authService.logout();
            this.router.navigate(['/home']);
          }
          else {
            alert("The new email you chose has been taken. Please choose another email.")
          }
        });
      }
    }
  }
}
