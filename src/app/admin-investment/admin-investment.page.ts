import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-admin-investment',
  templateUrl: './admin-investment.page.html',
  styleUrls: ['./admin-investment.page.scss'],
})
export class AdminInvestmentPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  go_adminUnitTrust(){
    this.navCtrl.navigateForward("/adminunittrust")

  }

  fmbuyrequest(){
  this.navCtrl.navigateForward("/fmbuyrequest")
}


fmsellrequest(){
  this.navCtrl.navigateForward("/fmsellrequest")
}



}
