import { Component, OnInit } from '@angular/core';

import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { FormGroup, FormControl, Validators,ReactiveFormsModule  } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import  'firebase/firestore';
import { User } from '../shared/models/users';

import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { UserInvestment } from '../shared/models/UserInvestment';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {

  user: User = new User();
  fname: any;
  lname: any;
  utName: any;
  utAmount: any;
  interest: any;
  totalAmount: number =0
  totalReturn: number=0
  investamount: number=0
  depositArray: any[] = [];
  investmentlist: UserInvestment[] = [];

  totalDeposit: number= 0;
  totalWithdrawal:  number= 0;

  constructor(private http: HttpClient,private authService: AuthService,private router: Router,public toastController: ToastController, public loadingController: LoadingController) { 
    
  }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    this.getUserDetails()
    this.getUTDetails()
    this.getDeposit()
    this.getInvestments()
  }
  //  getInvestmentAmount(){
   // let userDoc = firebase.firestore().collection('buyunittrust/buyitem ');
   // userDoc.get().then((querySnapshot) => {
    // querySnapshot.forEach((doc) => {
     // console.log(doc.id, "=>", doc.data());
      // if ()
    // }
    // )
   // }
  //  )
  //}
  
  getDeposit() {

    let userDoc = firebase.firestore().collection('Deposit');
    userDoc.get().then((querySnapshot) => { 
      querySnapshot.forEach((doc) => {
           console.log(doc.id, "=>", doc.data()); 
           if(doc.data().userEmail == this.user.email){

            
            this.totalDeposit = this.totalDeposit + parseInt(doc.data().depositAmount)
            // alert(doc.data().accountname)
            // this.fname = doc.data().fname
            // this.lname = doc.data().lname
           } 
           
      })
   })
  }


  depositChart(){
    this.router.navigate(['/depositchart'])
  }
  withdrawalChart(){
    this.router.navigate(['/withdrawalchart'])
  }

  getUserDetails() {

    let userDoc = firebase.firestore().collection('users');
    userDoc.get().then((querySnapshot) => { 
      querySnapshot.forEach((doc) => {
           console.log(doc.id, "=>", doc.data()); 
           if(doc.data().email == this.user.email){
            // alert(doc.data().accountname)
            this.fname = doc.data().fname
            this.lname = doc.data().lname
           } 
           
      })

      console.log(this.banks)
   })
  }

  getUTDetails() {

    let userDoc = firebase.firestore().collection('UnitTrustAccount');
    userDoc.get().then((querySnapshot) => { 
      querySnapshot.forEach((doc) => {
           console.log(doc.id, "=>", doc.data()); 
           if(doc.data().userEmail == this.user.email){
            // alert(doc.data().accountname)
            this.utName = doc.data().utName
            this.utAmount = doc.data().utAmount
            this.interest = doc.data().interest
           } 
           
      })

      this.totalAmount =  parseInt(this.utAmount) + ( parseInt(this.utAmount)* ( parseInt(this.interest)/100 ) )
    //  this.totalReturn = ( parseInt(this.utAmount)* ( parseInt(this.interest)/100 ) )
    
      console.log(this.banks)
   })
  }

  banks(banks: any) {
    throw new Error("Method not implemented.");
  }

  getInvestments() {
    firebase.firestore().collection('users').where('email','==',this.user.email).get().then(doc => {
      doc.forEach(doc => {
        firebase.firestore().collection('UserInvestments').where('userid','==',doc.data().userid).get().then(docs => {
          docs.forEach(doc => {
            const p = new UserInvestment(doc.data().id,doc.data().amountused, doc.data().buyingofferprice, doc.data().investmentname, doc.data().quantity, doc.data().userid)
            this.investmentlist.push(p)
          })
        })
      })
    })
  }

}
