import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { ToastController, ModalController } from '@ionic/angular';
import { FirebaseProfileInfoAddService } from '../shared/services/firebase-profile-info-add.service';
import { Information } from '../shared/models/information';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;
  signupError: string;


  constructor(
    private authService: AuthService,
    private toastController: ToastController,
    private modalController: ModalController,
    private informationService: FirebaseProfileInfoAddService,) {
    this.signupForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      name: new FormControl(''),
      id_num: new FormControl('')
    });
  }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

  signup() {
    this.authService.signup(this.signupForm.value.email, this.signupForm.value.password,).then(
        async () => {
          const toast = await this.toastController.create({
            message: 'Signup successful. Auto logged in as ' + this.signupForm.value.email,
            duration: 2000,
            position: 'top',
            color: 'secondary'
          });
          toast.present();
          this.dismiss();
          this.informationService.add(this.signupForm.value.name, this.signupForm.value.id_num)
        }
      )
    .catch(
      error => this.signupError = error.message
    );
  }
}
