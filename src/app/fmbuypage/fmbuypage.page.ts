import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-fmbuypage',
  templateUrl: './fmbuypage.page.html',
  styleUrls: ['./fmbuypage.page.scss'],
})
export class FmbuypagePage implements OnInit {
  buyForm: FormGroup;
  submitted: boolean;
  investamount: number;
  investname: string;
  investquantity: number;
  offerprice: number;
  userid: string;
  currentamount: string;
  updateamount: number;
  updatedepositamount: number;

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {
    this.buyForm = new FormGroup({
      price: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    firebase.firestore().collection('fmrequests').doc(this.route.snapshot.params.id).get().then(doc => {
      this.userid = doc.data().userid
      this.investamount = doc.data().investamount
      this.investname = doc.data().investname;
      this.investquantity = doc.data().investquantity;
      this.offerprice = doc.data().offer_bid_pricesubmitted;
    })
  }

  check() {
    this.submitted = true;

    if (this.buyForm.valid) {
      if ((this.buyForm.value.price * this.investquantity) <= this.investamount){
        
        firebase.firestore().collection('fmrequests').doc(this.route.snapshot.params.id).update({
          status: "Buy-Success",
          offer_bid_priceonspot: this.buyForm.value.price,
        })
        firebase.firestore().collection('UserInvestments').doc(this.userid + this.investname + new Date()).set({
          id: this.userid + this.investname + new Date(),
          userid: this.userid,
          investmentname: this.investname,
          buyingofferprice: this.buyForm.value.price,
          quantity: this.investquantity,
          amountused: (this.buyForm.value.price * this.investquantity).toFixed(2)
        }).then(() => {
          firebase.firestore().collection('UnitTrustAccount').doc(this.userid).get().then(doc => {
            this.updatedepositamount = this.investamount-(this.buyForm.value.price * this.investquantity)
            console.log(this.updatedepositamount)
            firebase.firestore().collection('UnitTrustAccount').doc(this.userid).update({
              utAmount: (parseFloat(doc.data().utAmount) + this.updatedepositamount).toString()
            }).then(() => {
              alert("Trade will be executed.")
              this.router.navigate(['/fmbuyrequest']);
            })
          })
        }
          //logic for settling miscallaneous amount with deposit account
        )
      }
      else {
        alert("Trade will not be executed.")
        firebase.firestore().collection('fmrequests').doc(this.route.snapshot.params.id).update({
          status: "Buy-Reject"
        }).then(() => {
          firebase.firestore().collection('users').doc(this.authService.getCurrentUser().email).get().then(doc => {
            this.userid = doc.data().userid
            firebase.firestore().collection('UnitTrustAccount').doc(doc.data().userid).get().then(doc => {
              this.currentamount = doc.data().utAmount
              this.updateamount = parseFloat(this.currentamount) + this.investamount;
              firebase.firestore().collection('UnitTrustAccount').doc(this.userid).update({
                utAmount: this.updateamount.toString(),
              }).then(() => {
                this.router.navigate(['/fmbuyrequest']);
              })
            })
          })
        })
      }
    }
  }
}
