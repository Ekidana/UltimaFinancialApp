import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-buyunit',
  templateUrl: './buyunit.page.html',
  styleUrls: ['./buyunit.page.scss'],
})
export class BuyunitPage implements OnInit {
  name: string;
  amount: number;
  quantity: number;
  offerprice: number;
  amountForm: FormGroup;
  submitted: boolean;
  investamount: number;
  docid: string;
  userid: string;

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) {
    this.amountForm = new FormGroup({
      amount: new FormControl(0, [Validators.required]),
    });
  }

  ngOnInit() {
    this.getUnitCartId().then(doc => {
      firebase.firestore().collection('buyunittrust/' + doc + '/buyitem').doc(this.route.snapshot.params.name).get().then(doc => {
        this.name = doc.data().name,
        this.quantity = doc.data().quantity,
        this.offerprice = doc.data().offerprice
      })
    })
  }

  float2int (value) {
    return value | 0;
  }

  updateQuantity() {
    this.quantity = (this.amountForm.value.amount / this.offerprice)
    this.quantity = this.float2int(this.quantity);
    this.investamount = this.quantity * this.offerprice;
    this.investamount = +(this.investamount.toFixed(2))
    this.getUnitCartId().then(doc => {
      firebase.firestore().collection('buyunittrust/' + doc + '/buyitem').doc(this.route.snapshot.params.name).update({
        quantity: this.quantity,
        investamount: this.investamount
      }).then(doc => {
        alert("Based on the investment amount you inputted ($" + this.amountForm.value.amount + "), you can puchase " + this.quantity + " of " + this.name + "."),
        this.router.navigate(['/go-unittrust']);
      })
    });
  }

  getUnitCartId() {
    const promise = new Promise<string>((resolve, reject) => {
      const db = firebase.firestore();
        // Get the current user
        const user = this.authService.getCurrentUser();
        if (user !== undefined && user.email !== undefined && user.email.trim().length > 0) {
          firebase.firestore().collection("users").where('email','==',user.email).get().then(doc => {
            if (doc.empty) {
            }
            else {
              doc.forEach(doc => {
                this.userid = doc.data().userid;
                const query = db.collection('buyunittrust/')
                .where('user', '==', this.userid)
                .where('status', '==', 'incomplete')
                .limit(1);
          
              query.get().then(querySnapshot => {
                if(querySnapshot.empty) {
                  const unitsRef = db.collection('buyunittrust/');
                  unitsRef.add({
                    user : this.userid,
                    status: 'incomplete'
                  }).then(docRef => {
                    console.log('add new unittrust' + docRef.id + 'for user' + this.userid );
                    resolve(docRef.id)
                  });
                } else {
                  resolve(querySnapshot.docs[0].id);
                }
                });
              })
            }
          })
            } else {
              reject('Not logged in');
            }
          });
          return promise;
      }
}
