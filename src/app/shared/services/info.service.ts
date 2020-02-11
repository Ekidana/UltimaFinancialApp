import { Injectable } from '@angular/core';
import { Information } from '../models/information'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
 allInformation: Information[] = [];


  constructor(private authService :AuthService) { }

  getAllInformation() {
    const promise = new Promise<Information[]>((resolve, reject) => {
      const db = firebase.firestore();
      const user = this.authService.getCurrentUser();
      const informationRef = db.collection('users');
      informationRef.get().then(itemsSnapshot => {
        this.allInformation = [];
        itemsSnapshot.forEach(doc => {
          const i = new Information(doc.data().userid,doc.data().fname, doc.data().lname, doc.data().email,doc.data().nric,doc.data().role,doc.data().gender,doc.data().id);
          i.id = doc.id;
          this.allInformation.push(i);
    });
    resolve(this.allInformation);
});
    });
return promise;
    }

    // firebase.firestore().collection('users').doc(this.user.email).get().then((docSnapshot) => {
    //   this.fname = docSnapshot.data().fname;
    //   this.lname = docSnapshot.data().lname;
    //   this.nric = docSnapshot.data().nric;
    //   this.gender = docSnapshot.data().gender
    //   this.role = docSnapshot.data().role;



getInformationById(id: string): Information {
  const result = this.allInformation.find(
    item => item.id === id 
  )
  return result;
}


// getInformationByNric(nric: string): Information {
//   const result = this.allInformation.find(
//     item => item.nric === nric
//   )
//   return result;
// }


update(information: Information) {
  const db = firebase.firestore();
  const itemRef = db.collection('users/').doc(information.id);
  itemRef.update({
    userid: information.userid,
    fname : information.fname, 
    lname: information.lname,
    email: information.email,
    nric: information.nric
    });
}


remove(information: Information) {
  const db = firebase.firestore();
  const itemRef = db.collection('users/').doc(information.id);
  itemRef.delete
}

delete(information: Information) {
  const promise = new Promise<void>((resolve, reject) => {
    this.getAllInformation().then(id => {
      const db = firebase.firestore();

      const itemRef = db.collection('users/').doc(information.id);
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

  }
