import { Component, OnInit } from '@angular/core';
import { Items } from '../shared/models/item';

@Component({
  selector: 'app-expense-track-clac',
  templateUrl: './expense-track-clac.page.html',
  styleUrls: ['./expense-track-clac.page.scss'],
})

export class ExpenseTrackClacPage implements OnInit {
  items: Items[];
  
  constructor() { }

  ngOnInit() {
    this.items = [new Items("Cybertruck"),
    new Items("MacPro"),new Items("Apple")]
  }

  delete(i){
   this.items.splice(i,1)
  }

}
