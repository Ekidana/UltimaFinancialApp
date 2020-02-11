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
  selector: 'app-others',
  templateUrl: './others.page.html',
  styleUrls: ['./others.page.scss'],
})
export class OthersPage  {

  
  feedbackform: FormGroup;
  feedback: string;

  user: User = new User();
  haveAccount: string;

  constructor(private authService: AuthService, private modalController: ModalController, private router: Router, private toastController: ToastController,public loadingController: LoadingController) {
    this.user = this.authService.getCurrentUser();
    this.feedbackform = new FormGroup({
      feedback: new FormControl(this.feedback)
    });
  }

  addFeedback(){
    this.feedback = this.feedbackform.value.feedback

    if(this.feedback == null){
      this.withdraw()
    }
    else{
      const document = firebase.firestore().collection('Feedback').doc();
      const documentid = document.id;
    //  alert(documentid)
      document.set({
        useremail: this.user.email,
        feedbacktype: "Withdrawal Feedback",
        feedbackid:documentid,
        feedback: this.feedback
      }).then(() => {
    
        alert("Thank you for your feedback!")
        this.withdraw()

      });
    }


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

  validation(){
    this.presentLoading();
    setTimeout(()=>{
      
      this.navigate();
  }, 2000);

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
