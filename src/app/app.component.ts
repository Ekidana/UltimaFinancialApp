import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { Platform, MenuController, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import 'firebase/auth'
import { LoginPage } from './login/login.page';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
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
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'happy'
    }
  ];

  constructor(
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
      

      firebase.auth().onAuthStateChanged((firebaseUser: firebase.User) => {
        if (firebaseUser) {
          this.menuController.enable(true, 'authenticated');
        } else {
          this.menuController.enable(true, 'unauthenticated');
        }
      });
    });
  }
  
  async login() {
    const modal = await this.modalController.create({
      component: LoginPage
    });
    return await modal.present();
  }
}
