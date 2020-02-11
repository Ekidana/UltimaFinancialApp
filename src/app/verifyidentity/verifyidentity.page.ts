import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { ModalController } from '@ionic/angular';
import { User } from '../shared/models/users';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-verifyidentity',
  templateUrl: './verifyidentity.page.html',
  styleUrls: ['./verifyidentity.page.scss'],
})
export class VerifyidentityPage implements OnInit {

  constructor(private authService: AuthService, public camera: Camera, public file: File, private modalController: ModalController, public emailComposer: EmailComposer) { }

  nric: any;
  selfie: any;
  nricimageData: any;
  selfieimageData: any;
  user: User = new User();
  email: string;

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    this.email = this.user.email
  }

  takenric() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
      cameraDirection: 1
    }
    
    this.camera.getPicture().then((imageData) => {
      this.nricimageData = imageData
      let filename = imageData.substring(imageData.lastIndexOf('/') + 1);
      let path = imageData.substring(0, imageData.lastIndexOf('/') + 1);
      this.file.readAsDataURL(path,filename).then((base64data) => {
        this.nric = base64data;
      })
    });     
  }

  takeselfie() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
      cameraDirection: 1
    }
    
    this.camera.getPicture().then((imageData) => {
      this.selfieimageData = imageData
      let filename = imageData.substring(imageData.lastIndexOf('/') + 1);
      let path = imageData.substring(0, imageData.lastIndexOf('/') + 1);
      this.file.readAsDataURL(path,filename).then((base64data) => {
        this.selfie = base64data;
      })
    });     
  }

  submitpicture() {
    firebase.firestore().collection("users").doc(this.email).update({
      nricimage: this.nric,
      selfieimage: this.selfie,
      verified: "No"
    }).then(function() {
      console.log("Document successfully written!");
      alert("You have retried your identity verification successfully. We will be in touch.")
      //this.authService.logout();
      this.router.navigate(['/home']);
      this.modalController.dismiss();
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  }
}
