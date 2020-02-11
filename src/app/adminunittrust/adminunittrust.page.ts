import { Component, OnInit } from '@angular/core';
import { Unittrust } from '../shared/models/unittrust';
import { FirebaseUnittrustService } from '../shared/services/firebase-unittrust.service';

@Component({
  selector: 'app-adminunittrust',
  templateUrl: './adminunittrust.page.html',
  styleUrls: ['./adminunittrust.page.scss'],
})
export class AdminunittrustPage implements OnInit {
  unittrusts: Unittrust[];

  constructor(private unittrustService: FirebaseUnittrustService) { }

  ngOnInit() {
  }

  delete(item: Unittrust) {
    this.unittrustService.delete(item).then(() => {
      this.unittrustService.getAllUnittrust().then(
        result => this.unittrusts = result
      );
    });
  }


  ionViewDidEnter() {
    this.unittrustService.getAllUnittrust().then(
      result => this.unittrusts = result
    )
  }

}
