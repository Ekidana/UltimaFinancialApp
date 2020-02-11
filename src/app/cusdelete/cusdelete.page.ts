import { Component, OnInit } from '@angular/core';
import { Information } from '../shared/models/information';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { InfoService } from '../shared/services/info.service';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-cusdelete',
  templateUrl: './cusdelete.page.html',
  styleUrls: ['./cusdelete.page.scss'],
})
export class CusdeletePage implements OnInit {
  information : Information[];
  allInformation: Information[];
  

  constructor(private infoService: InfoService, private router: Router, private route: ActivatedRoute, private modalController: ModalController) { }



// delete() {
//   const info = new Information()
//   this.infoService.remove(info);
//   this.router.navigate(['/cusupdate']);

// }

search(event) {
  const text = event.target.value;
  if (text && text.trim() !== '') {
    this.information = this.allInformation.filter(
      item => item.nric.toLowerCase().includes(text.toLowerCase()));
  } else {
    // Blank text, clear the search, show all products
    this.information = this.allInformation;
  }

}

delete(item: Information) {
  this.infoService.delete(item).then(() => {
    this.infoService.getAllInformation().then(
      result => this.information = result
    );
  });
}

  ngOnInit() {
      this.infoService.getAllInformation().then(
      result => this.information = this.allInformation = result)
  };

}
