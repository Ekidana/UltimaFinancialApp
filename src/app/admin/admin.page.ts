import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  go_cusverify(){
    this.navCtrl.navigateForward("/adminverifyidentity")
  }

  go_cusupdate() {
    this.navCtrl.navigateForward("/cusupdate")
  }

  go_cusdelete() {
    this.navCtrl.navigateForward("/cusdelete")
  }

  ngOnInit() {
  }

}
