import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { ModalController, ToastController } from '@ionic/angular';
import { FirebaseUnittrustService } from '../shared/services/firebase-unittrust.service';
import { Unittrust } from '../shared/models/unittrust';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-unittrust',
  templateUrl: './edit-unittrust.page.html',
  styleUrls: ['./edit-unittrust.page.scss'],
})
export class EditUnittrustPage implements OnInit {
  unittrustId: string;
  editUnitForm: FormGroup;
  submitted: boolean;
  click:boolean;
  // date: Date = new Date("dd-MM-yyyy HH:mm:ss");
  date = new Date().toISOString().toString();
  types: string[];



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
  this.types= ['Equity','Mixed Asset', 'Fixed Asset']

  this.submitted =false;
  this.editUnitForm = new FormGroup({
    name: new FormControl(unittrust.name),
    type: new FormControl(unittrust.type)

  });

  }


  async update() {
    const itemRef = firebase.firestore().collection('unittrust').doc(this.unittrustId);
    itemRef.get().then(itemSnapshot => {
      if (itemSnapshot.exists) {
        itemRef.update({
          name: this.editUnitForm.value.name,
          type: this.editUnitForm.value.type
  });


}
    });

    const toast = await this.toastController.create({
      message: 'UnitTrust Updated',
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
