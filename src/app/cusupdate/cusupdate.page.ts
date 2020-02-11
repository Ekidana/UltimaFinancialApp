import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { Information } from '../shared/models/information';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { InfoService } from '../shared/services/info.service';


@Component({
  selector: 'app-cusupdate',
  templateUrl: './cusupdate.page.html',
  styleUrls: ['./cusupdate.page.scss'],
})
export class CusupdatePage implements OnInit {
  information : Information[];
  allInformation: Information[];
  



  constructor(private infoService: InfoService, private router: Router, private route: ActivatedRoute, private modalController: ModalController) {
   }

  
  search(event) {
    const text = event.target.value;
    if (text && text.trim() !== '') {
      this.information = this.allInformation.filter(
        item => item.userid.toLowerCase().includes(text.toLowerCase()));
    } else {
      // Blank text, clear the search, show all products
      this.information = this.allInformation;
    }

  }

  refresh(event) {
    this.information = this.allInformation;
    event.target.complete();
  }



  ngOnInit() {
  
    // this.infoService.getAllInformation().then(
    //   result => this.information = this.allInformation = result
    // );


  }

  ionViewDidEnter() {
        this.infoService.getAllInformation().then(
      result => this.information = this.allInformation = result
    );


  }


}

