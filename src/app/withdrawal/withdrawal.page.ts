import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.page.html',
  styleUrls: ['./withdrawal.page.scss'],
})
export class WithdrawalPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  w1(){
    this.router.navigate(['/reach-target']);
  }
  w2(){
    this.router.navigate(['/personal']);
  }
  w3(){
    this.router.navigate(['/others']);
  }



}
