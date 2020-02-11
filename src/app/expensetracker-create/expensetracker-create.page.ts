import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { User } from '../shared/models/users';
import { MenuController, ModalController, ToastController } from '@ionic/angular';
import { AuthService } from '../shared/services/auth.service';
import { Expense } from '../shared/models/expense';

import { FirebaseExpenseService } from '../shared/services/firebase-expense.service';

@Component({
  selector: 'app-expensetracker-create',
  templateUrl: './expensetracker-create.page.html',
  styleUrls: ['./expensetracker-create.page.scss'],
})
export class ExpensetrackerCreatePage implements OnInit {
  itemexist: boolean;
  user: User = new User();
  ExpensetrackerCreateForm:FormGroup;
  


  static positiveNumber(FormControl){
    if (FormControl > 0) { //>=
      return ({positiveNumber : true}); 
    } else {
      return(null);
    }

  }
  
  constructor(public menuController: MenuController, private authService: AuthService, private modalController: ModalController, 
    private toastController: ToastController, private expenseService: FirebaseExpenseService ) { 
    this.ExpensetrackerCreateForm = new FormGroup({
    Item: new FormControl('', [Validators.required]),
    Amount: new FormControl('0',[ExpensetrackerCreatePage.positiveNumber, Validators.min(1), Validators.required]),
    Date: new FormControl('',[Validators.required]) 
  }); 

}
ngOnInit() {
  this.user = this.authService.getCurrentUser(); 
  
} 
dismiss() {
  this.modalController.dismiss();
}

/*
 signupprofile() {
  firebase.firestore().collection('users').doc(this.user.email).get().then((docSnapshot) => {
  if (docSnapshot.exists) {
   this.itemexist = true;
  }

  })
  **/
  
  //do I need the else below ?
  /*
  else() {
    // Add a new document in collection "users"
    firebase.firestore().collection("users").doc(this.user.email).set({
      fname: this.signupprofileForm.value.fname,
      lname: this.signupprofileForm.value.lname,
      nric: this.signupprofileForm.value.nric,
      gender: this.signupprofileForm.value.gender,
      email: this.user.email,
      role: "User"
    }).then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
    this.close = true;
  }
  **/

 async add() {
    this.itemexist=true; 
    if (this.ExpensetrackerCreateForm.valid) {
      firebase.firestore().collection('users').where('email','==',this.user.email).get().then(docs => {
        docs.forEach(doc => {
          firebase.firestore().collection('expenses').add({
            Userid: doc.data().userid,
            Item: this.ExpensetrackerCreateForm.value.Item, 
            Amount: this.ExpensetrackerCreateForm.value.Amount, 
            Date: this.ExpensetrackerCreateForm.value.Date,
          }).then(() => {
            alert("Your expense has been added successfully.")
          })
        })
      })
    } 
    
  } 
 
}
