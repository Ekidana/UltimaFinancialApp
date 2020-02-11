import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Unverifiedids } from '../shared/models/unverifiedid';

@Component({
  selector: 'app-adminverifyidentity',
  templateUrl: './adminverifyidentity.page.html',
  styleUrls: ['./adminverifyidentity.page.scss'],
})
export class AdminverifyidentityPage implements OnInit {
  unverifiedlist: Unverifiedids[];
  constructor() { }

  ngOnInit() {
    this.getunverifiedusers().then(
      result =>  this.unverifiedlist = result
    );
  }

  ionViewDidEnter() {
    this.getunverifiedusers().then(
      result =>  this.unverifiedlist = result
    );
  }

  getunverifiedusers() {
    const promise = new Promise<Unverifiedids[]>((resolve, reject) => {
      const list: Unverifiedids[] = [];
        firebase.firestore().collection("users").where("verified", "==", "No").get().then(unverified => {
          unverified.forEach(doc => {
            const p = new Unverifiedids(doc.data().userid)
            list.push(p)
          })
        })
        resolve(list);
    })
    return promise;
  }
}

