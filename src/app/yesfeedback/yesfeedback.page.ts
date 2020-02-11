import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/models/users';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { Information } from '../shared/models/information';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yesfeedback',
  templateUrl: './yesfeedback.page.html',
  styleUrls: ['./yesfeedback.page.scss'],
})
export class YesfeedbackPage implements OnInit {

  addfeedback: FormGroup;
  feedback: string;

  user: User = new User();

  constructor(private authService: AuthService, private modalController: ModalController, private router: Router, private toastController: ToastController) {
    this.user = this.authService.getCurrentUser();
    this.addfeedback = new FormGroup({
      feedback: new FormControl(this.feedback)
    });

  }

  ngOnInit() {
  }

  async addFeedback() {
    this.feedback = this.addfeedback.value.feedback

  
    if(this.feedback == ""){
      alert("Kindly enter your feedback!")
    }
    else{
      const document = firebase.firestore().collection('Feedback').doc();
      const documentid = document.id;
    //  alert(documentid)
      document.set({
        useremail: this.user.email,
        feedbacktype: "Good",
        feedbackid:documentid,
        feedback: this.feedback
      }).then(() => {
    
        alert("Thank you for your feedback!")
        this.router.navigate(['/setting']);

      });
    }


  }

}
