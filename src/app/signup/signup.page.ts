import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { ToastController, ModalController } from '@ionic/angular';
import { Information } from '../shared/models/information';
import { SignupprofilePage } from '../signupprofile/signupprofile.page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;
  signupError: string;
  submitted: boolean;


  constructor(
    private authService: AuthService,
    private toastController: ToastController,
    private modalController: ModalController,) {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      rpassword: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

  signup() {
    this.submitted = true;

    if (this.signupForm.valid) {
      if(this.signupForm.value.password === this.signupForm.value.rpassword) {
        this.authService.signup(this.signupForm.value.email, this.signupForm.value.password).then(
          async () => {
            const toast = await this.toastController.create({
              message: 'Signup successful.',
              duration: 2000,
              position: 'top',
              color: 'secondary'
          });
          toast.present();
          this.dismiss();
          const modal = await this.modalController.create({
            component: SignupprofilePage
          });
          return await modal.present();
        })
        .catch(
          error => this.signupError = error.message
        );
      }
      else {
        alert("Both Passwords do not match. Try again.")
      }
    }
  }
}
