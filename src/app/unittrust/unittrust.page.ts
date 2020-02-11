import { Component, OnInit } from '@angular/core';
import { Unittrust } from '../shared/models/unittrust';
import { FirebaseUnittrustService } from '../shared/services/firebase-unittrust.service';
import { ToastController } from '@ionic/angular';
import { FirebaseUnittrustcartService } from '../shared/services/firebase-unittrustcart.service';
import { Router } from '@angular/router';
import { BuyunitService } from '../shared/services/buyunit.service';

@Component({
  selector: 'app-unittrust',
  templateUrl: './unittrust.page.html',
  styleUrls: ['./unittrust.page.scss'],
})
export class UnittrustPage implements OnInit {
  unittrusts: Unittrust[];
  // allUnittrusts: Unittrust[];

  constructor(public toastController: ToastController, private unittrustService: FirebaseUnittrustService, private unittrustcartService: FirebaseUnittrustcartService, private router: Router,private buyunitService: BuyunitService) {

  }


  //   async addToCart(item: Unittrust) {
  //     this.unittrustcartService.add(item);
  //     const toast = await this.toastController.create({
  //       message: item.name + ' added to cart',
  //       duration: 2000,
  //       position: 'top',
  //       color: 'secondary'
  //     });
  //     this.unittrustcartService.add(item)
  //     .then(()=> {
  //       toast.present();

  //     })
  //     .catch(error =>{
  //       toast.message = 'Error' + error;
  //       toast.present();
  //     });

  //  }

  // async addToUnitBasket(item: Unittrust){
  // this.unittrustcartService.add(item);
  // const toast = await this.toastController.create({
  //   message: item.name + 'added to'
  // })
  // }


  
    async addToCart(item: Unittrust) {
      const toast = await this.toastController.create({
        message: item.name + ' added to cart',
        duration: 2000,
        position: 'top',
        color: 'secondary'
      });
      this.buyunitService.add(item)
      .then(()=> {
        toast.present();
        this.router.navigate(['/go-unittrust']);

      })
      .catch(error =>{
        toast.message = 'Error' + error;
        toast.present();

      });


    }

   
  
    // showHistory(){
    //   this.unittrustService.getUnitByPriceDate()
    // }


  ngOnInit() {
    this.unittrustService.getAllUnittrust().then(
      result => this.unittrusts = result
    );
  } 


}
