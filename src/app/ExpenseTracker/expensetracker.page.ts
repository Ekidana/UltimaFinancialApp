import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items=["Mac Pro ","CyberTruck","ionic","API"];
  
  
  test(){
    console.log ('tets works');
  }
  delete(i)
  {
    console.log('Delete works');
    this.items.splice(i, 1);
  }
  //constructor() {}

}
