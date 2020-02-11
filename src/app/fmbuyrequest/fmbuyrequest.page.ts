import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { fminfo } from '../shared/models/fminfo';

@Component({
  selector: 'app-fmbuyrequest',
  templateUrl: './fmbuyrequest.page.html',
  styleUrls: ['./fmbuyrequest.page.scss'],
})
export class FmbuyrequestPage implements OnInit {
list: fminfo[] = [];
  constructor() {

  }

  ngOnInit() {
    firebase.firestore().collection('fmrequests').where('status','==','Buy-Pending').get().then(doc => {
      this.list = [];
      doc.forEach(doc => {
        const n = new fminfo(doc.data().id, doc.data().investname, doc.data().investamount, doc.data().investquantity, doc.data().offer_bid_pricesubmitted, doc.data().off_bid_priceonspot, doc.data().status, doc.data().userid, doc.data().datetime)
        this.list.push(n)
      })
    })
  }

  ionViewDidEnter() {
    firebase.firestore().collection('fmrequests').where('status','==','Buy-Pending').get().then(doc => {
      this.list = [];
      doc.forEach(doc => {
        const n = new fminfo(doc.data().id, doc.data().investname, doc.data().investamount, doc.data().investquantity, doc.data().offer_bid_pricesubmitted, doc.data().off_bid_priceonspot, doc.data().status, doc.data().userid, doc.data().datetime)
        this.list.push(n)
      })
    })
  }

}
