import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FirebaseUnittrustService } from '../shared/services/firebase-unittrust.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-update-bidprice',
  templateUrl: './update-bidprice.page.html',
  styleUrls: ['./update-bidprice.page.scss'],
})
export class UpdateBidpricePage implements OnInit {
  unittrustId: string;
  editBidPriceForm: FormGroup;
  submitted: boolean;
  click:boolean;
  // date: Date = new Date("dd-MM-yyyy HH:mm:ss");
  date = new Date().toISOString().toString();

  static positiveNumber(fc: FormControl) {
    if (fc.value <= 0) {
      return ({positiveNumber: true});
    } else {
      return (null);
    }
  }


  constructor(private unittrustService: FirebaseUnittrustService, private router: Router, private route: ActivatedRoute, private toastController: ToastController) { 
  this.unittrustId = this.route.snapshot.params.id;
  const unittrust = this.unittrustService.getUnittrustById(this.unittrustId)

  this.submitted =false;
  this.editBidPriceForm = new FormGroup({
    bidprice: new FormControl(unittrust.bidprice, [UpdateBidpricePage.positiveNumber]),

  });

  }

  async update() {
    const itemRef = firebase.firestore().collection('unittrust').doc(this.unittrustId);
    const dateRef = firebase.firestore().collection('unittrust').doc(this.unittrustId).collection('bidprice')
    itemRef.get().then(itemSnapshot => {
      if (itemSnapshot.exists) {
        itemRef.update({
          bidprice: this.editBidPriceForm.value.bidprice
  });
  this.date = new Date().toISOString().toString().slice(0,10);
  dateRef.doc(this.date).set({ date:new Date().toISOString().toString().slice(0,10),
  bidprice: this.editBidPriceForm.value.bidprice })

}
    });

    const toast = await this.toastController.create({
      message: 'Bid Price Updated',
      duration: 2000,
      position: 'top',
      color: 'secondary'
  });
  toast.present();
  this.router.navigate(['/adminunittrust']);
}



  ngOnInit() {
  }


}











