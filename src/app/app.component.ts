import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { Platform, MenuController, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import 'firebase/auth'
import { LoginPage } from './login/login.page';
import { AuthService } from './shared/services/auth.service';
import { User } from './shared/models/users';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  uName: string = "Portfolio"
  user: User = new User();
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  public appPagesAuthenticated = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Create Expense',
      url: '/expensetracker-create',
      icon: 'add'
    }, 
    {
      title: 'View Expenses',
      url: '/expensetracker-list',
      icon: 'list'
    },
    {
      title: "Calculator",
      url: '/calculator', 
      icon:'calculator'
    },
    {
      title: this.uName,
      url: '/portfolio',
      icon: 'contact'
    },
        {
      title: 'Transfer',
      url: '/withdraw',
      icon: 'cash'
    },
    {
      title: 'Saving',
      url: '/saving',
      icon: 'ribbon'
    },
    {
      title: 'UnitTrust',
      url: '/unittrust',
      icon: 'cash'

    },
    {
      title: 'UnitTrust Cart',
      url: '/go-unittrust',
      icon: 'cart'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'happy'
    },
    {
      title: 'Setting',
      url: '/setting',
      icon: 'settings'
    }
  ];

  public appPagesAuthenticatednotverified = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Create Expense',
      url: '/expensetracker-create',
      icon: 'add'
    }, 
    {
      title: 'View Expenses',
      url: '/expensetracker-list',
      icon: 'list'
    },
    {
      title: "Calculator",
      url: '/calculator', 
      icon:'calculator'
    },
    {
      title: 'Verify Profile',
      url: '/profile',
      icon: 'happy'
    }
  ];

  public appPagesAuthenticatedadmin = [
    {
      title: 'Admin',
      url: '/admin',
      icon: 'man'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'happy'
    }
  ];

  public appPagesAuthenticatedfm = [
    {
      
        title: 'Unit Trust',
        url: '/admin-investment',
        icon: 'options'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'happy'
    }
  ];

  constructor(
    private authService: AuthService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuController: MenuController,
    private modalController: ModalController,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      var firebaseConfig = {
        apiKey: "AIzaSyAwUTsD1ACyM7pyxyi1pd7MRgYBuY6kI6Q",
        authDomain: "ultima-financial-servi.firebaseapp.com",
        databaseURL: "https://ultima-financial-servi.firebaseio.com",
        projectId: "ultima-financial-servi",
        storageBucket: "ultima-financial-servi.appspot.com",
        messagingSenderId: "408698535720",
        appId: "1:408698535720:web:f3b10251e56b6c1aa69a1d",
        measurementId: "G-5Y8ZQY5RQ4"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      AuthService.intialize();

      this.getUserName()

      firebase.auth().onAuthStateChanged((firebaseUser: firebase.User) => {
        if (firebaseUser) {
          firebase.firestore().collection('users').doc(firebaseUser.email).get().then((docSnapshot) => {
            if (docSnapshot.data().role === "Admin") {
              console.log("Admin")
              this.menuController.enable(true, 'authenticatedadmin');
            }
            else {
              if (docSnapshot.data().role === "Fund Manager") {
                console.log("Fund Manager")
                this.menuController.enable(true, 'authenticatedfm');
              }
              else {
                if (docSnapshot.data().verified === "Yes") {
                  this.menuController.enable(true, 'authenticated');
                }
                else {
                  if (docSnapshot.data().verified === "No"){
                    this.menuController.enable(true, 'authenticatednotverified');
                  }
                  else {
                    if (docSnapshot.data().verified === "Pending"){
                      this.menuController.enable(true, 'authenticatednotverified');
                    }
                  }
                }
              }
            }
          });
        } else {
          this.menuController.enable(true, 'unauthenticated');
        }
      });
    });
  }
  getUserName() {
    this.user = this.authService.getCurrentUser();
    let userDoc = firebase.firestore().collection('users');
    userDoc.get().then((querySnapshot) => { 
      querySnapshot.forEach((doc) => {
           console.log(doc.id, "=>", doc.data()); 
           if(doc.data().email == this.user.email){
            // alert(doc.data().accountname)
            this.uName = doc.data().fname +" "+doc.data().lname
          // alert(this.uName)
           } 
           
      })


   })

  }
  ionViewDidEnter() {
    firebase.auth().onAuthStateChanged((firebaseUser: firebase.User) => {
      if (firebaseUser) {
        firebase.firestore().collection('users').doc(firebaseUser.email).get().then((docSnapshot) => {
          if (docSnapshot.data().role === "Admin") {
            console.log("Admin")
            this.menuController.enable(true, 'authenticatedadmin');
          }
          else {
            if (docSnapshot.data().role === "Fund Manager") {
              console.log("Fund Manager")
              this.menuController.enable(true, 'authenticatedfm');
            }
            else {
              console.log("User")
              this.menuController.enable(true, 'authenticated');
            }
          }
        });
      } else {
        this.menuController.enable(true, 'unauthenticated');
      }
    });
  }

  async login() {
    const modal = await this.modalController.create({
      component: LoginPage
    });
    return await modal.present();
  }
}
