import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { ToastController, ModalController } from '@ionic/angular';
import { SignupPage } from '../signup/signup.page';
import { ForgetPasswordPage } from '../forget-password/forget-password.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  loginForm: FormGroup;
  loginError: string;
  submitted: boolean;

  constructor(
    private authService: AuthService,
    private toastController: ToastController,
    private modalController: ModalController) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  login() {
    this.submitted = true;

    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password,).then(
        async () => {
          const toast = await this.toastController.create({
            message: 'Login successful',
            duration: 500,
            position: 'top',
            color: 'secondary'
          });
          toast.present();
          this.dismiss();
          setTimeout(function () {
            window.location.reload()
          }, 1000);
        }
      )
    .catch(
      error => this.loginError = error.message
    );
    }

  }


  async goToSignup() {
    this.dismiss();
    const modal = await this.modalController.create({
      component: SignupPage
    });
    return await modal.present();
  }

  async goToResetPassword() {
    this.dismiss();
    const modal = await this.modalController.create({
      component: ForgetPasswordPage
    });
    return await modal.present();
  }
}
