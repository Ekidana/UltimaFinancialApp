import { Component, OnInit } from '@angular/core';
import { Unittrust } from '../shared/models/unittrust';
import { UnitCartItem } from '../shared/models/unitcartitem';
import { FirebaseUnittrustcartService } from '../shared/services/firebase-unittrustcart.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-go-unittrust',
  templateUrl: './go-unittrust.page.html',
  styleUrls: ['./go-unittrust.page.scss'],
})
export class GoUnittrustPage implements OnInit {
  unitcart: Unittrust[];

  ngOnInit() {
    this.unittrustcartService.getUnitCartItem().then(
      result =>  this.unitcart = result
    );
  }

  ionViewDidEnter() {
    this.unittrustcartService.getUnitCartItem().then(
      result =>  this.unitcart = result
    );
  }

  constructor(private authService: AuthService, private unittrustcartService: FirebaseUnittrustcartService ,private router: Router, private route: ActivatedRoute, private toastController: ToastController) { }


  delete(item: Unittrust) {
    console.log("delete")
    this.unittrustcartService.remove(item).then(() => {
      // Refresh the cart after remove
      this.unittrustcartService.getUnitCartItem().then(
        result =>  this.unitcart = result
      );
    });
  }
 


  // checkout(){

  //   this.unittrustcartService.checkout().then(() => {

  //     // Refresh the cart after check out

  //     this.unittrustcartService.getUnitCartItem().then(

  //       result =>  this.unitcart = result

  //     );

  //   });

  // }


  async checkout() {
    this.unittrustcartService.checkout();
    this.unittrustcartService.getUnitCartItem().then(
      result =>  this.unitcart = result
    );  
  }

  getSubmittedCart() {
    const promise = new Promise<Unittrust[]>((resolve, reject) => {
      this.getUnitCartId().then(unitcartId => {
        console.log(unitcartId)
        const unitcartitem: Unittrust[] = [];
        firebase.firestore().collection('buyunittrust/' + unitcartId + '/buyitem').get().then(itemsSnapshot => {
          itemsSnapshot.forEach(doc => {
            console.log("hi")
            const u = new Unittrust(doc.data().name,doc.data().bidprice, doc.data().offerprice, doc.data().type, doc.data().date, doc.data().id, doc.data().investamount, doc.data().quantity);
            unitcartitem.push(u);
          });
      });
      resolve(unitcartitem);
    }).catch(error => {});
  });
  return promise;
  }

  getUnitCartId() {
    const promise = new Promise<string>((resolve, reject) => {
      const db = firebase.firestore();
        // Get the current user
        const user = this.authService.getCurrentUser();
        if (user !== undefined && user.email !== undefined && user.email.trim().length > 0) {
          const query = db.collection('buyunittrust/')
          .where('user', '==', user.email)
          .where('status', '==', 'incomplete')
          .limit(1);
          
        query.get().then(querySnapshot => {
          if(querySnapshot.empty) {
            const unitsRef = db.collection('buyunittrust/');
            unitsRef.add({
              user : user.email,
              status: 'incomplete'
            }).then(docRef => {
              console.log('add new unittrust' + docRef.id + 'for user' +user.email );
              resolve(docRef.id)
            });
          } else {
            resolve(querySnapshot.docs[0].id);
          }
            });
          } else {
            reject('Not logged in');
          }
        });
        return promise;
      }
}
