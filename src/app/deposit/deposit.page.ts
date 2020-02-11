import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/models/users';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { Information } from '../shared/models/information';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.page.html',
  styleUrls: ['./deposit.page.scss'],
})
export class DepositPage implements OnInit {

  depositform: FormGroup;
  deposit: string;

  constructor(private authService: AuthService, private modalController: ModalController, private router: Router, private toastController: ToastController) {
    this.depositform = new FormGroup({
      deposit: new FormControl(this.deposit)
    });

  }

  ngOnInit() {
  }

  dep(txt: any) {
    const text = txt;
    this.deposit = text;
  }

  async addDeposit() {
    this.deposit = this.depositform.value.deposit
    this.router.navigate(['/confirm-depo',this.deposit]);
  }

}
