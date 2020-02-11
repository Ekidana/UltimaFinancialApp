import { Injectable, Query } from '@angular/core';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { UnitCartItem } from '../models/unitcartitem';
import { Unittrust } from '../models/unittrust';


@Injectable({
  providedIn: 'root'
})
export class FirebaseUnittrustcartService {
  userid: string;
  docid: string;
  totalpurchaseamount: number = 0;

  constructor(private authService: AuthService) { }

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
                  this.docid = querySnapshot.docs[0].id
                });
              } else {
                this.docid = querySnapshot.docs[0].id
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


  

    getUnitCartItem(){
      const promise = new Promise<Unittrust[]>((resolve, reject) => {
        this.getUnitCartId().then(unitcartId => {
          console.log(unitcartId)
          const unitcartitem: Unittrust[] = [];
          firebase.firestore().collection('buyunittrust/' + unitcartId + '/buyitem').get().then(itemsSnapshot => {
            itemsSnapshot.forEach(doc => {
              const u = new Unittrust(doc.data().name,doc.data().bidprice, doc.data().offerprice, doc.data().type, doc.data().date, doc.data().id, doc.data().investamount, doc.data().quantity);
              unitcartitem.push(u);
            });
        });
        resolve(unitcartitem);
    }).catch(error => {});


  });
  return promise;
}

add(unittrust: Unittrust) {
  const promise = new Promise<void>((resolve, reject) => {
    this.getUnitCartId().then(unitcartId => {
      const db = firebase.firestore();
      const itemRef = db.collection('unittrustcarts/' + unitcartId + '/items/').doc(unittrust.id);
      itemRef.get().then(itemSnapshot => {
        if (itemSnapshot.exists) {
          itemRef.update({

            quantity: itemSnapshot.data().quantity + 1
          });
        } else {
            // Add to DB set the id using product id
            itemRef.set({
              quantity: 1,
              name: unittrust.name,
              offerprice: unittrust.offerprice
            });
          }
          resolve(); // Promise fulfilled
        });
      }).catch(error => reject(error));
    });

    return promise;
  }

  remove(item: Unittrust) {
    const promise = new Promise<void>((resolve, reject) => {
      this.getUnitCartId().then(unitcartId => {
        const db = firebase.firestore();
        const itemRef = db.collection('buyunittrust/' + unitcartId + '/buyitem/').doc(item.name);
        itemRef.get().then(itemSnapshot => {
          if (itemSnapshot.exists) {
            itemRef.delete();
            resolve(); // Promise fulfilled
          }
        });
      }).catch(error => { });
    });
    return promise;
  }

  checkout() {
    const promise = new Promise<void>((resolve, reject) => {
      this.totalpurchaseamount = 0;
      //remove money from user account
      this.getUnitCartId().then(unitcartId => {
        firebase.firestore().collection('buyunittrust').doc(unitcartId).collection('buyitem').get().then(docs => {
          docs.forEach(doc => {
            this.totalpurchaseamount = this.totalpurchaseamount + doc.data().investamount
            this.totalpurchaseamount = parseFloat(this.totalpurchaseamount.toFixed(2))
          })
          firebase.firestore().collection('users').doc(this.authService.getCurrentUser().email).get().then(doc => {
            this.userid = doc.data().userid
            firebase.firestore().collection('UnitTrustAccount').doc(doc.data().userid).get().then(doc => {
              if (this.totalpurchaseamount > parseInt(doc.data().utAmount)) {
                alert("Please review your request. You do not have enough money in your account.")
              }
              else {
                firebase.firestore().collection('UnitTrustAccount').doc(this.userid).update({
                  utAmount: (parseInt(doc.data().utAmount) - this.totalpurchaseamount).toString()
                })
                firebase.firestore().collection('buyunittrust/' + this.docid + '/buyitem').get().then(doc => {
                  if (doc.empty) {
                    console.log("empty")
                  }
                  doc.forEach(doc => {
                    console.log("adding")
                    firebase.firestore().collection("fmrequests/").doc(this.userid + " " + new Date() + " " + doc.data().name).set({
                      id: this.userid + " " + new Date() + " " + doc.data().name,
                      userid: this.userid,
                      investname: doc.data().name,
                      investquantity: doc.data().quantity,
                      offer_bid_pricesubmitted: doc.data().offerprice,
                      offer_bid_priceonspot: 0,
                      investamount: doc.data().investamount,
                      status: "Buy-Pending",
                      datetime: new Date().toDateString()
                    })
                  })
                })
                this.getUnitCartId().then(unitcartId => {
                  const db = firebase.firestore();
                  console.log(this.docid)
                  const unitsRef = db.collection('buyunittrust/').doc(this.docid);
                  unitsRef.update({
                    status: 'In review',
                  }).then(() => {
                    alert("Your purchase request has been submitted.")
                  });
                  resolve();
                });
                }
              })
            })
          })
      });
      return promise;
    })
  }
}




