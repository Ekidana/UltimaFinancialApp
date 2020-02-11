import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';


import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/models/users';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { Information } from '../shared/models/information';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reach-target',
  templateUrl: './reach-target.page.html',
  styleUrls: ['./reach-target.page.scss'],
})
export class ReachTargetPage {

  user: User = new User();
  haveAccount: string = "no"

  constructor(private authService: AuthService, private modalController: ModalController,public loadingController: LoadingController, private router: Router, private toastController: ToastController) {
    this.user = this.authService.getCurrentUser();
   }

  validation(){
    this.presentLoading();
    setTimeout(()=>{
      
      this.navigate();
  }, 2000);

  }

  async withdraw(){
    firebase.firestore().collection('users').where('email','==', this.user.email).get().then(doc=> {
      doc.forEach(doc => {
        firebase.firestore().collection('BankAccount').where('userid', '==', doc.data().userid).get().then(doc => {
          if (doc.empty){
            this.router.navigate(['/nonexist-acc'])
          }
          else {
            this.haveAccount = "yes"
            this.router.navigate(['/processacc'])
          }
        });
      })
    })
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 2000,
      message: 'Please Wait',
      translucent: true,
    });
    return await loading.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Money Withdrawed Successfully.',
      duration: 2000
    });
    toast.present();
  }

  navigate(){
    this.router.navigate(['/add-bank'])
  }



}
