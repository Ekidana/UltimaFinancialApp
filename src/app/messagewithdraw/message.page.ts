import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ok(){
    this.router.navigate(['/withdraw']);
  }

}

