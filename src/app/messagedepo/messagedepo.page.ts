import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
@Component({
  selector: 'app-messagedepo',
  templateUrl: './messagedepo.page.html',
  styleUrls: ['./messagedepo.page.scss'],
})
export class MessagedepoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ok(){
    this.router.navigate(['/withdraw']);
  }

}
