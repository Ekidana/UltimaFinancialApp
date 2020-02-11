import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { FormGroup, FormControl, Validators,ReactiveFormsModule  } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import  'firebase/firestore';
import { User } from '../shared/models/users';

import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-withdrawalchart',
  templateUrl: './withdrawalchart.page.html',
  styleUrls: ['./withdrawalchart.page.scss'],
})
export class WithdrawalchartPage implements OnInit {

  chartData: ChartDataSets[] = [{ data: [], label: 'Withdrawal Amount' }];
  chartLabels: Label[];

  // Options
  chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Withdrawal History'
    }
  };
  chartColors: Color[] = [
    {
      borderColor: '#000000',
      backgroundColor: '#007a88'
    }
  ];
  chartType = 'bar';
  showLegend = false;
 
  // For search
  stock = '';

  user: User = new User();

  
  withdrawalArray: any[] = [];

  constructor(private http: HttpClient,private authService: AuthService,private router: Router,public toastController: ToastController, public loadingController: LoadingController) { 
    this.user = this.authService.getCurrentUser();
    this.getWithdrawal()    
  }

  async getWithdrawal() {

    let userDoc = firebase.firestore().collection('Withdrawal');
    await userDoc.get().then((querySnapshot) => { 
      querySnapshot.forEach((doc) => {
           console.log(doc.id, "=>", doc.data()); 
           if(doc.data().useremail == this.user.email){
           
            this.withdrawalArray.push( doc.data())
  
           } 
           
      })
      this.getData()
   })


  }

  getData() {
    const history = this.withdrawalArray;

    this.chartLabels = [];
    this.chartData[0].data = [];

    for (let entry of history) {
      var d = new Date(entry.withdrawalDate)
      var dte = d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()
      this.chartLabels.push(dte);
      this.chartData[0].data.push(entry['withdrawalAmount']);
    }
  } 

  typeChanged(e) {
    const on = e.detail.checked;
    this.chartType = on ? 'line' : 'bar';
  }

  ngOnInit() {
  }

}
