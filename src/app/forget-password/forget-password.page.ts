import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { ModalController, ToastController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  resetpasswordForm: FormGroup;

  constructor(private authService: AuthService, private modalController: ModalController, private toastController: ToastController,) {
    this.resetpasswordForm = new FormGroup({
      email: new FormControl('')
    });
  }

  

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  resetPassword() {
    this.authService.resetPassword(this.resetpasswordForm.value.email).then(
      async () => {
        const toast = await this.toastController.create({
          message: 'Request for password reset successful. Check your email for instructions.',
          duration: 2000,
          position: 'top',
          color: 'secondary'
        });
        toast.present();
        this.dismiss();
      }
    )
  }
}
