import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-track-clac',
  templateUrl: './expense-track-clac.page.html',
  styleUrls: ['./expense-track-clac.page.scss'],
})
export class ExpenseTrackClacPage implements OnInit {

  items=["CyberTruck","MacPro","Falcon9","E63 Wagon","A7", "PoleStar1", "PoleStar2", "Jeff Bezos", "Bill Gates","Elon Musk", "Panda Express", "Yum Foods", "Warren Buffet"];
 test(){
   console.log ("it works!");
 }
delete(i){
  console.log("Delete works!")
  this.items.splice(i,1)
}
  constructor() { }

  ngOnInit() {
  }

}
