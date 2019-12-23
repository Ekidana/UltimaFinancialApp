import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/users';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { FirebaseProfileInfoAddService } from '../shared/services/firebase-profile-info-add.service';
import { Information } from '../shared/models/information';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: User = new User();
  public userprofile: any;
  
  constructor(private authService: AuthService, private router: Router, private firebaseProfileInfoAddService: FirebaseProfileInfoAddService) { }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    //this.getUserName();
    //console.log("hello " + this.getUserName())
  }

  //getUserName() {
    //this.firebaseProfileInfoAddService.displayInfo()
    //.get()
    //.then(userProfileSnapshot => {
      //this.userprofile = userProfileSnapshot.data();
    //})
  //}
  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
