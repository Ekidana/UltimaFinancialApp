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
  selector: 'app-nonexist-acc',
  templateUrl: './nonexist-acc.page.html',
  styleUrls: ['./nonexist-acc.page.scss'],
})
export class NonexistAccPage implements OnInit {

  withdrawalform: FormGroup;
  withdrawrate: string;

  user: User = new User();
  haveAccount: string;
  utName: any;
  utAmount: any;

  constructor(private authService: AuthService, private modalController: ModalController, private router: Router, private toastController: ToastController,public loadingController: LoadingController) {
    this.user = this.authService.getCurrentUser();
    this.withdrawalform = new FormGroup({
      withdrawrate: new FormControl(this.withdrawrate)
    });
  this.getAmount()


  }

  async getAmount(){
    let userDoc = firebase.firestore().collection('UnitTrustAccount');
    await userDoc.get().then((querySnapshot) => { 
      querySnapshot.forEach((doc) => {
           console.log(doc.id, "=>", doc.data()); 
           if(doc.data().userEmail == this.user.email){
            this.utName =doc.data().utName
            this.utAmount =doc.data().utAmount

          
            
           } 
           
      })

   })
  }

  ngOnInit() {
  }

  withdraw(){
    this.withdrawrate = this.withdrawalform.value.withdrawrate
    alert("You have no bank account to withdraw! Kindly create bank account!")

  }

}
