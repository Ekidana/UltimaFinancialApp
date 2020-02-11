import { Injectable } from '@angular/core';
import { Unittrust } from '../models/unittrust';
import * as firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseUnittrustService {
  allUnittrusts: Unittrust[] = [];

  constructor() { }

  getAllUnittrust() {
    const promise = new Promise<Unittrust[]>((resolve, reject) => {
      const db = firebase.firestore();
      const unitRef = db.collection('unittrust');
      unitRef.get().then(itemsSnapshot => {
        this.allUnittrusts = [];
        itemsSnapshot.forEach(doc => {
          const u = new Unittrust(doc.data().name, doc.data().bidprice, doc.data().offerprice, doc.data().type,doc.data().date, doc.data().id);
          u.id = doc.id;          
          this.allUnittrusts.push(u);
        });
        resolve(this.allUnittrusts);
      });
    });
    return promise;
  }

  getUnittrustById(id: string): Unittrust {
    const result = this.allUnittrusts.find(
      item => item.id === id)
      ;
    return result;
  }

  getUnitByPriceDate() {
    const promise = new Promise<Unittrust[]>((resolve, reject) => {
        const db = firebase.firestore();
        let unitsRef = db.collection('unittrust/' + history + '/price');
        return unitsRef.get().then(doc =>{
          let startAtSnapshot = db.collection('unittrust/' + history + '/price')
          .orderBy('date')
          .startAt('date');
          return startAtSnapshot.limit(10).get();

        })
  //       unitsRef.get().then(itemsSnapshot => {
  //         const unittrust: Unittrust[] = [];
  //         itemsSnapshot.forEach(doc => {
  //           const u = new Unittrust(doc.data().name, doc.data().price, doc.data().type, doc.data().date, doc.data().id);
  //           u.id = doc.id;
  //           unittrust.push(u);

  //       });
  //       resolve(unittrust);
  // });
}).catch(error => {});
return promise;
}




  getUnitPriceByDate(date: string): Unittrust {
    const result = this.allUnittrusts.find(
      item => item.date === date);
      return result;
  }


  add(unittrust: Unittrust) {
    const promise = new Promise<string>((resolve, reject) => {
      const db = firebase.firestore();
      const unitRef = db.collection('unittrust/').doc(unittrust.name);

      unitRef.set({
        name: unittrust.name, 
        bidprice: unittrust.bidprice,
        offerprice: unittrust.offerprice,
        type: unittrust.type,
        date: unittrust.date
      }).then(docRef => {

        console.log('add new UnitTrust with name' + unittrust.name);
      });
    });
    return promise;
  }

  remove(unittrust: Unittrust) {
    const db = firebase.firestore();
    const itemRef = db.collection('unittrust/').doc(unittrust.id);
    itemRef.delete()

  }

  // update(unittrust: Unittrust) {
  //   const db = firebase.firestore();
  //   const itemRef = db.collection('unittrust/').doc(unittrust.id);
  //   itemRef.update({
  //     name: unittrust.name, 
  //     price: unittrust.price,
  //     type: unittrust.type,
  //     date: unittrust.date
  //   });
  // }

  
delete(unittrust: Unittrust) {
  const promise = new Promise<void>((resolve, reject) => {
    this.getAllUnittrust().then(id => {
      const db = firebase.firestore();

      const itemRef = db.collection('unittrust/').doc(unittrust.id);
      itemRef.get().then(itemSnapshot => {
        if (itemSnapshot.exists) {
            // Remove user from user in DB
            itemRef.delete();
            resolve(); // Promise fulfilled
          }
        });

      }).catch(error => { });
    });
    return promise;


}

  update(unittrust: Unittrust) {
    const db = firebase.firestore();
    const itemRef = db.collection('unittrust/').doc(unittrust.id);
    itemRef.update({
      bidprice: unittrust.bidprice,
      offerprice: unittrust.offerprice
    });
  }
    


    
    

}
