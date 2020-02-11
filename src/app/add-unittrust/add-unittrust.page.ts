import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseUnittrustService } from '../shared/services/firebase-unittrust.service';
import { Unittrust } from '../shared/models/unittrust';

@Component({
  selector: 'app-add-unittrust',
  templateUrl: './add-unittrust.page.html',
  styleUrls: ['./add-unittrust.page.scss'],
})
export class AddUnittrustPage implements OnInit {
  addUnitForm: FormGroup;
  submitted: boolean;
  types: string[];
  date = new Date().toISOString().toString();


  // date: Date = new Date("dd-MM-yyyy HH:mm:ss");

  
  
  
  static positiveNumber(fc: FormControl) {
    if (fc.value <= 0) {
      return ({positiveNumber: true});
    } else {
      return (null);
    }
  }


  constructor(private unittrustService: FirebaseUnittrustService) {
    this.submitted=false;

    this.types= ['Equity','Mixed Asset', 'Fixed Asset']
    this.addUnitForm = new FormGroup ({
      name: new FormControl('', [Validators.required]),
      bidprice: new FormControl(0, [AddUnittrustPage.positiveNumber]),
      offerprice: new FormControl(0, [AddUnittrustPage.positiveNumber]),
      type: new FormControl('Equity'),
      date: new FormControl(this.date)


    });

   }



  ngOnInit() {
  }

add() {
  this.submitted = true;
  if(this.addUnitForm.valid) {
    const unit = new Unittrust(
      this.addUnitForm.value.name,
      this.addUnitForm.value.bidprice,
      this.addUnitForm.value.offerprice,
      this.addUnitForm.value.type,
      this.addUnitForm.value.date,
      undefined);
      this.unittrustService.add(unit)
    
  }
}

}
