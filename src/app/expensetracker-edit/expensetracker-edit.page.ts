import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { User } from '../shared/models/users';
import { MenuController, ModalController, ToastController } from '@ionic/angular';
import { AuthService } from '../shared/services/auth.service';
import {SingleExpense } from  '../shared/models/singleExpense'; 
import {ExpenseService } from '../shared/services/expense.service'; 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Expense } from '../shared/models/expense';
import { FirebaseExpenseService } from '../shared/services/firebase-expense.service';
@Component({
  selector: 'app-expensetracker-edit',
  templateUrl: './expensetracker-edit.page.html',
  styleUrls: ['./expensetracker-edit.page.scss'],
})
export class ExpensetrackerEditPage implements OnInit {

  
  user: User = new User();
  ExpensetrackerEditForm:FormGroup;
  expense : Expense; 
  submitted : boolean;
  expenseId: string;
 
  static positiveNumber(fc: FormControl) {
    if (fc.value <= 0) {
      return ({ positiveNumber: true });
    } else {
      return (null);
    }
  }


  constructor(private toastController: ToastController, private expenseService : FirebaseExpenseService, private route: ActivatedRoute, private router: Router, ) {
    this.expenseId = this.route.snapshot.params.id; 
    this.expense = this.expenseService.getexpenseById(this.expenseId); 

    this.submitted = false; 

    this.ExpensetrackerEditForm = new FormGroup ({ 
       
      Item: new FormControl(this.expense.Item, [Validators.required]), 
//expense.Item
      Amount : new FormControl(this.expense.Amount, [ExpensetrackerEditPage.positiveNumber]), 
//expense.Amount
      Date: new FormControl(this.expense.Date,  [Validators.required]) 
//expense.Date      
    }); 
  }

  ngOnInit() {
  }

  async update(){ 
    const expenseRef = firebase.firestore().collection('expenses').doc(this.expenseId);
    expenseRef.get().then(expSnapshot => {
      if(expSnapshot.exists) {
        expenseRef.update({
          Item:this.ExpensetrackerEditForm.value.Item, //new FormControl ()
          Amount: this.ExpensetrackerEditForm.value.Amount,
          Date: this.ExpensetrackerEditForm.value.Date
        });
      }
    });

    const toast = await this.toastController.create({
      message: 'Expense has been updated, find it in the expense list page!',
      duration: 6000,
      position: 'top',
      color:'secondary'
    });
    toast.present();
  
     this.submitted= true; 

 } 
} 
