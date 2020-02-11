import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { fminfo } from '../shared/models/fminfo';

@Component({
  selector: 'app-fmsellrequest',
  templateUrl: './fmsellrequest.page.html',
  styleUrls: ['./fmsellrequest.page.scss'],
})
export class FmsellrequestPage implements OnInit {
  list: fminfo[] = [];
  constructor() { }

  ngOnInit() {
    firebase.firestore().collection('fmrequests').where('status','==','Sell-Pending').get().then(docs => {
      docs.forEach(doc => {
        console.log(doc.data().investname)
        const n = new fminfo(doc.data().id, doc.data().investname, doc.data().investamount, doc.data().investquantity, doc.data().offer_bid_pricesubmitted, doc.data().off_bid_priceonspot, doc.data().status, doc.data().userid, doc.data().datetime)
        this.list.push(n)
      })
    })
  }

  ionViewDidEnter() {
    firebase.firestore().collection('fmrequests').where('status','==','Sell-Pending').get().then(docs => {
      docs.forEach(doc => {
        console.log(doc.data().investname)
        const n = new fminfo(doc.data().id, doc.data().investname, doc.data().investamount, doc.data().investquantity, doc.data().offer_bid_pricesubmitted, doc.data().off_bid_priceonspot, doc.data().status, doc.data().userid, doc.data().datetime)
        this.list.push(n)
      })
    })
  }

}
