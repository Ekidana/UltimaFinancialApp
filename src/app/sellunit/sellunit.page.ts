import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { JSDocTagName } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-sellunit',
  templateUrl: './sellunit.page.html',
  styleUrls: ['./sellunit.page.scss'],
})
export class SellunitPage implements OnInit {
  amountused: string;
  buyingofferprice: number;
  id: string;
  investmentname: string;
  quantity: number;
  userid: string;
  sellingprice: number;
  amount: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    firebase.firestore().collection('UserInvestments').doc(this.route.snapshot.params.id).get().then(doc => {
      this.amountused = doc.data().amountused;
      this.buyingofferprice = doc.data().buyingofferprice;
      this.id = doc.data().id;
      this.investmentname = doc.data().investmentname;
      this.quantity = doc.data().quantity;
      this.userid = doc.data().userid;
    }).then(() => {
      firebase.firestore().collection('unittrust').doc(this.investmentname).get().then(doc => {
        this.sellingprice = doc.data().bidprice
        this.amount = (this.sellingprice * this.quantity)
      })
    })
  }

  sell() {
    firebase.firestore().collection('fmrequests').doc(this.userid+this.investmentname+new Date()).set({
      datetime: new Date().toDateString(),
      id: this.userid+this.investmentname+new Date(),
      sellamount: this.amount,
      buyingofferprice: this.buyingofferprice,
      investname: this.investmentname,
      investquantity: this.quantity,
      offer_bid_priceonspot: 0,
      offer_bid_pricesubmitted: this.sellingprice,
      status: "Sell-Pending",
      userid: this.userid,
      idinUserInvestments: this.id
    })
    firebase.firestore().collection('UserInvestments').doc(this.route.snapshot.params.id).delete().then(() => {
      alert("Your selling request has been submitted successfully."),
      this.router.navigate(['/portfolio']);
    });
  }
}
