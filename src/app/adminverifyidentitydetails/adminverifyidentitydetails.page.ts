import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-adminverifyidentitydetails',
  templateUrl: './adminverifyidentitydetails.page.html',
  styleUrls: ['./adminverifyidentitydetails.page.scss'],
})
export class AdminverifyidentitydetailsPage implements OnInit {
fname: string;
lname: string;
nric: string;
userid: string;
dob: Date;
email: string;
datetimesignup: Date;
gender: string;
role: string;
selfieimage: any;
nricimage: any;


  constructor(private route: ActivatedRoute, private router: Router, public emailComposer: EmailComposer) { }

  ngOnInit() {
    this.getdetails();
  }

  getdetails() {
    firebase.firestore().collection('users/').where("userid", "==", this.route.snapshot.params.id).get().then(details => {
      details.forEach(doc => {
        this.fname = doc.data().fname,
        this.lname = doc.data().lname,
        this.nric = doc.data().nric,
        this.userid = doc.data().userid,
        this.dob = doc.data().dob,
        this.email = doc.data().email,
        this.datetimesignup = doc.data().datetimesignup,
        this.gender = doc.data().gender,
        this.role = doc.data().role
        this.nricimage = doc.data().nricimage,
        this.selfieimage = doc.data().selfieimage
      })
    });
  }

  verifyidentity() {
    firebase.firestore().collection('users/').doc(this.email).delete();
    firebase.firestore().collection('users/').doc(this.email).update({
      verified: "Yes"
    }).then(()=> {
      //delete pics from db
      alert("You have verified the user " + this.userid + ".")
      this.router.navigate(['/adminverifyidentity']);
      this.emailComposer.isAvailable().then((available: boolean) =>{
        if(available) {
          this.emailComposer.open({
            to: this.email,
            cc: '',
            attachments: [
              
            ],
            subject: 'You are good to go!',
            body: 'Hello! Our admin team has verified that you are a human with a truthful identity declaration. You can now access functions such as buying funds!',
            isHtml: true,
          });
        }
       });
    })
  }

  retryverification() {
    //delete pics from db and use then to enclose the email thingy in it
    firebase.firestore().collection('users/').doc(this.email).update({
      verified: "Pending",
      nricimage: "",
      selfieimage: ""
    }).then(() => {
      this.router.navigate(['/adminverifyidentity']);
      this.emailComposer.isAvailable().then((available: boolean) =>{
        if(available) {
          this.emailComposer.open({
            to: this.email,
            cc: '',
            attachments: [
              
            ],
            subject: 'Review of Identity.',
            body: 'Hello! Our admin team has gone through your details, and need you to reverify your identity. Please login into the app and reverify your identity in the profile page. Do ensure that you profile details matches closely to the details on your identity card.',
            isHtml: true,
          });
        }
       });
    })
  }
}
