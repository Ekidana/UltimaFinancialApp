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
  selector: 'app-processacc',
  templateUrl: './processacc.page.html',
  styleUrls: ['./processacc.page.scss'],
})
export class ProcessaccPage implements OnInit {

  withdrawalform: FormGroup;
  withdrawrate: string;

  user: User = new User();
  haveAccount: string;
  utName: any;
  utAmount: any;

  accounts: any[]=[]
  selectedbank: any;
  utID: any;

  userid: string;

  constructor(private authService: AuthService, private modalController: ModalController, private router: Router, private toastController: ToastController,public loadingController: LoadingController) {
    this.user = this.authService.getCurrentUser();
    this.withdrawalform = new FormGroup({
      selectedbank: new FormControl(this.selectedbank),
      withdrawrate: new FormControl(this.withdrawrate)
    });
  this.getAmount()
  this.getBank()


  }

  async getAmount(){
    firebase.firestore().collection('users').doc(this.user.email).get().then(doc => {
      this.userid = doc.data().userid;
      firebase.firestore().collection('UnitTrustAccount').where('utID', '==', this.userid).get().then(doc => {
        doc.forEach(doc => {
          this.utName =doc.data().utName
          this.utAmount =doc.data().utAmount
          this.utID = this.userid
        })
      })
    })
  }

  async getBank(){
    firebase.firestore().collection('users').where('email', '==', this.user.email).get().then(doc => {
      doc.forEach(doc => {
        firebase.firestore().collection('BankAccount').where('userid', '==', doc.data().userid).get().then(doc => {
          doc.forEach(doc => {
            console.log(doc.data().accountname)
            this.accounts.push(doc.data())
          })
        });
      })
    })
  }

  ngOnInit() {
  }

  withdraw(){
    this.withdrawrate = this.withdrawalform.value.withdrawrate
    this.selectedbank = this.withdrawalform.value.selectedbank

    var withdrawAmount = parseInt(this.utAmount) - parseInt(this.withdrawrate)
    
    if(this.withdrawrate == null){
      alert("Kindly insert withdrawal amount!")
    }
    else if(this.selectedbank == null){
      alert("Kindly select bank name!")
    }
    else if(withdrawAmount < 0){
      alert("Withdrawal amount should less than available amount")
    }
    else{
      var d = Date(); 
      const document = firebase.firestore().collection('Withdrawal').doc();
      const documentid = document.id;
    //  alert(documentid)
      document.set({
        useremail: this.user.email,
        withdrawalAmount: this.withdrawrate,
        withdrawalDate: d.toString(),
        withdrawalID: documentid,
        utID:this.utID,
        bankID: this.selectedbank
      }).then(() => {
        this.updateUTAccount()
        

      });
    }


  }

  async updateUTAccount(){

    var balanceAmount = parseInt(this.utAmount) - parseInt(this.withdrawrate)

    firebase.firestore().collection('UnitTrustAccount').doc(this.utID).update({
      utAmount: balanceAmount.toString()
    }).then(() => {
      
      alert("You have successfully withdraw $ "+this.withdrawrate+" from your Unit Trust Account.")
      this.router.navigate(['/message']);
    });

  }

}
