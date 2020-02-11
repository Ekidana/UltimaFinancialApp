import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InfoService } from '../shared/services/info.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Information } from '../shared/models/information';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-edit-cus',
  templateUrl: './edit-cus.page.html',
  styleUrls: ['./edit-cus.page.scss'],
})
export class EditCusPage implements OnInit {
  informationId: string;
  editInformationForm: FormGroup;
  submitted: boolean;
  click:boolean;
  genderidentifier: string[];

  constructor(private toastController: ToastController, private infoService: InfoService, private route: ActivatedRoute, private router: Router) {
    this.informationId = this.route.snapshot.params.id;
    const information = this. infoService.getInformationById(this.informationId)

    this.submitted = false;
    this.genderidentifier = ['Male', 'Female'];
    this.editInformationForm = new FormGroup({
      userid: new FormControl(information.userid, [Validators.required]),
      fname: new FormControl(information.fname, [Validators.required]),
      lname: new FormControl(information.lname, [Validators.required]),
      nric: new FormControl(information.nric,[Validators.required] ,),
      email: new FormControl(information.email, [Validators.required]), 
      gender: new FormControl(information.gender)

    });
  }


  ngOnInit() {
  }

  // update() {
  //   this.submitted = true;
  //   if(this.editInformationForm.valid) {
  //     const info = new Information(this.editInformationForm.value.fname,
  //       this.editInformationForm.value.lname, 
  //       this.editInformationForm.value.email,
  //       this.editInformationForm.value.nric,
  //       this.informationId);

  //       this.infoService.update(info);
  //       this.router.navigate(['/cusupdate']);
  //   }
  // }

  async update() {
    const itemRef = firebase.firestore().collection('users').doc(this.informationId);
    itemRef.get().then(itemSnapshot => {
      if (itemSnapshot.exists) {
        
        itemRef.update({
          userid: this.editInformationForm.value.userid,
          fname: this.editInformationForm.value.fname,
          lname: this.editInformationForm.value.lname,
          nric: this.editInformationForm.value.nric,
          gender: this.editInformationForm.value.gender,
          email: this.editInformationForm.value.email
        });
      }
    });
    
    
    const toast = await this.toastController.create({
      
      message: 'Profile update successful. Update may take a while to reflect.',
      duration: 2000,
      position: 'top',
      color: 'secondary'
    });
    toast.present();
    this.router.navigate(['/cusupdate']);
  }
  

  
 


}
