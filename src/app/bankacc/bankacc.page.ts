import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { FormGroup, FormControl, Validators,ReactiveFormsModule  } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase/app';

import  'firebase/firestore';
import { User } from '../shared/models/users';

@Component({
  selector: 'app-bankacc',
  templateUrl: './bankacc.page.html',
  styleUrls: ['./bankacc.page.scss'],
})
export class BankaccPage implements OnInit {

  
  haveBank: string;

  listBank: any[];
  user: User;
  banks: any[] = [];

  constructor(private authService: AuthService,private router: Router,public toastController: ToastController) {

    this.user = this.authService.getCurrentUser();
    setTimeout(() => {
      firebase.firestore().collection('users').where('email','==', this.user.email).get().then(doc => {
        doc.forEach(doc => {
          doc.data().userid
          firebase.firestore().collection('BankAccount').where('userid','==',doc.data().userid).get().then(doc => {
            doc.forEach(doc => {
              this.banks.push(doc.data());
            })
          })
        })
      })
    }, 2000);
    


   }

   delete(bankid:string){

    const fileR  = "BankAccount/"+bankid;
    alert(fileR)
    var r = confirm("Are you want to delete bank account?");
    if (r == true) {
      firebase.firestore().doc(fileR).delete().then(() => {
        alert("Bank Account Deleted")
        this.router.navigate(['/setting']);
       });
    } else {
    }


    
   }

  ngOnInit() {
  }

}
