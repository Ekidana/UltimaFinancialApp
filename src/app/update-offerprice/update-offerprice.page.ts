import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FirebaseUnittrustService } from '../shared/services/firebase-unittrust.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-update-offerprice',
  templateUrl: './update-offerprice.page.html',
  styleUrls: ['./update-offerprice.page.scss'],
})
export class UpdateOfferpricePage implements OnInit {
  unittrustId: string;
  editOfferPriceForm: FormGroup;
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
  this.editOfferPriceForm = new FormGroup({
    offerprice: new FormControl(unittrust.offerprice, [UpdateOfferpricePage.positiveNumber]),

  });

  }

  async update() {
    const itemRef = firebase.firestore().collection('unittrust').doc(this.unittrustId);
    const dateRef = firebase.firestore().collection('unittrust').doc(this.unittrustId).collection('offerprice')
    itemRef.get().then(itemSnapshot => {
      if (itemSnapshot.exists) {
        itemRef.update({
          offerprice: this.editOfferPriceForm.value.offerprice
  });
  this.date = new Date().toISOString().toString().slice(0,10);
  dateRef.doc(this.date).set({ date:new Date().toISOString().toString().slice(0,10),
  offerprice: this.editOfferPriceForm.value.offerprice })

}
    });

    const toast = await this.toastController.create({
      message: 'Offer Price Updated',
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











