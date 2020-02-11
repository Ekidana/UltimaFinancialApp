import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { User } from '../shared/models/users';
import { MenuController, ModalController, ToastController } from '@ionic/angular';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-signupprofile',
  templateUrl: './signupprofile.page.html',
  styleUrls: ['./signupprofile.page.scss'],
})
export class SignupprofilePage implements OnInit {
  signupprofileForm: FormGroup;
  user: User = new User();
  close: boolean = false;
  genderidentifier: string[];
  submitted: boolean;
  hide: boolean = false;
  nric: any;
  selfie: any;
  nricimageData: any;
  selfieimageData: any;
  userid: string;

  constructor(public menuController: MenuController, private authService: AuthService, private modalController: ModalController, private toastController: ToastController, public camera: Camera, public file: File, public emailComposer: EmailComposer) {
    this.genderidentifier = ['Male', 'Female'];
    this.signupprofileForm = new FormGroup({
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      nric: new FormControl('', [Validators.required]),
      gender: new FormControl('Male'),
      date: new FormControl('', [Validators.required]),
      userid: new FormControl('', [Validators.required]),
   });
  }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
  }

  dismiss() {
    this.modalController.dismiss();
  }

  signupprofile() {
    this.submitted = true;
    if (this.signupprofileForm.valid) {
      firebase.firestore().collection('users').where('userid', '==', this.signupprofileForm.value.userid).get().then(doc => {
        if (doc.empty) {
          firebase.firestore().collection('users').doc(this.user.email).get().then(async (docSnapshot) => {
            if (docSnapshot.exists) {
             alert("There is already a profile created with your email. Please contact the administrator for help.")
            }
            else {
              // Add a new document in collection "users"
              this.userid = this.signupprofileForm.value.userid;
              firebase.firestore().collection('UnitTrustAccount').doc(this.userid).set({
                interest: 0,
                userEmail: this.user.email,
                utAccountType: "",
                utAmount: "0",
                utID: this.signupprofileForm.value.userid,
                utName: ""
              }).then(() => {
                console.log("Account created")
              })
              firebase.firestore().collection("users").doc(this.user.email).set({
                fname: this.signupprofileForm.value.fname,
                lname: this.signupprofileForm.value.lname,
                nric: this.signupprofileForm.value.nric,
                gender: this.signupprofileForm.value.gender,
                email: this.user.email,
                dob: this.signupprofileForm.value.date,
                role: "User",
                datetimesignup: Date(),
                userid: this.signupprofileForm.value.userid,
                verified: "No",
                nricimage: "",
                selfieimage: ""
              }).then(function() {
                console.log("Document successfully written!");
              })
              .catch(function(error) {
                console.error("Error writing document: ", error);
              });
              const toast = await this.toastController.create({
                message: 'Profile created. Please verify your identity.',
                duration: 2000,
                position: 'top',
                color: 'secondary'
              });
              toast.present();
              this.hide = true;
            }
          });
        }
        else {
          alert("The User ID you inputted has been taken. Please choose another User ID.")
        }
      })
    }
  }

  takenric() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
      cameraDirection: 1
    }
    
    this.camera.getPicture().then((imageData) => {
      this.nricimageData = imageData
      let filename = imageData.substring(imageData.lastIndexOf('/') + 1);
      let path = imageData.substring(0, imageData.lastIndexOf('/') + 1);
      this.file.readAsDataURL(path,filename).then((base64data) => {
        this.nric = base64data;
      })
    });     
  }

  takeselfie() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
      cameraDirection: 1
    }
    
    this.camera.getPicture().then((imageData) => {
      this.selfieimageData = imageData
      let filename = imageData.substring(imageData.lastIndexOf('/') + 1);
      let path = imageData.substring(0, imageData.lastIndexOf('/') + 1);
      this.file.readAsDataURL(path,filename).then((base64data) => {
        this.selfie = base64data;
      })
    });     
  }

  submitpicture() {
    firebase.firestore().collection("users").doc(this.user.email).update({
      nricimage: this.nric,
      selfieimage: this.selfie
    }).then(function() {
      console.log("Images successfully added.!");
      alert("You have successfully completed profile sign up. You will receive an email when your identity is confirmed.")
      this.modalController.dismiss();
      this.authService.logout();
    })
    .catch(function(error) {
      console.error("Error adding Images: ", error);
    });
  }
}
