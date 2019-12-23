import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { AuthService } from './auth.service';
import { User } from '../models/users';
 

@Injectable({
  providedIn: 'root'
})
export class FirebaseProfileInfoAddService {
  user: User = new User();
  public currentUser: firebase.User;
  public userProfile: firebase.firestore.DocumentReference;
  firebaseUserId = "";
  displayEmail = "";
  User: any;

  constructor(private authService: AuthService) {
    firebase.auth().onAuthStateChanged(user => {
      this.currentUser = user;
      this.User = user.uid;
      this.userProfile = firebase.firestore().doc('/users/${this.User}');
    })
  }

  get() {
    const promise = new Promise<string>((resolve, reject) => {
      const db = firebase.firestore();
      // Get the current user
      const user = this.authService.getCurrentUser();
      // Get user data
      if (user !== undefined && user.email !== undefined && user.email.trim().length > 0) {
        const query = db.collection('users/')
          .where('user', '==', user.email)
          .where('status', '==', 'filled')
          .limit(1);
        query.get().then(querySnapshot => {
          if (querySnapshot.empty) {
            // No information of user exists, create a new collection to fill user data
            const userRef = db.collection('users/');
            userRef.add({
              user: user.email,
              status: 'filled',
              name: '',
              nric: '',
            }).then(docRef => {
              this.firebaseUserId = docRef.id
              console.log('add user information ' + docRef.id + ' for  email ' + user.email);
              resolve(docRef.id);
            });
          } else {
            // Get existing user id
            //this.firebaseUserId = querySnapshot.docs[0].id;
            resolve(querySnapshot.docs[0].id);
          }
        });
      } else {
        reject('Not logged in');
      }
    });
    return promise;
  }
  
  add(name, nric) {
    const promise = new Promise<void>((resolve, reject) => {
      this.get().then(userId => {
        const db = firebase.firestore();
        const user = this.authService.getCurrentUser();
        const userRef = db.collection('users/').doc(this.firebaseUserId);
        userRef.get().then(itemSnapshot => {
          console.log("solved")
            // Add to information set the id using user email
            userRef.update({
              name: name,
              nric: nric,
            });
          resolve(); // Promise fulfilled
        });
      }).catch(error => reject(error));
    });
    return promise;
  }

  //displayInfo(): firebase.firestore.DocumentReference {
    //return this.userProfile
  //}
}