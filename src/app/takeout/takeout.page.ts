import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular'
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-takeout',
  templateUrl: './takeout.page.html',
  styleUrls: ['./takeout.page.scss'],
})
export class TakeoutPage  {

  constructor(public storage: Storage,private router: Router,public toastController: ToastController,private modalController: ModalController, public loadingController: LoadingController) { }

  

  async dismissModal(){
    await this.modalController.dismiss();
  }

  myValue: string ="9.56$"

  validation(){
    
    this.myValue = "0.00$"
    setTimeout(()=>{
      
      this.dismissModal();
      this.navigate();
  }, 2000);

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 2000,
      message: 'Securely Withdrawing Money',
      translucent: true,
    });
    return await loading.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Money Withdrawed Successfully.',
      duration: 2000
    });
    toast.present();
  }

  navigate(){
    this.router.navigate(['/feedback'])
  }

}
