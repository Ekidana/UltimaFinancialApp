import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static user: User = new User();
  constructor() { }

  static intialize() {
    firebase.auth().onAuthStateChanged((firebaseUser: firebase.User) => {
        if (firebaseUser) {
            this.user.email = firebaseUser.email;
            console.log('User ' + this.user.email);
        } else {
            console.log('User logged out');
            this.user.email = undefined;
        }
    });
  }

  getCurrentUser() {
    return AuthService.user;
  }


  login(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  logout() {
    firebase.auth().signOut();
  }

  signup(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  resetPassword(email: string) {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
      .then(() => console.log("email sent"))
      .catch((error) => console.log(error))
  }
}
