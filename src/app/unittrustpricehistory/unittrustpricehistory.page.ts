import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase/app';
import  'firebase/firestore';
import { resolve } from 'url';
import { UnitOfferUpdatehistory } from '../shared/models/unitofferupdatehistory';

@Component({
  selector: 'app-unittrustpricehistory',
  templateUrl: './unittrustpricehistory.page.html',
  styleUrls: ['./unittrustpricehistory.page.scss'],
})
export class UnittrustpricehistoryPage implements OnInit {
  unittrustId :string;
  pricedatearray: UnitOfferUpdatehistory[];

  constructor(private router: Router, private route: ActivatedRoute, private toastController: ToastController) {
  } 

   getUnitTrust() {
    firebase.firestore().collection('unittrust/' + this.route.snapshot.params.id + "/offerprice").get().then(doc => {
      if (doc.empty) {
        console.log("empty")
      }
      else {
        this.pricedatearray = [];
        doc.forEach(pricedate => {
          const p = new UnitOfferUpdatehistory(pricedate.data().date, pricedate.data().offerprice);
          this.pricedatearray.push(p)
        })
      }
      
    }).catch(err => {
      console.log('Error getting documents', err);
    });
  
  }

  ngOnInit() {
    
    this.getUnitTrust();
  }

}
