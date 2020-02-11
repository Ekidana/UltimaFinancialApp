import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { ModalController, ToastController } from '@ionic/angular';
import { User } from '../shared/models/users';
import * as firebase from 'firebase';
import { ifError } from 'assert';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {
  user: User = new User();
  changepasswordForm: FormGroup;
  submitted: boolean;
  password: string;

  constructor(private authService: AuthService, private modalController: ModalController, private toastController: ToastController,) {
    this.changepasswordForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      npassword: new FormControl('', [Validators.required]),
      rnpassword: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    this.password = this.user.password
    console.log(this.password)
  }

  dismiss() {
    this.modalController.dismiss();
  }

  changepassword() {
    var user = firebase.auth().currentUser;
    this.submitted = true;
    if (this.changepasswordForm.valid) {
      if (this.changepasswordForm.value.npassword === this.changepasswordForm.value.rnpassword) {
        const credential = firebase.auth.EmailAuthProvider.credential(
          user.email, 
          this.changepasswordForm.value.password
        );
        user.reauthenticateWithCredential(credential).then(() => {
          user.updatePassword(this.changepasswordForm.value.npassword).then(function() {
            console.log("Successful")
            alert("Password update successful.");
            })
        }).catch(function(error){
          alert("Your password is incorrect. Try again.") //current password incorrect
        })
      }
      else {
        alert("Your passwords do not match. Try again.") //both new passwords do not match
      }
      this.dismiss();
    }
  }

}
