import { Injectable, Query } from '@angular/core';
import * as firebase from 'firebase/app'; 
import 'firebase/firestore'
import { resolve } from 'url';
import { AuthService } from './auth.service';
//import { ArgumentOutOfRangeError } from 'rxjs';
import { promise } from 'protractor'; 
import { Expense } from '../models/expense';
import { ExpenseService } from './expense.service';


@Injectable({
  providedIn: 'root'
})
export class FirebaseExpenseService {
  allExpense: Expense[] =[];


  constructor( private authService :AuthService) {

 }
 getexpenseById(id: string):Expense {
  //  const db = firebase.firestore(); 
  //  //get current user 
  //  const user = this.authService.getCurrentUser(); 
  //  //No imcomplete list _Prac9_pg4 
  //  db.collection('expenses').doc(user.email).get().then(querySnapshot => {
  //    if (querySnapshot.data().user != user.email) {
  //      //No list exists, make new list  
  //      db.collection('expenses').doc(user.email).set({
  //        user:user.email, 
  //      }). then (docRef=> {console.log ('add new list '+user.email+'for email'+user.email); 
  //     }); 
  //   };
  // });
  const result = this.allExpense.find( 
    item => item.Id ===id
  );  
  return result; 

  }
  
 getAllexpense(){
  const promise = new Promise <Expense[]>((resolve, reject) => {
    //this.getexpenseById().then(expenseId => {
      const db = firebase.firestore(); 
      const user = this.authService.getCurrentUser(); 
     
      //Read from DB 
      //const expenseRef=db.collection() 
        db.collection('expenses').get().then(expenseSnapshot => {
          this.allExpense =[ ]; //empty list 
          expenseSnapshot.forEach(doc => { 
            const p = new Expense (doc.data ().Item, doc.data().Amount, doc.data().Date); 

            p.Id = doc.id; 

           // const c = new Expense (p, doc.data().Date); 

           this.allExpense.push(p); //add to expense list 
          }); 
          resolve(this.allExpense); 
       // }); 
    }).catch(error => {});
    
  });  
  return promise; 
 } 


 add(expense:Expense ){
  const db = firebase.firestore();
      //check if list exist in DB 
      const expenseRef = db.collection('/expenses'); 
     

          expenseRef.add ({
           // qunatity: 1 , 
            Item: expense.Item, 
            Amount: expense.Amount, 
            Date: expense.Date,
          });
        
  
}

remove(Expense: Expense) {
  firebase.firestore().collection('/expenses').doc()
}  

update(expense:Expense) {
  const promise = new Promise<void> ((resolve, reject ) => {
    
    this.getAllexpense().then(expenseId => { 
      
      const db = firebase.firestore(); 

      //update list status 

      const expenseRef = db.collection ('/expenses').doc(); 
      //is it the doc bracket need something 

      expenseRef.update({ 
        
        status: 'Sucessfully Updated!'
      }); 

      resolve(); 

    }); 

  }); 

  return promise; 

}
}


