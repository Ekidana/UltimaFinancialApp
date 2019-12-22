import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User = new User();
  constructor() {
    firebase.auth().onAuthStateChanged((firebaseUser: firebase.User) => {
      if (firebaseUser) {
          this.user.email = firebaseUser.email;
      } else {
          this.user.email = '';
      }
  });
}

  login(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  getCurrentUser() {
    return this.user;
  }

  logout() {
    firebase.auth().signOut();
  }

  signup(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
}
