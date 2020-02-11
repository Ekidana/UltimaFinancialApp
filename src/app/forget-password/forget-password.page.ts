import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { ModalController, ToastController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  resetpasswordForm: FormGroup;
  submitted: boolean;

  constructor(private authService: AuthService, private modalController: ModalController, private toastController: ToastController,) {
    this.resetpasswordForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required])
    });
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  resetPassword() {
    this.submitted = true;

    if (this.resetpasswordForm.valid) {
      this.authService.resetPassword(this.resetpasswordForm.value.email).then(
        async () => {
          const toast = await this.toastController.create({
            message: 'Request for password reset successful. Check your email for instructions. If it is not in your main inbox, please check your Spam and Junk Folder. If you did not receive an email in a minute, please sign up for an account.',
            duration: 5000,
            position: 'top',
            color: 'secondary'
          });
          toast.present();
          this.dismiss();
        }
      );
    }
  }
}
