import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-fmsellpage',
  templateUrl: './fmsellpage.page.html',
  styleUrls: ['./fmsellpage.page.scss'],
})
export class FmsellpagePage implements OnInit {
  investname: string;
  investquantity: number;
  offer_bid_pricesubmitted: string;
  sellForm: FormGroup;
  submitted: boolean;
  previousamount: string;
  userid: string;
  email: string;
  temp: number;
  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) {
    this.sellForm = new FormGroup({
      price: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.email = this.authService.getCurrentUser().email;
    console.log(this.email)
    firebase.firestore().collection('fmrequests').doc(this.route.snapshot.params.id).get().then(doc => {
      this.investname = doc.data().investname;
      this.userid = doc.data().userid;
      this.investquantity = doc.data().investquantity;
      this.offer_bid_pricesubmitted = doc.data().offer_bid_pricesubmitted;
    })
  }

  confirm() {
    this.submitted = true;

    if (this.sellForm.valid) {
      if (this.sellForm.value.price >= this.offer_bid_pricesubmitted) {
        firebase.firestore().collection('users').doc(this.email).get().then(doc => {
          firebase.firestore().collection('UnitTrustAccount').doc(this.userid).get().then(doc => {
            console.log(doc.data().utID)
            this.previousamount = doc.data().utAmount;
            firebase.firestore().collection('UnitTrustAccount').doc(this.userid).update({
              utAmount: (parseFloat(this.previousamount) + (this.sellForm.value.price * this.investquantity)).toString() 
            }).then(() => {
              firebase.firestore().collection('fmrequests').doc(this.route.snapshot.params.id).update({
                status: "Sell-Success"
              }).then(() => {
                alert("Selling can and will occur.")
              this.router.navigate(['/fmsellrequest'])
              })
            })
          })
        })
      }
      else {
        firebase.firestore().collection('fmrequests').doc(this.route.snapshot.params.id).get().then(doc => {
          this.temp = parseFloat(doc.data().buyingofferprice) * this.investquantity;
          firebase.firestore().collection('UserInvestments').doc(doc.data().idinUserInvestments).set({
            amountused: this.temp.toString(),
            buyingofferprice: doc.data().buyingofferprice,
            id: doc.data().idinUserInvestments,
            investmentname: doc.data().investname,
            quantity: this.investquantity,
            userid: doc.data().userid
          }).then(() => {
            firebase.firestore().collection('fmrequests').doc(this.route.snapshot.params.id).update({
              status: "Sell-Reject"
            }).then(() => {
              alert("Selling will not occur.")
            this.router.navigate(['/fmsellrequest'])
            })
          })
        })
        
      }
    }
  }

}
