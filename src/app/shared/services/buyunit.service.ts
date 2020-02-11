import { Injectable } from '@angular/core';
import { BuyUnit } from '../models/buyunit';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { AuthService } from './auth.service';
import { Unittrust } from '../models/unittrust';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BuyunitService {
  buyUnit: BuyUnit[] = [];
  date = new Date().toISOString().toString();
  unittrust: Unittrust[];
  userid: string;


  constructor(private authService:AuthService, private router: Router) { }

  getUnitCartId() {
    const promise = new Promise<string>((resolve, reject) => {
      const db = firebase.firestore();
        // Get the current user
        const user = this.authService.getCurrentUser();
        if (user !== undefined && user.email !== undefined && user.email.trim().length > 0) {
          firebase.firestore().collection("users").where('email','==',user.email).get().then(doc => {
            if (doc.empty) {
            }
            else {
              doc.forEach(doc => {
                this.userid = doc.data().userid;
                const query = db.collection('buyunittrust/')
                .where('user', '==', this.userid)
                .where('status', '==', 'incomplete')
                .limit(1);
          
              query.get().then(querySnapshot => {
                if(querySnapshot.empty) {
                  const unitsRef = db.collection('buyunittrust/');
                  unitsRef.add({
                    user : this.userid,
                    status: 'incomplete'
                  }).then(docRef => {
                    console.log('add new unittrust' + docRef.id + 'for user' + this.userid );
                    resolve(docRef.id)
                  });
                } else {
                  resolve(querySnapshot.docs[0].id);
                }
                });
              })
            }
          })
            } else {
              reject('Not logged in');
            }
          });
          return promise;
      }


  getBuyunitItems(){
    const promise = new Promise<BuyUnit[]>((resolve, reject) =>{
      this.getUnitCartId().then(buyId =>{
        const db = firebase.firestore();
        const buyRef = db.collection('buyunittrust/'+buyId+'/buyitem');
        buyRef.get().then(buyitemSnapshot => {
          const buyUnit: BuyUnit[] = [];
          buyitemSnapshot.forEach(doc => {
            const u = new Unittrust(doc.data().name, doc.data().bidprice, doc.data().offerprice,doc.data().type, doc.data().date, doc.data().id);
            u.id = doc.id
            const b = new BuyUnit(u,doc.data().quantity,doc.data().investamount);
   
            buyUnit.push(b);
          });
          resolve (buyUnit);
        });
      }).catch(error => {});
    });
    return promise;
  }


  add(unittrust: Unittrust) {
    const promise = new Promise<void>((resolve, reject) => {
      this.getUnitCartId().then(buyId => {
        const db = firebase.firestore();

        const buyRef = db.collection('buyunittrust/' + buyId + '/buyitem').doc(unittrust.name);

        buyRef.get().then(doc => {
          if (doc.exists) {
            alert("The unit trust has already been added to your cart.")
          }
          else {
            buyRef.set({
              quantity: 0, 
              investamount: 0,
              name: unittrust.name,
              offerprice: unittrust.offerprice,
              type: unittrust.type
            }).then(doc => {
              this.router.navigate(['/go-unittrust']);
            });
          }
        })
      }).catch(error =>reject(error));
    });
    return promise
  }

  remove(item: BuyUnit) {
    const promise = new Promise<void> ((resolve, reject) =>{
      this.getUnitCartId().then(buyId =>{
        const db = firebase.firestore();
        
        const buyRef = db.collection('buyunittrust/' + buyId + '/buyitem').doc(item.unittrust.name);
        buyRef.get().then(itemSnapshot => {
          if(itemSnapshot.exists) {
            buyRef.delete();
            resolve();
          }
        });
      }).catch(error =>{});
    });
    return promise
  }

buy() {
  const promise = new Promise<void>((resolve, reject) =>{
    this.getUnitCartId().then(buyId => {
      const db = firebase.firestore();
      const buyRef = db.collection('buyunittrust').doc(buyId);
      buyRef.update({
        status: 'bought'
      }) ;
      resolve();
    });
  });
  return promise;
}

checkout() {
  const promise = new Promise<void>((resolve, reject) => {
    this.getUnitCartId().then(buyId => {
      const db = firebase.firestore();
      const unitsRef = db.collection('buyunittrust/').doc(buyId);
      unitsRef.update({
        status: 'bought',
      });
      resolve();
    });
  });
  return promise;

}


// adds(buyUnit:BuyUnit) {
//   const promise = new Promise<string>((resolve, reject) => {
//     this.getBuyUnitId().then(buyId => {
      
      
//     const db = firebase.firestore();
//     const buyRef = db.collection('buyunittrust/' + buyId + '/buyitem').doc();

//     buyRef.set ({
//       buyamount: buyUnit.buyamount,
      
//     }).then(docRef => {
//       console.log('add new amount')
//     });
//     resolve();
//   });
//   });
//   return promise;
// }


          



  


// add(buyUnit: BuyUnit) {
//   const promise = new Promise<string>((resolve, reject) => {
//     const db = firebase.firestore();
//     const buyRef = db.collection('unittrust/').doc(buyUnit.name);
//     this.date = new Date().toISOString().toString().slice(0,10);

//     buyRef.set({
//       amount:buyUnit.buyamount,
//       date: new Date().toISOString().toString().slice(0,10)

//     }).then(docRef =>{
//       console.log('bought new UnitTrust by user');

//     });

// });
// return promise;
  
//     }
//   }
}
