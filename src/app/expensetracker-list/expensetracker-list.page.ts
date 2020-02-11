import { Component, OnInit } from '@angular/core';
import {  SingleExpense } from '../shared/models/singleExpense'; 
import { ExpenseService } from '../shared/services/expense.service'
import { FirebaseExpenseService } from '../shared/services/firebase-expense.service';
import { Expense } from '../shared/models/expense';
import { ExpensetrackerEditPage } from '../expensetracker-edit/expensetracker-edit.page';
import { Router } from '@angular/router';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-expensetracker-list',
  templateUrl: './expensetracker-list.page.html',
  styleUrls: ['./expensetracker-list.page.scss'],
})
export class ExpensetrackerListPage implements OnInit {
expense: Expense[]; 
allExpenses :Expense[];
expenseId:string; 
private singleExpense: any;
private icons = [ ]
//today= new Date (getLocaleDateTimeFormat);

  /*
delete(item:Expense){
  this.expenseService.remove(item).then(() => {

   //refresh list after remove 

    this.expenseService.getAllexpense().then(

      result => this.expense= result
    );
  });
}
**/

//var time = new Date().getTime() - new Date("2013-02-20T12:01:04.753Z").getTime();


  



 public expenses : Array <{ title: string; note: string; icon: string }>
constructor(private expenseService:FirebaseExpenseService , private router: Router){ 

this.expense= this.allExpenses=[]
 



//inserted router:Router in constructor

  // for (let i = 1; i < 50; i++) {
  //   this.expense.push({
  //    // title: "" + this.expense.Id + "" + i,
  //    // note: 'This is expense #' + i,
  //    icons: this.icon[Math.floor(Math.random() * this.icon.length)]
  //   });
  // }
} 
//remove if does not work 
expensetrackeredit(item: Expense){
  this.router.navigateByUrl('/expensetracker-edit/' + item.Id)
} 

 
ngOnInit() {
  this.expenseService.getAllexpense().then(
    result => this.expense = this.allExpenses = result
    );

 
//

  }
//search bar logic starts here
search(event) {
  const text = event.target.value;
  if (text && text.trim() !== '') {
    this.expense = this.allExpenses.filter(
      item => item.Item.toLowerCase().includes(text.toLowerCase()));
  } else {
    // Blank text, clear the search, show all products
    this.expense = this.allExpenses;
  }
} 
  

 
    refresh(event) {
    this.expense = this.allExpenses 
    event.target.complete();
    }

    


  }



