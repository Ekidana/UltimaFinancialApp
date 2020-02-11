import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { TakeoutPage } from '../takeout/takeout.page';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.page.html',
  styleUrls: ['./withdraw.page.scss'],
})
export class WithdrawPage  {
  constructor(private modalController: ModalController) { }

  async openTakeout() {
    const modal = await this.modalController.create({
      component: TakeoutPage
    });
    return await modal.present();
  }

 

}
