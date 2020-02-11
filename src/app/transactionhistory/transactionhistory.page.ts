import { Component, OnInit } from '@angular/core';

import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { FormGroup, FormControl, Validators,ReactiveFormsModule  } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import  'firebase/firestore';

import { parse } from 'querystring';
import { User } from '../shared/models/users';

@Component({
  selector: 'app-transactionhistory',
  templateUrl: './transactionhistory.page.html',
  styleUrls: ['./transactionhistory.page.scss'],
})
export class TransactionhistoryPage implements OnInit {
  user: User = new User();
  listingDeposit: any[] = [];
  listingDepositDate: any[] = [];

  listingWithdrawal: any[] = [];
  listingWithdrawalDate: any[] = [];

  totalDeposit: number = 0;
  totalWithdrawal: number = 0;

  constructor(private authService: AuthService,private router: Router,public toastController: ToastController, public loadingController: LoadingController) { 
    this.user = this.authService.getCurrentUser();
    this.getDeposit();
    this.getWithdrawal();
  }

  getDeposit() {

    let userDoc = firebase.firestore().collection('Deposit');
    userDoc.get().then((querySnapshot) => { 
      querySnapshot.forEach((doc) => {
           console.log(doc.id, "=>", doc.data()); 
           if(doc.data().userEmail == this.user.email){

            this.listingDeposit.push(doc.data());

            var d = new Date(doc.data().depositDate)
            var newD = d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();

            this.listingDepositDate.push(newD);
            this.totalDeposit = this.totalDeposit + parseInt(doc.data().depositAmount)
            // // alert(doc.data().accountname)
            // this.fname = doc.data().fname
            // this.lname = doc.data().lname
           } 
           
      })
   })
  }

  getWithdrawal() {

    let userDoc = firebase.firestore().collection('Withdrawal');
    userDoc.get().then((querySnapshot) => { 
      querySnapshot.forEach((doc) => {
           console.log(doc.id, "=>", doc.data()); 
           if(doc.data().useremail == this.user.email){

            this.listingWithdrawal.push(doc.data());

            var d = new Date(doc.data().withdrawalDate)
            var newD = d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();

            this.listingWithdrawalDate.push(newD);
            this.totalWithdrawal = this.totalWithdrawal + parseInt(doc.data().withdrawalAmount)
            // // alert(doc.data().accountname)
            // this.fname = doc.data().fname
            // this.lname = doc.data().lname
           } 
           
      })
   })
  }


  showDeposit(){
    var depositDiv = document.getElementById("depositDiv");
    var withdrawalDiv = document.getElementById("withdrawalDiv");
    depositDiv.style.display = "block";
    withdrawalDiv.style.display = "none";
  }

  showWithdrawal(){
    var depositDiv = document.getElementById("depositDiv");
    var withdrawalDiv = document.getElementById("withdrawalDiv");
    depositDiv.style.display = "none";
    withdrawalDiv.style.display = "block";
  }

  ngOnInit() {
  }

}
