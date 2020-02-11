import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Expense} from "../models/expense"; 
import { resolve } from 'url';
 
@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  allExpense: Expense[] =[];
 constructor(){
   this.allExpense = [ 
     new Expense()
   ]; 
 } 
 getAllexpense (){
   const promise = new Promise <Expense[]> ((resolve, reject ) => {
     resolve(this.allExpense); 
   }); 
   return promise; 
  } 
  getexpenseById(id: string): Expense{ 
    const result = this.allExpense.find( 
      item => item.Id ===id
    );  
    return result; 
  }  
  add (expense:Expense){
    // Create an arbitrary id for the new product
    const id = this.allExpense.length+100;  
    expense.Id = id.toString(); 
    this.allExpense.push(expense); 
  } 
  update (expense:Expense) {
     // Find the array index which starts from 0 

     const index = this.allExpense.findIndex ( 
       item => item.Id === expense.Id 
     );  
    const ref = this.allExpense[index]; 
    // Update everything except the id (which is the unique key) 
    ref.Item = expense.Item; 
    ref.Amount=expense.Amount; 
    ref.Date = expense.Date;


  }
  }