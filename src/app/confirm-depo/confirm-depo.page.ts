import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/models/users';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { Information } from '../shared/models/information';
import { ModalController, ToastController } from '@ionic/angular';
import { Router,ActivatedRoute  } from '@angular/router';


@Component({
  selector: 'app-confirm-depo',
  templateUrl: './confirm-depo.page.html',
  styleUrls: ['./confirm-depo.page.scss'],
})
export class ConfirmDepoPage implements OnInit {

  userid: string;
  deposit: string;
  depositvalue: string;
  depositform: FormGroup;
  user: User = new User();
  utID: any;
  amount: any;
  initialAmount: string;
  intinitialAmount: number;

  constructor(private aroute: ActivatedRoute,private authService: AuthService, private modalController: ModalController, private router: Router, private toastController: ToastController) {
    this.user = this.authService.getCurrentUser();

    this.depositform = new FormGroup({
      deposit: new FormControl(this.deposit)
    });

    

    this.aroute.params.subscribe(params => {
          this.deposit = params['deposit']; 
          this.depositform.controls["deposit"].setValue(this.deposit);
          this.depositvalue = this.deposit
        //  alert(this.deposit)
    });

  }

  ngOnInit() {
  }

  async addDeposit() {
    this.deposit = this.depositform.value.deposit
    this.getUTID()


  }

  async getUTID(){
  firebase.firestore().collection('users').where('email','==', this.user.email).get().then(doc => {
    if (doc.empty) {
      alert("No User Record.")
    }
    else {
      doc.forEach(doc => {
        this.userid = doc.data().userid
        firebase.firestore().collection('UnitTrustAccount').doc(this.userid).get().then(doc => {
          this.initialAmount = doc.data().utAmount;

          this.intinitialAmount = parseInt(this.initialAmount) + parseInt(this.deposit);
          this.initialAmount = (this.intinitialAmount).toString();
          console.log(this.initialAmount)
          var d = Date(); 
            const document = firebase.firestore().collection('Deposit');
            const documentid = document.id;
            document.add({
              depositAmount: this.deposit,
              depositDate: d.toString(),
              depositID:documentid,
              utID: this.userid,
              email: this.user.email
            }).then(() => {
              firebase.firestore().collection('UnitTrustAccount').doc(this.userid).update({
                utAmount: this.initialAmount
              }).then(() => {
                alert("Your deposit amount $"+ this.deposit+" sucessfully added into your Unit Trust Account.")
                this.router.navigate(['/messagedepo'])
              })
            })
          })
        })
      }
    })
  }
}
